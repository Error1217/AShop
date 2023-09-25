<script setup>
import { ref, reactive, computed } from "vue";
import { RouterLink, RouterView, useRoute } from 'vue-router';
import ItemCard from "@/views/ItemCard.vue";

import config_json from "@/config.json"

const route = reactive(useRoute());

const config = reactive(config_json);
const pages = reactive(config.pages);

const pageType = {
  women: "womenPage",
  men: "menPage"
}

const page = computed(()=>{
  return pages[pageType[route.query.type]];
});

</script>

<template>
  <main>
    <div class=" my-20 mx-10 ">
      <div v-for="item in page.items" class=" my-10 inline-block mx-2">
        <ItemCard :item="item"></ItemCard>
      </div>
    </div>
  </main>
</template>
