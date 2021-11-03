<template>
  <div class="relative">
    <input
      :id="id"
      type="radio"
      :value="id"
      :name="name"
      :checked="id===0"
      class="opacity-0 absolute z-0"
      @change="$emit('change',id,name)"
    >
    <!-- class="" -->
    <label
      :for="id"
      :style="`width:${width}px; height:${height}px`"
      class="flex justify-center items-center bg-btn-white shadow-sm text-black-light text-sm rounded-lg"
    >{{ text }}</label>
  </div>
</template>
<script setup lang="ts">
defineProps({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  width: {
    type: String,
    required: true
  },
  height: {
    type: String,
    required: true
  }
})
</script>
<style lang="scss" scoped>
input:checked + label {
  @apply bg-gradual text-white;
}
</style>
