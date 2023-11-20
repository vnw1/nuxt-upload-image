export const useFileStore = defineStore('files', () => {
  const fileList = ref<File[]>([]);
  const formKey = ref<number>(0);

  function handleChangeFiles(event: { target: { files: FileList } }) {
    const files = event.target.files;

    if (files.length) {
      const filesArray = Array.from(files);
      // fileList.value = filesArray;
      fileList.value.push(...filesArray);
    } else {
      fileList.value = [];
    }
    formKey.value += 1;
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

  function isFirst(index: number) {
    return index === 0;
  }

  function isLast(index: number) {
    return fileList.value.length - 1 === index;
  }

  return { fileList, formKey, handleChangeFiles, handleMoveLeft, handleMoveRight, handleDelete, isFirst, isLast };
});
