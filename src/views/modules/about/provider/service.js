import api from './api';

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
        },

        async update(data = {}) {
            return await axios.put(api.update.concat(data.Id), data)
        }
    }
}

export default service;