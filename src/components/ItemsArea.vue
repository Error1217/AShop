<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from 'vue-router'
import ItemCard from "@/views/ItemCard.vue";

const props = defineProps({
    page: {
        type: Object,
        default: () => ({})
    }
})

let currentIndex = 0;
let isStart = true;
let isEnd = false;
const carouselList = ref("transform: translateX(-0rem)");


const moveTo = (index) => {
    carouselList.value = `transform: translateX(-${13 * index}rem)`;
}



const moveRight = () => {
    if (0 <= currentIndex && currentIndex < props.page.items.length - 1) {
        moveTo(++currentIndex);

        isStart = false;
    }

    if (currentIndex == props.page.items.length - 1) {
        isEnd = true;
    }

}

const moveLeft = () => {
    if (0 < currentIndex && currentIndex <= props.page.items.length - 1) {
        moveTo(--currentIndex);

        isEnd = false;
    }

    if (currentIndex == 0) {
        isStart = true;
    }
}

</script>

<template>
    <div class=" relative flex border-pink-400 mx-8 h-96 rounded-3xl mb-20 justify-center border-4">
        <div class=" bg-pink-400 h-20 px-6 -mt-14 grid items-center rounded-lg text-2xl text-gray-100">
            <div class="">{{ props.page.title }}</div>
        </div>

        <div class=" absolute flex inset-0 h-80 my-8 mx-8 overflow-hidden">
            <div class=" flex duration-300 " :style="carouselList">
                <div v-for="item in props.page.items" class="mx-2">
                    <ItemCard :item="item"></ItemCard>
                </div>
            </div>
        </div>


        <div v-if="!isStart" class=" absolute inset-0 -ml-6 text-3xl grid items-center left-0 w-10">
            <div @click="moveLeft" class=" bg-pink-400 h-10 text-center rounded-full text-gray-100">
                &lt;
            </div>
        </div>

        <div v-if="!isEnd" class=" absolute inset-0 -ml-4 text-3xl grid items-center left-full w-10">
            <div @click="moveRight" class=" bg-pink-400 h-10 text-center rounded-full text-gray-100">
                >
            </div>
        </div>

    </div>
</template>
