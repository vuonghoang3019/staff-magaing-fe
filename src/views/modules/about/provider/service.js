import api from './api';

const service = {
    actions: {
        async index() {
            return await axios.get(api.index)
        },

        async store(data = {}) {
            return await axios.post(api.store, data)
        }
    }
}

export default service;