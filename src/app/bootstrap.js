import { createApp } from "vue";
import App from "../App.vue";
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
    window.notify = require('./provider/notify-provider').default;
    window.axios = require('./provider/axios-http-provider').default;
}
catch (e) {
    console.log(e)
}