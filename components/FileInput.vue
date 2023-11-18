<script setup lang="ts">
const attrs = useAttrs();

const inputFileRef = ref<HTMLInputElement>();

function labelClick() {
  inputFileRef?.value?.click();
}
</script>

<template>
  <div>
    <input
      ref="inputFileRef"
      v-bind="attrs"
      type="file"
      class="absolute z-[-1] h-[0.1px] w-[0.1px] overflow-hidden opacity-0"
      multiple
      accept="image/*"
    />
    <label
      class="inline-flex cursor-pointer items-center rounded bg-[#ececec] px-3 py-2.5 text-sm font-semibold text-[#5b6265] shadow-[0px_0px_2px_rgba(0,0,0,0.25)]"
      @click="labelClick"
    >
      <img src="~/assets/icons/open-folder-outline-icon.webp" class="h-[16px] w-[16px]" />
      <span class="mx-1">Choose files</span>
    </label>
  </div>
</template>

<style scoped></style>
