<template>
    <content-header/>

    <section class="content">
        <tabs>
            <template #tab1>
                <info :form="24"/>
            </template>
        </tabs>
    </section>
</template>

<script>
    import EditMixin from '@/app/mixins/edit-page';
    import Info from './edit/Info';
    import {onMounted, reactive} from "vue";
    import service from "@/views/modules/about/provider/service";
    import { useRoute } from 'vue-router';
    import {isNull} from "@/app/helper";

    export default {
        mixins: [EditMixin],
        components: {
            Info
        },
        setup() {
            let about = reactive({});
            const route = useRoute();

            onMounted(() => {
                edit();
            })

            const edit = () => {
                service.actions.edit(route.params.id).then(res => {
                    if (!isNull(res)) {
                        about = res.data.Data.About;
                    }
                })
            }

            return {
                about
            }
        }
    }
</script>