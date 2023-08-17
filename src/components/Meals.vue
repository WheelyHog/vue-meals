<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 p-8">
      <MealItem v-for="meal of meals" :key="meal.id" :meal="meal" />
    </div>
    <div v-if="!meals.length" class="flex justify-center text-yellow-100 p-8">
      There are no meals
    </div>
  </div>
</template>

<script setup>
import MealItem from "./MealItem.vue";

const { meals } = defineProps({
  meals: {
    required: true,
    type: Array,
  },
});
</script>