<template>
    <div class="container mx-auto px-6 py-6 sm:py-16">
        <AppNav />
        <router-view/>
    </div>
</template>
<script>
import AppNav from "@/views/components/AppNav.vue";
import {useStore} from 'vuex'

export default {
    components: {AppNav},
    setup() {
        const store = useStore()

        store.dispatch('getCollectedCount')
    },
}
</script>
