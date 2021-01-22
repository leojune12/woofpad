let mutations = {
    setPhotoUrlsMutation (state, payload) {
        state.photoUrls = payload
    },
    incrementInfiniteIdMutation (state, payload) {
        state.infiniteId += payload
    },
    setPreviousUrlMutation (state, payload) {
        state.previousUrl = payload
    },
    setCurrentUrlMutation (state, payload) {
        state.currentUrl = payload
    }
}

export default mutations
