<template>
  <div>
    <div class="p-8">
      <input
        type="text"
        v-model="keyword"
        class="rounded border-1 bg-yellow-100 border-cyan-700 w-full text-cyan-950 outline-none"
        placeholder="Search For Meals"
        @change="searchMeals"
      />
    </div>
    <Meals :meals="meals" />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>