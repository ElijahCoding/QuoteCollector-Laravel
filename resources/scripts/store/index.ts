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
    },
    mutations: {
        INCREMENT_COLLECTED_COUNT(state, by) {
            state.collectedCount = state.collectedCount + by
        }
    }
})
