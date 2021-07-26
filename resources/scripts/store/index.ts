import {createStore} from "vuex";

export default createStore({
    state () {
        return {
            collectedCount: 0
        }
    },
    getters: {
        collectedCount (state) {
            return state.collectedCount.count
        },
    }
})
