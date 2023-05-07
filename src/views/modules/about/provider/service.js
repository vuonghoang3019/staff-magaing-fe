import api from './api';

const service = {
    actions: {
        async store(data = {}) {
            return await axios.post(api.store, data)
        }
    }
}

export default service;