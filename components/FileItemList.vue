<script setup lang="ts">
const props = defineProps(['files']);
const emits = defineEmits(['move-left', 'move-right', 'delete']);
</script>

<template>
  <div class="grid h-auto gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8">
    <FileItem
      v-for="(file, index) in props.files"
      :key="index"
      :model-value="file"
      @move-left="emits('move-left', index)"
      @move-right="emits('move-right', index)"
      @delete="emits('delete', index)"
    />
  </div>
</template>

<style scoped></style>
