import {axios} from '@/app/core/npm';
import code from "@/app/config/code";
import router from "@/router";
import config from "@/views/modules/errors/provider/config";


axios.interceptors.response.use((res) => {
    const response = res.data;
    const status = response['Code'];

    if (status === code.notFound) {
        router.push({name: config.router.e404});
        return null;
    }

    if (status === code.serverError) {
        router.push({name: config.router.e500});
        return null;
    }

    if (status === code.unauthorized) {
        router.push({name: config.router.e401});
        return null;
    }

    if (status === code.validateCode) {
        notify.errors(response.Errors)
        return null;
    }

    return res;
}, (errors) => {
    console.log(errors);
    return Promise.reject(errors)
});

axios.interceptors.request.use((config) => {
    return config;
});
export default axios;