import {createStore} from "vuex";
import axios from 'axios'

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
        },
        SET_COLLECTED_COUNT(state, count) {
            state.collectedCount = count
        }
    },
    actions: {
        async getCollectedCount ({ commit }) {
            let response = await axios.get('/api/quotes/collected/count')

            commit('SET_COLLECTED_COUNT', response.data.data.count)
        }
    }
})
