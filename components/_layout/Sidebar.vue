<script setup lang="ts">
const routes = reactive([
  {
    path: '/page-1',
    name: 'page 1',
  },
  {
    path: '/page-2',
    name: 'page 2',
  },
]);

const route = useRoute();
</script>

<template>
  <nav class="float-left h-[calc(100%_-_64px)] w-[200px] overflow-x-auto bg-[#f2f2f2]">
    <h2 class="border-b border-solid border-b-[#1c2431] px-4 py-2.5 font-bold leading-normal">Dashboard</h2>
    <ul class="m-0 list-none p-0">
      <li v-for="r in routes" :key="r.path" class="border-b border-solid border-b-[#1c2431]">
        <NuxtLink
          :to="r.path"
          :class="`block px-4 py-2.5 font-medium capitalize text-[#1c2431] no-underline transition-[color] duration-[0.3s] ease-[ease] hover:bg-[#2b3649] hover:text-[#f2f2f2] ${
            r.path === route.path ? 'active' : ''
          }`"
        >
          {{ r.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
a.active {
  color: #f2f2f2;
  background-color: #1c2431;
}
</style>
