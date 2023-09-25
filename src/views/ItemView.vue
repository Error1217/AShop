<script setup>
import { ref, reactive, computed } from "vue";
import { RouterLink, RouterView, useRoute } from 'vue-router';

import config_json from "@/config.json"

const route = reactive(useRoute());

const config = reactive(config_json);


const item = computed(()=>{

});

</script>

<template>
  <main>
    itemview
  </main>
</template>
