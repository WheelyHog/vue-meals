<template>
  <div
    :key="meal.idMeal"
    class="bg-white shadow rounded-xl hover:scale-105 transition-all"
  >
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        alt="meal.strMeal"
        class="rounded-t-xl h-72 w-full object-cover"
      />
    </router-link>
    <div class="p-3 text-cyan-950">
      <h3 class="font-bold mb-2">{{ meal.strMeal }}</h3>
      <p class="mb-6">
        {{ truncateWords(meal.strInstructions, 20) }}
      </p>
      <YouTubeButton :href="meal.strYoutube">YouTube</YouTubeButton>
    </div>
  </div>
</template>

<script setup>
import YouTubeButton from "./YouTubeButton.vue";
import truncateWords from "../filters/index";

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});
</script>