<script setup>
import { reactive } from "vue";
import { RouterLink, RouterView } from 'vue-router'

import NavBar from './components/NavBar.vue'
import Footer from "./components/Footer.vue";
import config_json from "@/config.json"


const config = reactive(config_json);
const pages = reactive(config.pages);

</script>

<template>
  <header class="">
    <NavBar logo="LOGO" :tabItems=pages></NavBar>
  </header>

  <main>
    <RouterView></RouterView>
  </main>

  <Footer></Footer>
</template>

<style scoped></style>
