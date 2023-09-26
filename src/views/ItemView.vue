<script setup>
import { ref, reactive, computed } from "vue";
import { RouterLink, RouterView, useRoute } from 'vue-router';
import Hint from '@/components/Hint.vue'

import config_json from "@/config.json"

const route = reactive(useRoute());

const config = reactive(config_json);


const item = computed(() => {
    return config.items.filter(item => item.id === route.query.id)[0]
});


const isAdd = ref(false);
const add = computed(()=>{
    isAdd.value = true;
    return isAdd.value;
})
const showHint = computed(()=>{

    setTimeout(()=>{
        isAdd.value = false;
    }, 4000);

    return isAdd.value?`scale-100`:`scale-0`;
})

</script>

<template>
    <main>

        <div class=" flex flex-wrap  justify-center mt-20 mb-10">
            <div class=" mx-10">
                <img :src="item.image" class=" h-96 rounded-lg">
            </div>
            <div class=" relative mx-10 w-96 ">
                <div class=" font-semibold text-4xl mt-3">
                    {{ item.name }}
                </div>

                <div class=" bg-pink-200 font-semibold text-5xl text-gray-600 my-10 py-5 pl-5 rounded-xl">
                    ${{ item.price }}
                </div>

                <div class=" text-xl">
                    <select name="" id="" class=" bg-pink-50 px-4 py-2 rounded-lg">
                        <option v-for="i in 15" value="">{{ i }}</option>
                    </select>
                </div>

                <div class="absolute text-lg bottom-2 right-0 ">
                    <button @click="add" class=" text-gray-700 font-black px-5 py-2 rounded-xl ring-1 ring-pink-700 hover:bg-pink-200">
                        加入購物車
                    </button>
                </div>
            </div>
        </div>

        <Hint class=" origin-bottom-right duration-300" :class="showHint"></Hint>

    </main>
</template>
