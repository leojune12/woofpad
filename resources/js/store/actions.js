let actions = {
    setPhotoUrls ({commit}, payload) {
        commit('setPhotoUrlsMutation', payload)
    },
    resetPhotoUrls ({commit}) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('resetPhotoUrlsMutation')
                resolve()
            }, 300)
        })
    },
    setCurrentBreed ({commit}, payload) {
        commit('setCurrentBreedMutation', payload)
    },
}

export default actions
