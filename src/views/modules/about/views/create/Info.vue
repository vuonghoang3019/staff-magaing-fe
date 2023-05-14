<template>
    <div class="box-header with-border">
        <button-save @clicked="store"/>
    </div>
    <div class="box-body">
        <div class="col body-form">
            <form class="form-content row" @submit.prevent="store">
                <div class="col-md-6 form-group">
                    <label for="Title">Title</label>
                    <input type="text" class="form-control" id="Title" v-model="form['Title']">
                </div>
                <div class="col-md-6 form-group">
                    <label for="ShortContent">ShortContent</label>
                    <input type="text" class="form-control" id="ShortContent" v-model="form['ShortContent']">
                </div>
                <div class="col-md-4 form-group">
                    <label for="ShortContent">Seo</label>
                    <input type="text" class="form-control" id="Seo" v-model="form['Seo']">
                </div>
                <div class="col-md-4 form-group">
                    <label for="SortOrder">Sort Order</label>
                    <input type="text" class="form-control" id="SortOrder" v-model="form['Sort Order']">
                </div>
                <div class="col-md-4 form-group m-auto">
                    <div class="chiller_cb p-10">
                        <input id="myCheckbox" type="checkbox" v-model="form['Status']">
                        <label for="myCheckbox">Status</label>
                        <span></span>
                    </div>
                </div>
                <div class="col-md-12 form-group">
                    <label for="ShortContent">Content</label>
                    <ckeditor :editor="textEditor.editor" v-model="form['Content']"
                              :config="textEditor.editorConfig"></ckeditor>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import {ButtonSave} from "@/app/core/components";
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
    import {CKEditor} from '@/app/core/npm';
    import {ref, reactive} from 'vue';
    import composable from "@/views/modules/about/provider/composable";
    import {isNull} from "@/app/helper";

    export default {
        components: {
            ButtonSave,
            ckeditor: CKEditor.component
        },

        setup() {
            const form = reactive({});

            const textEditor = {
                editor: ClassicEditor,
                editorConfig: {}
            };

            const store = () => {
                composable.actions.store(form).then((res) => {
                    if (!isNull(res)) {
                        notify.success('Operation success');
                    }
                })
            };

            return {
                textEditor,
                store,
                form
            };
        }
    }
</script>