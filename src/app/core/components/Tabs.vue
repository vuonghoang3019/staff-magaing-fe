<template>
    <div class="nav-tabs-custom">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <template v-for="(tab, key) in tabs">
                <li class="nav-item" role="presentation">
                    <button :id="`#tab_${key+1}`" :class="`nav-link li-tab li-tab-${key+1}`"
                            data-toggle="tab" :data-target="`#tab_${key+1}`"
                            type="button" role="tab"
                            aria-selected="true" @click="setTab(key + 1)">
                        <i :class="tab.icon"></i>
                        {{ tab.text }}
                    </button>
                </li>
            </template>
        </ul>
        <div class="tab-content" id="myTabContent">
            <template v-for="(tab, key) in tabs">
                <div :class="`tab-pane fade div-tab div-tab-${key+1}`" :id="`tab_${key+1}`" role="tabpanel">
                    <slot :name="`tab${key+1}`"></slot>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    import {onMounted} from 'vue';
    import {useRoute} from 'vue-router';

    export default {
        props: {
            tabs: {
                type: Array,
                default: () => [{
                    icon: 'fas fa-info-circle',
                    text: 'Info',
                }],
            },
        },

        setup(props, context) {
            const route = useRoute();

            const getTab = () => {
                let tabUrl = parseInt(route.query.tab);
                if (!isNaN(tabUrl) && Number.isInteger(tabUrl) && props.tabs.length >= tabUrl && tabUrl >= 1) {
                    return setTab(tabUrl);
                }

                return setTab(1);
            };

            const setTab = (tab) => {
                const createTabParam = '?tab='.concat(tab);
                window.history.replaceState(null, null, createTabParam);
                const liTabs = document.querySelectorAll('.li-tab');
                const divTabs = document.querySelectorAll('.div-tab');
                liTabs.forEach(liTab => liTab.classList.remove('active'));
                divTabs.forEach(divTab => divTab.classList.remove('active', 'show'));
                document.querySelector(`.li-tab-${tab}`).classList.add('active');
                document.querySelector(`.div-tab-${tab}`).classList.add('active', 'show');
            };

            onMounted(() => {
                getTab();
            });

            return {
                setTab,
            }
        },
    }
</script>