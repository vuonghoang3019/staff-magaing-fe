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
    import CreatePage from '@/app/mixins/create-page';
    import Info from './create/Info';

    export default {
        mixins: [CreatePage],
        components: {
            Info
        },
        setup() {
            return {
                tabs: [
                    {icon: 'fas fa-info-circle', text: 'Info'},
                ],
            }
        }
    }
</script>