<template>
    <div class="space-y-10">
        <button @click.prenvent="removeQuote(quote)" v-for="quote in quotes" :key="quote.id" class="block">
            <Quote :quote="quote"/>
        </button>
    </div>
</template>

<script>
import {ref, onMounted} from 'vue'
import axios from "axios"
import Quote from "@/views/components/Quote.vue"
import {useStore} from "vuex";

export default {
    components: {
        Quote
    },
    setup() {
        const quotes = ref([])

        const store = useStore()

        onMounted(async () => {
            let response = await axios.get('/api/quotes/collected')
            quotes.value = response.data.data
        })

        const removeQuote = async (quote) => {
            await axios.patch(`/api/quotes/${quote.id}`, {
                saved: false,
            })

            quotes.value = quotes.value.filter(q => q.id !== quote.id)

            store.commit('INCREMENT_COLLECTED_COUNT', -1)
        }

        return {
            quotes,
            removeQuote
        }
    }
}
</script>
