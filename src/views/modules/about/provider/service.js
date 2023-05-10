import api from './api';

console.log('123');
const service = {
    actions: {
        async index() {
            return await axios.get(api.index)
        },

        async store(data = {}) {
            return await axios.post(api.store, data)
        },

        async edit(id) {
            return await axios.get(api.edit.concat(id))
        }
    }
}

export default service;