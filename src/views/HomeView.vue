<script setup>
import { reactive } from "vue";
import { RouterLink, RouterView } from 'vue-router'

import header from '@/assets/image/header.jpg'
import ItemArea from '@/components/ItemsArea.vue'

import config_json from "@/config.json"



const config = reactive(config_json);
const pages = reactive(config.pages);

</script>

<template>
  <header>
    <div class=" mb-20">
      <img :src="header" alt="" srcset="">
    </div>
  </header>
  <main>
    <ItemArea :page="pages.womenPage"></ItemArea>
    <ItemArea :page="pages.menPage"></ItemArea>
  </main>
</template>
