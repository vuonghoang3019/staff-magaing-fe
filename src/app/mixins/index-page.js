import {
    Pagination,
    ContentHeader,
    IndexContent,
    ButtonSearch,
    ButtonCreate,
    ButtonDelete,
    SearchKeyword,
    SearchDate,
    TableContent
} from "@/app/core/components";

import {EasyDataTable} from "@/app/core/npm"
import { ref } from "vue";

export default {
    components: {
        ContentHeader,
        IndexContent,
        Pagination,
        ButtonSearch,
        ButtonCreate,
        ButtonDelete,
        SearchKeyword,
        SearchDate,
        TableContent,
        EasyDataTable
    },

    setup() {
        const tables = {
            columns: [],
            data: [],
        }
        return {
            tables,
        }
    },
}