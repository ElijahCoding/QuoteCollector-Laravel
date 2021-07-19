<template>
    <div class="text-xl font-medium opacity-60 hover:opacity-100">
        {{ quote.body }}
    </div>
</template>

<script>
export default {
    props: {
        quote: {
            required: true,
            type: Object,
        }
    }
}
</script>
