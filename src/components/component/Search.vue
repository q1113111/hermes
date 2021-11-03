<template>
  <label
    for=""
    class="flex justify-center items-center bg-white-sm shadow-md pl-4 pr-7"
  >
    <img
      src="/image/icon/Union.svg"
      alt=""
      class="mr-2"
    >
    <input
      type="text"
      class="text-sm"
      :placeholder="placeHolder"
    >
  </label>
</template>
<script setup lang="ts">
defineProps({
  placeHolder: {
    type: String,
    default: ''
  }
})
</script>
