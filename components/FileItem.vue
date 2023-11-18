<script setup lang="ts">
const props = defineProps(['modelValue']);
const emits = defineEmits(['move-left', 'move-right', 'delete']);

const file = props.modelValue;

const src = computed(() => URL.createObjectURL(file));
const alt = computed(() => file.name);
const showMenu = ref<boolean>(false);

function handleMenuOut() {
  setTimeout(() => {
    showMenu.value = false;
  }, 500);
}
</script>

<template>
  <div
    class="file-list-item relative flex aspect-square items-center justify-center rounded border-2 border-solid border-slate-200 text-[1.2rem] hover:border-slate-400 hover:bg-slate-400"
  >
    <img v-bind="{ src, alt }" class="max-h-[100%]" />
    <button
      class="btn-option absolute right-2 top-2 hidden rounded-md bg-[#bababa] text-white"
      @click="showMenu = true"
    >
      Menu
    </button>
    <ul
      v-if="showMenu"
      class="menu-option absolute right-2 top-2 z-[2] flex flex-col rounded-md border border-solid border-slate-200 bg-[#ffffff] p-2"
      role="navigation"
      @mouseleave="handleMenuOut"
    >
      <li role="button" @click="emits('move-left')">Move {{ '<' }}</li>
      <li role="button" @click="emits('move-right')">Move {{ '>' }}</li>
      <li role="button" @click="emits('delete')">Delete</li>
    </ul>
  </div>
</template>

<style scoped>
button {
  line-height: 1.5;
  letter-spacing: 1.1;
  padding: 4px 8px;
}

.file-list-item:hover > button.btn-option {
  display: block;
  border: 1px solid #c0c0c0;
  z-index: 1;
}

ul.menu-option > li {
  color: #363e42;
  border-bottom: 1px solid #ececec;
  padding: 8px 12px;
}

ul.menu-option > li:last-child {
  @apply border-b-0 text-red-500;
}

ul.menu-option > li:hover {
  background: #c2c2c2;
  color: #ffffff;
}

ul.menu-option > li:last-child:hover {
  @apply bg-red-500;
}
</style>
