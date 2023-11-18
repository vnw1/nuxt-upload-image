<script setup lang="ts">
useHead({
  title: 'Page 1',
});

const fileList = ref<File[]>([]);
const formKey = ref<number>(0);

function handleChangeFiles(event: { target: { files: FileList } }) {
  const files = event.target.files;

  if (files.length) {
    const filesArray = Array.from(files);
    fileList.value = filesArray;
  } else {
    fileList.value = [];
  }
}

function handleMoveLeft(index: number) {
  if (index > 0) {
    fileList.value = swapElements(fileList.value, index, index - 1);
    formKey.value += 1;
  }
}

function handleMoveRight(index: number) {
  if (index < fileList.value.length - 1) {
    fileList.value = swapElements(fileList.value, index, index + 1);
    formKey.value += 1;
  }
}

function handleDelete(index: number) {
  fileList.value = removeElementByIndex(fileList.value, index);
  formKey.value += 1;
}
</script>

<template>
  <div class="flex h-full flex-col gap-4">
    <!-- Page title -->
    <h2 class="flex-0 flex font-bold">Image List</h2>

    <!-- File List -->
    <div :key="formKey" class="flex flex-1 flex-col gap-4">
      <FileItemList
        :files="fileList"
        @move-left="handleMoveLeft"
        @move-right="handleMoveRight"
        @delete="handleDelete"
      />
      <FileInput @change="handleChangeFiles" />
    </div>

    <!-- Button -->
    <div class="flex justify-center">
      <button class="btn max-w-[75%]">Excute</button>
    </div>
  </div>
</template>

<style scoped></style>
