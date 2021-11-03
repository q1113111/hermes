<template>
  <div class="p-2 text-sm">
    <div class="h-90 flex justify-center rounded-md items-center bg-gray-400">
      <img
        :src="changeSrc"
        alt=""
        :style="srcShape"
        class="rounded-md h-full object-cover w-full"
      >
    </div>
    <h3 class="webkit-box h-10 text-black-light mt-1 mb-2">
      {{ name }}
    </h3>
    <p class=" text-right mb-1 text-blue-green">
      {{ setPrice }}
    </p>
    <div class="flex justify-center items-center rounded-md shadow-sm py-1">
      <img
        src="/image/icon/Subtract.svg"
        alt=""
      >
      <span class="text-xs leading-3 ml-1">{{ town }} {{ chagneDistance }} km</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  src: {
    type: String,
    default: ''
  },
  town: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: ''
  },
  distance: {
    type: Number,
    required: true
  },
  price: {
    type: String,
    required: true
  }
})
const chagneDistance = computed(() => {
  const space = Number.parseFloat(props.distance).toFixed(2)
  return space
})

const changeSrc = computed(() => {
  return props.src || '/image/icon/No image.svg'
})

const srcShape = computed(() => {
  const shpae = {
    width: '62px',
    height: '46px'
  }
  return changeSrc.value === '/image/icon/No image.svg' ? shpae : ''
})

const setPrice = computed(() => {
  const price = isNaN(parseInt(props.price))
  return !price ? '$' + props.price : '--'
})

</script>
<style lang="scss" scoped>
.h-90 {
  height: 90px;
}
</style>
