<script setup>
import { ref, reactive, computed } from "vue";
import { RouterLink, RouterView, useRoute } from 'vue-router';

</script>

<template>
    <div class=" absolute flex bg-pink-700 text-xl rounded-2xl p-5 bottom-2 right-2 w-96 z-10 bg-opacity-75">
        <div class=" ml-2 font-semibold text-gray-100 ">
            <div class=" bg-green-400 w-8 h-8 rounded-full text-center grid items-center">
                V
            </div>
        </div>

        <div class=" font-semibold mx-4 text-gray-100 ">成功加入購物車</div>
        <div class=" font-semibold border-l-2 border-gray-100 border-opacity-75 ml-auto mr-5 -my-5 "></div>
        <div class=" font-semibold text-gray-100">查看</div>
    </div>
</template>
