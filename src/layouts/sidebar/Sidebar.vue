<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <!-- Brand Logo -->
        <router-link to="/" class="brand-link">
            <img src="../../assets/plugins/admin-lte/img/avatar.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
                 style="opacity: .8">
            <span class="brand-text font-weight-light">AdminLTE 3</span>
        </router-link>

        <!-- Sidebar -->
        <div class="sidebar">
            <!-- Sidebar user panel (optional) -->
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                    <img src="../../assets/plugins/admin-lte/img/avatar.png" class="img-circle elevation-2" alt="User Image">
                </div>
                <div class="info">
                    <a href="#" class="d-block">Alexander Pierce</a>
                </div>
            </div>

            <!-- SidebarSearch Form -->
            <div class="form-inline">
                <div class="input-group" data-widget="sidebar-search">
                    <input class="form-control form-control-sidebar" type="search" placeholder="Search"
                           aria-label="Search">
                    <div class="input-group-append">
                        <button class="btn btn-sidebar">
                            <i class="fas fa-search fa-fw"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Sidebar Menu -->
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <sidebar-item :sidebars="sidebars" :sidebarChild="sidebarChild"/>
                </ul>
            </nav>
            <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
    </aside>
</template>

<script>
    import SidebarItem from "@/layouts/sidebar/SidebarItem";
    export default {
        components: {
            SidebarItem
        },

        data() {
            return {
                sidebars: [
                    {
                        Code: 'about',
                        DisplayName: 'About',
                        Icon: 'fas fa-info-circle',
                        Sort: 1,
                    },
                    // {
                    //     Code: 'classroom',
                    //     DisplayName: 'Class Room',
                    //     Icon: 'fas fa-school',
                    //     Sort: 1,
                    // },
                ],
                sidebarChild: [
                    {
                        Code: 'about',
                        DisplayName: 'About',
                        Icon: 'fas fa-info-circle',
                        Sort: 1,
                    },
                ]
            }
        },
    }
</script>