<template>
    <table class="table table-striped table-hover" :id="id">
        <thead>
        <tr>
            <th></th>
            <th v-for="column in columns" :key="column">
                {{column.title}}
            </th>
        </tr>
        </thead>
        <tbody>
            <tr v-for="item in data" :key="item">
                <td></td>
                <td v-for="column in columns" :key="column">{{item[column]}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        props: {
            id: {
                type: String,
                default: 'table'
            },
            columns: {
                type: Array,
                required: true,
            },
            data: {
                type: Array,
                required: true,
            }
        },
        setup() {
            // console.log(this.data);
        }
    }
</script>