<script setup>
import { reactive } from "vue";
import { RouterLink, RouterView } from 'vue-router'

import header from '@/assets/image/header.jpg'
import ItemArea from '@/components/ItemsArea.vue'

import config_json from "@/config.json"



const config = reactive(config_json);
const items = reactive(config.items);

</script>

<template>
  <p class="">cartview</p>
</template>
