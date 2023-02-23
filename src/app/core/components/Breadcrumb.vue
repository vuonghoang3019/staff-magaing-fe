<template>
    <div class="col-sm-6">
        <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item">
                <router-link :to="defaultRouter"><i :class="defaultIcon"></i> {{ defaultText }}</router-link>
            </li>
            <li v-for="bread in breadcrumbs" class="breadcrumb-item active">
                <router-link :to="bread.to || ''">
                    {{ bread.text }}
                </router-link>
            </li>
        </ol>
    </div>
</template>

<script>
    export default {
        props: {
            defaultRouter: {
                type: String,
                default: '/',
            },

            defaultText: {
                type: String,
                default: 'Dashboard'
            },

            defaultIcon: {
                type: String,
                default: 'fas fa-tachometer-alt'
            },

            breadcrumbs: {
                required: true,
                type: Array,
            },
        }
    }
</script>