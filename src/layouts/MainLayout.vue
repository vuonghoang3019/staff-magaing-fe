<template>
    <div class="wrapper">
        <!-- Navbar -->
        <Header />
        <!-- /.navbar -->
        <!-- Main Sidebar Container -->
        <sidebar/>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <router-view />
        </div>
        <!-- /.content-wrapper -->
        <footer class="main-footer">
            <strong>Staff Managing 2.0</strong>
        </footer>
    </div>
</template>

<script>
    import Header from './Header';
    import Sidebar from '../layouts/sidebar/Sidebar';
    import ContentHeader from '../app/core/components/ContentHeader';

    export default {
        components: {
            Header,
            Sidebar,
            ContentHeader
        }
    }
</script>