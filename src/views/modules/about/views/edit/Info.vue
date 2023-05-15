<template>
    <div class="box-header with-border">
        <button-save @click="update"/>
    </div>
    <div class="box-body">
        <div class="col body-form">
            <form class="form-content row">
                <div class="col-md-6 form-group">
                    <label for="ContractNumber">Title</label>
                    <input type="text" class="form-control" id="Title" v-model="form.Title">
                </div>
                <div class="col-md-6 form-group">
                    <label for="ShortContent">ShortContent</label>
                    <input type="text" class="form-control" id="ShortContent" v-model="form.ShortContent">
                </div>
                <div class="col-md-4 form-group">
                    <label for="ShortContent">Seo</label>
                    <input type="text" class="form-control" id="Seo" v-model="form.Seo">
                </div>
                <div class="col-md-4 form-group">
                    <label for="ShortContent">Sort Order</label>
                    <input type="text" class="form-control" id="SortOrder" v-model="form.SortOrder">
                </div>
                <div class="col-md-4 form-group m-auto">
                    <div class="chiller_cb p-10">
                        <input id="myCheckbox" type="checkbox" v-model="form.Status">
                        <label for="myCheckbox">Checkbox checked</label>
                        <span></span>
                    </div>
                </div>
                <div class="col-md-12 form-group">
                    <label for="ShortContent">Content</label>
                    <ckeditor :editor="textEditor.editor" v-model="form.Content"
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
import {onMounted, ref, toRefs} from "vue";
import service from "@/views/modules/about/provider/service";
import {isNull} from "@/app/helper";

export default {
    components: {
        ButtonSave,
        ckeditor: CKEditor.component
    },

    props: {
        form: {
            type: Object,
            require: true,
        }
    },

    setup(props, context) {
        const {form} = toRefs(props);
        const textEditor = {
            editor: ClassicEditor,
            editorConfig: {},
            editorData: form.value.Content
        }
        const update = () => {
            service.actions.update(form.value).then(res => {
                if (!isNull(res)) {
                    notify.success('Operation success');
                }
            })
        }


        return {
            textEditor,
            form,
            update
        }
    }
}
</script>