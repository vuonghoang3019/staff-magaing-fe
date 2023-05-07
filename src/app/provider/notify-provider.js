import { toastr } from '@/app/core/npm';

require('../config/toastr');

export default {
    clear() {
        toastr.clear();
    },

    success(message = '') {
        if (message !== '') {
            this.clear();
            toastr.success(message);
        }
    },

    error(message = '') {
        if (message !== '') {
            this.clear();
            toastr.error(message);
        }
    },

    warning(message = '') {
        if (message !== '') {
            this.clear();
            toastr.warning(message);
        }
    },

    errors(errors = {}) {
        this.clear();
        let message = '';
        Object.entries(errors).forEach(([key, values]) => {
            $.each(values, (k, value) => {
                message += `<li style="list-style:none">${value}</li>`;
                return false;
            });
        });

        this.error(message);
    },
};
