<template>
    <nav class="mb-10">
        <ol class="flex items-center space-x-6">
            <li>
                <router-link class="text-indigo-500 font-medium text-xl" to="/">Home</router-link>
            </li>
            <li>
                <router-link class="text-indigo-500 font-medium text-xl" to="/dashboard">Dashboard</router-link>
            </li>
        </ol>
    </nav>
</template>

<script>
import {useStore} from 'vuex'
import {computed} from "vue";
export default {
    setup() {
        const store = useStore()

        return {
            collectedCount: computed(() => store.getters.collectedCount)
        }
    }
}
</script>
