<template>
    <div :class="{'box': boxClass}">
        <div :class="{'box-body': boxClass}">
            <input type="text" id="search" class="form-control search-input" name="search"
                   @keyup.enter.prevent="search" v-model="query.keyword"
                   placeholder="Keyword">
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            query: {
                required: true,
                default: ''
            },
            boxClass: {
                type: Boolean,
                default: true,
            },
        },

        methods: {
            search() {
                this.$emit('search');
            },
        }
    };
</script>
