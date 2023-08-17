<template>
  <div class="max-w-[800px] mx-auto p-8 text-yellow-100">
    <h1 class="text-5xl font-bold mb-5 text-yellow-300">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-full" />
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold text-yellow-300">Category: </strong
        >{{ meal.strCategory }}
      </div>
      <div>
        <strong class="font-bold text-yellow-300">Area: </strong
        >{{ meal.strArea }}
      </div>
      <div>
        <strong class="font-bold text-yellow-300">Tags: </strong
        >{{ meal.strTags }}
      </div>
    </div>

    <div class="my-3">
      {{ meal.strInstructions }}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-2 text-yellow-300">
          Ingredients:
        </h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strIngredient${ind + 1}`]" :key="ind">
              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2 text-yellow-300">Measures:</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strMeasure${ind + 1}`]" :key="ind">
              {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div class="mt-4">
        <YouTubeButton :href="meal.strYoutube">YouTube</YouTubeButton>
        <a
          :href="meal.strSource"
          target="_blank"
          class="ml-3 px-3 py-2 rounded border-2 border-green-600 bg-green-500 hover:bg-green-600 text-white transition-colors"
          >View Original Source</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import YouTubeButton from "../components/YouTubeButton.vue";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient
    .get(`lookup.php?i=${route.params.id}`)
    .then(({ data }) => (meal.value = data.meals[0] || {}));
});
</script>