<script setup lang="ts">
import { useFileStore } from '@/store/files';

useHead({
  title: 'Page 1',
});
const fileStore = useFileStore();
const { handleChangeFiles } = fileStore;
const formKey = computed(() => fileStore.formKey);
const fileList = computed(() => fileStore.fileList);
const handleExecute = () => {
  alert('To be continued...');
};
</script>

<template>
  <div class="flex h-full flex-col gap-4">
    <!-- Page title -->
    <h2 class="flex-0 flex font-bold">Image List</h2>

    <!-- File List -->
    <div :key="formKey" class="flex flex-1 flex-col gap-4">
      <FileItemList :files="fileList" />
      <FileInput @change="handleChangeFiles" />
    </div>

    <!-- Button -->
    <div class="flex justify-center">
      <button class="btn max-w-[75%]" @click="handleExecute">Excute</button>
    </div>
  </div>
</template>

<style scoped></style>
