<template>
    <section class="content">
        <div class="container-fluid">
            <slot name="top"></slot>
            <div class="row">
                <div class="col-md-2 pr-md-0i">
                    <slot name="filters"></slot>
                </div>
                <div class="col-md-10">
                    <div class="box box-solid">
                        <div class="box-body">
                            <slot name="actions"></slot>
                        </div>
                    </div>
                    <div class="box box-solid table-responsive p-0">
                        <slot name="contents"></slot>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>