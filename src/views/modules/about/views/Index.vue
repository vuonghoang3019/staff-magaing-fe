<template>
    <content-header/>
    <index-content>
        <template #filters>
            <!--            <search-keyword/>-->
            <div class="box">
                <div class="box-header with-border">
                    <span>Dates</span>
                </div>
                <div class="box-body">
                    <p>
                        <search-date keyword="from" placeholder="FromDate"/>
                    </p>
                    <p>
                        <search-date keyword="from" placeholder="FromDate"/>
                    </p>
                </div>
            </div>
        </template>

        <template #actions>
            <button-search/>
            <button-create :route="Config.router.create"/>
            <button-delete/>
            <div class="float-right">
                <pagination></pagination>
            </div>
        </template>

        <template #contents>
            <table class="table table-hover">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="(about, index) in abouts" :key="index">
                        <th scope="row">1</th>
                        <td>{{ about.ImagePath }}</td>
                        <td>{{ about.Title }}</td>
                        <td>{{ about.Slug }}</td>
                        <td>{{ about.CreatedDate }}</td>
                    </tr>
                </tbody>
            </table>
        </template>
    </index-content>
</template>

<script>
import IndexMixin from '@/app/mixins/index-page';
import {ref, computed, onMounted} from "vue";
import Config from '../provider/config';
import CodeHeader from "@/views/modules/about/views/index/CodeHeader";
import service from "@/views/modules/about/provider/service";
import {isNull} from "@/app/helper";

export default {
    mixins: [IndexMixin],
    components: {
        CodeHeader,
    },

    setup(props, context) {
        const itemsSelected = ref([]);
        let abouts = ref([]);
        service.actions.index().then(res => {
            if (!isNull(res)) {
                abouts.value = res.data.Data.Abouts.data;
                // console.log(abouts[0].Title);
            }
        })
        // onMounted(() => {
        //     index();
        // })
        //
        // const index = () => {
        //     service.actions.index().then(res => {
        //         if (!isNull(res)) {
        //             abouts.value = res.data.Data.Abouts.data;
        //             // console.log(abouts[0].Title);
        //         }
        //     })
        // }

        return {
            itemsSelected,
            Config,
            abouts
        }
    },
}
</script>
