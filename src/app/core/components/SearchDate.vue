<template>
    <div class="form-group">
        <date-picker type="date"
                     v-model:value="time0"
                     value-type="format"
                     :placeholder="placeholder">
        </date-picker>
    </div>
</template>

<script>
    import {DatePicker} from '@/app/core/npm';

    export default {
        props: {
            placeholder: {
                type: String,
                default: '__-__-____',
            }
        },
        components: {
            DatePicker
        },

        data() {
            return {
                time0: null,
            };
        },
    }
</script>