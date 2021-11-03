<template>
  <button
    class="flex justify-center items-center"
    :style="`width:${width}px; height:${height}px`"
  >
    <img
      :src="src"
      alt=""
    >
    {{ text }}
  </button>
</template>
<script setup lang="ts">
defineProps({
  width: {
    type: String,
    required: true
  },
  height: {
    type: String,
    required: true
  },
  text: {
    type: String,
    default: ''
  },
  src: {
    type: String,
    default: ''
  }
})
</script>
