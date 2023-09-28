<script setup>
import { reactive } from "vue";
import { RouterLink, RouterView } from 'vue-router'

import UserImg from '@/assets/image/aboutMe.jpg'

const props = defineProps({
    logo: {
        type: String,
        default: ""
    },
    tabItems: {
        type: Object,
        default: () => ({})
    }
})

</script>


<template>
    <div class="flex bg-pink-400 h-24">
        <div class=" flex text-gray-50 text-4xl items-center ml-4">
            {{ logo }}
        </div>

        <nav v-for="tabItem in tabItems" class="flex items-end gap-3 text-xl ml-10">
            <RouterLink :to="tabItem.page">
                <div class="  hover:bg-pink-300 px-4 py-2 rounded-t-lg text-gray-50">{{ tabItem.title }}</div>
            </RouterLink>
        </nav>

        <div class=" relative flex mr-10 ml-auto items-center">
            <RouterLink :to="tabItems.cartPage.page">
                <div class=" w-20 h-8 rounded-full ring-2 text-gray-50 ring-pink-300 text-center grid items-center
             hover:bg-pink-300 ">
                    購物車
                </div>
            </RouterLink>

            <div class=" absolute bg-pink-200 w-10 h-10 rounded-full grid items-center text-center -right-6 top-2 ring-1 ring-pink-900 ring-opacity-50 font-extrabold text-gray-700">
                100
            </div>
        </div>

        <div class="group flex relative items-center mr-10">
            <img :src="UserImg" class=" h-12 w-12 rounded-full">

            <div class=" absolute bg-pink-100 text-pink-700 text-lg top-20 right-0 w-40 
            rounded-lg py-3 ring-1 ring-pink-950 ring-opacity-10
            scale-0 group-hover:scale-100 duration-300 origin-top-right">
                <div class=" px-4 py-2 hover:bg-pink-200">註冊</div>
                <div class=" px-4 py-2 hover:bg-pink-200">登入</div>
            </div>
        </div>
    </div>
</template>