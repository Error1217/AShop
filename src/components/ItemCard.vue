<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from 'vue-router'

const props = defineProps({
    item: {
        type: Object,
        default: () => ({})
    }
})

</script>

<template>
<RouterLink :to="`/item?id=${props.item.id}`">
    <div class="group border-pink-400 bg-gray-100 h-80 w-48 text-center rounded-xl border-4 hover:border-pink-700">
        <div class=" flex h-2/3 items-center justify-center">
            <img :src="props.item.image" class=" h-5/6 rounded-lg">
        </div>
        <div class=" relative flex bg-pink-400 inset-0 h-1/3 w-full text-left text-gray-100  group-hover:bg-pink-700">
            <div class=" mx-2 pt-2 text-xl "> {{ props.item.name }}</div>
            <div class=" absolute mx-2 bottom-2 text-xl">${{ props.item.price }}</div>
        </div>
    </div>
</RouterLink>
    
</template>
