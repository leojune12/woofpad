let mutations = {
    setPhotoUrlsMutation (state, payload) {
        state.photoUrls = payload
    },
    resetPhotoUrlsMutation (state) {
        state.photoUrls = []
    },
    setCurrentBreedMutation (state, payload) {
        state.currentBreed = payload
    },
    setIsNewBreedMutation (state, payload) {
        state.previousBreed = payload
    },
}

export default mutations
