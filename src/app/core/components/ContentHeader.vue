<template>
    <div class="content-header">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h4>
                    <img :src="image" alt="" v-if="image">
<!--                    button back here-->
                    {{ title || '' }}
                </h4>
            </div><!-- /.col -->
            <breadcrumb :breadcrumbs="breadcrumbs"/>
        </div>
    </div>
</template>

<script>
    import {Breadcrumb} from "@/app/core/components";

    export default {
        components: {
            Breadcrumb
        },

        computed: {
            title() {
                return this.$route.meta.title;
            },

            image() {
                return this.$route.meta.image;
            },

            backValue() {
                return this.$route.params.back || null;
            }
        },

        data() {
            return {
                breadcrumbs: this.$route.meta.breadcrumbs,
            }
        },
    }
</script>

<style lang="scss" scoped>
    .content-header h4 {
        font-size: 18px;
        font-weight: normal;
    }
</style>