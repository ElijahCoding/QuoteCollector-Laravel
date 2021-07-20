<template>
    <div class="space-y-10">
        <button @click="saveQuote(quote)" v-for="quote in quotes" :key="quote.id" class="block">
            <Quote :quote="quote"/>
        </button>
    </div>
</template>

<script>
import {ref, onMounted} from 'vue'
import axios from 'axios'
import Quote from '@/views/components/Quote.vue'

export default {
    components: {
        Quote
    },
    setup() {
        const quotes = ref([])

        onMounted(async () => {
            let response = await axios.get('/api/quotes')
            quotes.value = response.data.data
        })

        const saveQuote = async (quote) => {
            console.log('save')
        }

        return {
            quotes,
            saveQuote,
        }
    }
}
</script>
