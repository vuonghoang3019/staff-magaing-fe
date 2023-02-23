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

    export default {
        mixins: [EditMixin],
        components: {
            Info
        },
        setup() {

        }
    }
</script>