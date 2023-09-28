<script setup>
import { ref, reactive } from "vue";
import { RouterLink, RouterView } from 'vue-router'

import header from '@/assets/image/header.jpg'
import ItemArea from '@/components/ItemsArea.vue'

import config_json from "@/config.json"



const config = reactive(config_json);
const items = reactive(config.items);

const amount = ref(0);

console.log(amount.value);
</script>

<template>
    <div class=" h-auto m-20 my-20">
        <div class=" text-2xl font-semibold">
            購物車
        </div>
        <div class=" w-auto h-0 border-t-2 border-gray-500 "></div>
        <div class="">
            <ul class=" flex bg-gray-200 text-center">
                <li class=" ml-2 pt-1 mr-4">
                    <input type="checkbox" name="" id="" class="">
                </li>
                <li class=" mr-auto w-1/2">商品名稱</li>
                <li class=" w-40">數量</li>
                <li class=" w-40">單價</li>
                <li class=" w-40">小計</li>
            </ul>

            <ul v-for="item in items"
                class=" flex bg-gray-50 py-2 my-2 ring-2 ring-gray-700 ring-opacity-5 rounded-lg text-center">
                <li class=" ml-2 pt-1 mr-4">
                    <input type="checkbox" name="" id="" class="">
                </li>
                <li class="mr-auto w-1/2">{{ item.name }}</li>
                <li class="w-40">
                    <select v-model="amount">
                        <option v-for=" i in 15">{{ i }}</option>
                    </select>
                </li>
                <li class="w-40 text-gray-700 text-opacity-75">${{ item.price }}</li>
                <li class="w-40 text-gray-700 text-opacity-75">${{ item.price * amount }}</li>
            </ul>
        </div>
        <div class=" w-auto h-0 border-t-2 border-dotted border-gray-500 border-opacity-50"></div>

        <div class=" my-4 text-right">
            <span class=" text-lg text-gray-900 font-mono ">總金額 </span>
            <span class=" text-xl text-red-600 font-normal">NT$ </span>
            <span class=" text-3xl text-red-600 font-semibold ">749</span>
        </div>

        <div class="">結帳</div>
    </div>
</template>
