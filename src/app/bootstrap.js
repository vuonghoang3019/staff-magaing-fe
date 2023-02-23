import {Vue} from './core/npm';
try {


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
}
catch (e) {
    console.log(e)
}