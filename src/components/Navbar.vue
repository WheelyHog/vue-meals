<template>
  <header class="shadow h-16 bg-zinc-800 flex justify-between items-stretch">
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full px-5 font-semibold text-yellow-500 hover:text-orange-500 transition-colors"
    >
      Home
    </router-link>
    <div class="flex items-center gap-1">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-yellow-100 font-semibold text-yellow-500 hover:text-orange-600"
      >
        Search Meals
      </router-link>
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-yellow-100 font-semibold text-yellow-500 hover:text-orange-600"
      >
        Meals By Letter
      </router-link>
      <router-link
        :to="{ name: 'ingredients' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-yellow-100 font-semibold text-yellow-500 hover:text-orange-600"
      >
        Meals By Ingredients
      </router-link>
    </div>
  </header>
</template>