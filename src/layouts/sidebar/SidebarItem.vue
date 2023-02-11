<template>
    <li class="nav-item" v-for="parent of sidebars">
        <a href="#" class="nav-link">
            <i class="nav-icon" :class="parent.Icon"></i>
            <p>
                {{ parent.DisplayName }}
                <i class="fas fa-angle-left right"></i>
            </p>
        </a>
        <ul class="nav nav-treeview">
            <li class="nav-item" v-for="child of sidebarChild" >
                <router-link class="nav-link" :to="{name: child.Code}" :class="{active: isActive(child.Code)}" v-if="parent.Code === child.Code">
                    <i class="nav-icon" :class="child.Icon"></i>
                    <p>
                        {{ child.DisplayName ?? '' }}
                    </p>
                </router-link>
            </li>
        </ul>
    </li>
</template>

<script>
    export default {
        props: {
            sidebars: {
                type: Array,
            },
            sidebarChild: {
                type: Array,
            }
        },
        methods: {
            isActive(code) {
                // let url = window.location;
                // let arrPath = url.pathname.split('/');
                //
                // if (arrPath.includes(code)) {
                //     return true;
                // }
            }
        },
    }
</script>