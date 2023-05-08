import { createApp } from "vue";
import App from "../App.vue";
import NotifyProvider from './provider/notify-provider';
import AxiosHttpProvider from './provider/axios-http-provider';

try {
    const app = createApp(App);

    //load style
    window.$ = window.jQuery = require("jquery");
    require("../assets/css/app.scss");

    //Import Admin LTE
    require("../assets/plugins/admin-lte/css/adminlte.min.css");
    require("../assets/plugins/admin-lte/js/adminlte.min");
    require("../assets/plugins/admin-lte/js/bootstrap.bundle.min");

    //load helper
    require("./helper");

    //load env
    require("./env");

    window.notify = NotifyProvider;
    window.axios = AxiosHttpProvider;
}
catch (e) {
    console.log(e)
}