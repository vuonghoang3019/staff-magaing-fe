<template>
    <div>
        <p>{{ text }}</p>
        <span>Code</span>
    </div>
</template>

<script>
    export default {
        props: {
            text: {
                type: String,
                default: ''
            }
        }
    }
</script>
