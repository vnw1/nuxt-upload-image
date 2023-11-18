<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <LayoutHeader />
  <LayoutSidebar />
  <div class="float-left flex h-[calc(100%_-_64px)] w-[calc(100%_-_200px)] flex-col overflow-x-auto">
    <div class="m-[1rem] flex-1 p-[1rem]">
      <slot />
    </div>
    <footer class="clear-both h-[40px] bg-[#c2c2c2] p-[10px] text-center">
      <p>&copy; 2023 Website created by HuyLV.</p>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
