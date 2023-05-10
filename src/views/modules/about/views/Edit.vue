<template>
    <content-header/>

    <section class="content">
        <tabs :tabs="tabs">
            <template #tab1>
                <info/>
            </template>
        </tabs>
    </section>
</template>

<script>
    import EditMixin from '@/app/mixins/edit-page';
    import Info from './edit/Info';
    import {onMounted, ref} from "vue";
    import service from "@/views/modules/about/provider/service";
    import { useRoute } from 'vue-router';
    import {isNull} from "@/app/helper";

    export default {
        mixins: [EditMixin],
        components: {
            Info
        },
        setup() {
            const about = ref({});
            const route = useRoute();

            onMounted(() => {
                edit();
            })
            const edit = () => {
                service.actions.edit(route.params.id).then(res => {
                    if (!isNull(res)) {
                        console.log(res);
                    }
                })
            }
        }
    }
</script>