<template>
    <content-header/>

    <section class="content">
        <tabs>
            <template #tab1>
                <info :form="about"/>
            </template>
        </tabs>
    </section>
</template>

<script>
import EditMixin from '@/app/mixins/edit-page';
import Info from './edit/Info';
import {onMounted, ref} from "vue";
import composable from "@/views/modules/about/provider/composable";
import {useRoute} from 'vue-router';
import {isNull} from "@/app/helper";

export default {
    mixins: [EditMixin],
    components: {
        Info
    },
    setup() {
        const route = useRoute();
        const about = ref({});

        const edit = () => {
            composable.actions.edit(route.params.id).then(res => {
                if (!isNull(res)) {
                    about.value = res.data.Data.About;
                }
            })
        }

        onMounted(() => {
            edit();
        })

        return {
            about,
        }
    }
}
</script>