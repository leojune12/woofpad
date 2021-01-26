let actions = {
    setPhotoUrls ({commit}, payload) {
        commit('setPhotoUrlsMutation', payload)
    },
    resetPhotoUrls ({commit}) {
        return new Promise((resolve, reject) => {
            commit('resetPhotoUrlsMutation')
            resolve()
        })
    },
    setCurrentBreed ({commit}, payload) {
        commit('setCurrentBreedMutation', payload)
    },
}

export default actions
