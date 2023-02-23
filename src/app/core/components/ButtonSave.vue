<template>
    <button @click.prevent="action"
            class="btn btn-default btn-control"
            :id="id"
            v-if="!lock"
            :data-loading-text="`<i class='${loadingIcon}'></i> ${loadingText}`">
        <i :class="icon"></i>
        {{ text }}
    </button>

    <button disabled class="btn btn-default btn-control" :id="id" v-else>
        <i :class="icon"></i>
        {{ text }}
    </button>
</template>

<script>
    export default {
        props: {
            id: {
                type: String,
                default: 'btnSave'
            },
            icon: {
                type: String,
                default: 'fas fa-save',
            },
            text: {
                type: String,
                default: 'Save',
            },
            lock: {
                type: Boolean,
                default: false,
            },
            loadingIcon: {
                type: String,
                default: 'fas fa-spinner fa-spin',
            },
            loadingText: {
                type: String,
                default: 'Save',
            },
            module: {
                type: [Number],
                default: -1,
            },
            code: {
                type: [String, Number],
                default: -1,
            },
        },
        setup() {
            const action = () => {
                this.$emit('clicked');
            };

            return {
                action
            }
        },
    };
</script>
