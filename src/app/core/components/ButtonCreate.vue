<template>
    <button @click="action" class="btn btn-default btn-control">
        <i class="fa fa-plus"></i>
        {{ text }}
    </button>
</template>

<script>
    export default {
        props: {
            text: {
                type: String,
                default: 'Add',
            },
            route: {
                type: String,
                require: true
            }
        },

        methods: {
            action() {
                this.$router.push({name: this.route})
            }
        },
    }
</script>