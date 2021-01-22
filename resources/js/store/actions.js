let actions = {
    setPhotoUrls ({commit}, payload) {
        commit('setPhotoUrlsMutation', payload)
    },
    incrementInfiniteId ({commit}, payload) {
        commit('incrementInfiniteIdMutation', payload)
    },
    setPreviousUrl ({commit}, payload) {
        commit('setPreviousUrlMutation', payload)
    },
    setCurrentUrl ({commit}, payload) {
        commit('setCurrentUrlMutation', payload)
    }
}

export default actions
