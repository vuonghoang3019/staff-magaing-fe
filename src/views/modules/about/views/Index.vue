<template>
    <content-header/>
    <index-content>
        <template #filters>
<!--            <search-keyword/>-->
            <div class="box">
                <div class="box-header with-border">
                    <span>Dates</span>
                </div>
                <div class="box-body" v-if="test">
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
            <easy-data-table
                    :headers="tables.columns"
                    :items="tables.data"
                    theme-color="#1d90ff"
                    :hide-footer="true"
                    header-text-direction="center"
                    v-model:items-selected="itemsSelected"
                    body-text-direction="center">
                <template #header-player="header">
                    <code-header :text="header.text"/>
                </template>
                <template #item-player="{ player, team }">
                    <div>
                        <p>
                            <router-link :to="to">
                                {{ player }}
                            </router-link>
                        </p>
                        <span>{{ team }}</span>
                    </div>
                </template>
            </easy-data-table>
        </template>
    </index-content>
</template>

<script>
    import IndexMixin from '@/app/mixins/index-page';
    import {ref, computed, onMounted, reactive} from "vue";
    import Config from '../provider/config';
    import CodeHeader from "@/views/modules/about/views/index/CodeHeader";

    export default {
        mixins: [IndexMixin],
        components: {
            CodeHeader,
        },

        setup(props, context) {
            const itemsSelected = ref([]);
            const test = ref(false);
            const tables = {
                    columns: [
                        { text: "PLAYER", value: "player" },
                        { text: "TEAM", value: "team"},
                        { text: "NUMBER", value: "number"},
                        { text: "POSITION", value: "position"},
                        { text: "HEIGHT", value: "indicator.height"},
                        { text: "WEIGHT (lbs)", value: "indicator.weight", sortable: true},
                        { text: "LAST ATTENDED", value: "lastAttended", width: 200},
                        { text: "COUNTRY", value: "country"},
                    ],
                    data: [
                        { player: "Stephen Curry", team: "GSW", number: 30, position: 'G', indicator: {"height": '6-2', "weight": 185}, lastAttended: "Davidson", country: "USA"},
                        { player: "Lebron James", team: "LAL", number: 6, position: 'F', indicator: {"height": '6-9', "weight": 250}, lastAttended: "St. Vincent-St. Mary HS (OH)", country: "USA"},
                        { player: "Kevin Durant", team: "BKN", number: 7, position: 'F', indicator: {"height": '6-10', "weight": 240}, lastAttended: "Texas-Austin", country: "USA"},
                        { player: "Giannis Antetokounmpo", team: "MIL", number: 34, position: 'F', indicator: {"height": '6-11', "weight": 242}, lastAttended: "Filathlitikos", country: "Greece"},
                    ]
                };
            const to = computed(() => {
                return {name: Config.router.edit, params: {id: '123-123-123'}}
            })

            return {
                tables,
                itemsSelected,
                Config,
                to,
              test
            }
        },
    }
</script>
