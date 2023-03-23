<template>
    <div class="box-header with-border">
        <button-save/>
    </div>
    <div class="box-body">
        <div class="col body-form">
            <form class="form-content row">
                <div class="col-md-6 form-group">
                    <label for="ContractNumber">Title</label>
                    <input type="text" class="form-control" id="ContractNumber">
                </div>
                <div class="col-md-6 form-group">
                    <label for="ShortContent">ShortContent</label>
                    <input type="text" class="form-control" id="ShortContent">
                </div>
                <div class="col-md-4 form-group">
                    <label for="ShortContent">Seo</label>
                    <input type="text" class="form-control" id="Seo">
                </div>
                <div class="col-md-4 form-group">
                    <label for="ShortContent">Sort Order</label>
                    <input type="text" class="form-control" id="Sort Order">
                </div>
                <div class="col-md-4 form-group m-auto">
                    <div class="chiller_cb p-10">
                        <input id="myCheckbox" type="checkbox">
                        <label for="myCheckbox">Checkbox checked</label>
                        <span></span>
                    </div>
                </div>
                <div class="col-md-12 form-group">
                    <label for="ShortContent">Content</label>
                    <ckeditor :editor="textEditor.editor" v-model="textEditor.editorData" :config="textEditor.editorConfig"></ckeditor>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import {ButtonSave} from "@/app/core/components";
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
    import {CKEditor} from '@/app/core/npm';

    export default {
        components: {
            ButtonSave,
            ckeditor: CKEditor.component
        },

        setup() {
            const textEditor = {
                editor: ClassicEditor,
                editorData: '<p>Content of the editor.</p>',
                editorConfig: {}
            }
            return {
                textEditor
            }
        }
    }
</script>