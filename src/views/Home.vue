<template>
  <div>
    <div class="fixed top-0 z-50">
      <Header />
      <div class="h-3 bg-gray-300 shadow-xl" />
    </div>
    <div class="flex justify-center mt-40 pt-2">
      <BaseRadio
        v-for="item of mainList"
        :id="item.value"
        :key="item.value"
        :text="item.name"
        name="mainRadio"
        class="mr-2"
        width="48"
        height="36"
        @change="radioHandler"
      />
      <BaseRadio
        v-for="item of secList"
        :id="item.value"
        :key="item.value"
        :text="item.name"
        name="secRadio"
        class="mr-2"
        width="48"
        height="36"
        @change="radioHandler"
      />
    </div>
    <div class="text-lg text-black max-w-xs mx-auto pl-4 mt-9 mb-3">
      人氣活動
    </div>
    <div class="container">
      <div class="swiper-container py-1">
        <div class="swiper-wrapper">
          <div
            v-for="item of poplarList"
            :key="item.data.id"
            class="swiper-slide flex"
          >
            <BaseCard
              class=" bg-btn-white rounded-md shadow-xxl"
              :src="item.data.thumbnails[0].url"
              :name="item.data.name"
              :town="item.data.town"
              :price="chagnePrice(item.data.price)"
              :distance="item.distance"
            />
          </div>
        </div>
      </div>
    </div>
    <div class=" max-w-xs m-auto px-4 mt-20">
      <div class="text-lg text-black mb-6">
        我的附近
      </div>
      <div class="grid grid-cols-2 gap-3">
        <BaseCard
          v-for="item of cardList"
          :key="item.data.id"
          class=" bg-btn-white rounded-md shadow-xxl"
          :src="item.data.thumbnails[0].url"
          :name="item.data.name"
          :town="item.data.town"
          :price="chagnePrice(item.data.price)"
          :distance="item.distance"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Swiper from '@/plugin/index'
import api from '@/api/index'

let arr = []
const mainList = ref([
  {
    name: '全部',
    value: 0
  },
  {
    name: '藝文',
    value: 1
  },
  {
    name: '古蹟',
    value: 7
  }
])

const secList = ref([
  {
    name: '免費',
    value: 4
  },
  {
    name: '收費',
    value: 5
  }
])

const poplarList = ref([])
const cardList = ref([])
const mainRadio = ref(0)
const secRadio = ref(0)
// eslint-disable-next-line no-new
new Swiper('.swiper-container', {
  speed: 500,
  slidesPerView: 'auto',
  spaceBetween: 10
  // autoplay: {
  //   disableOnInteraction: false
  // }
})

//  px: 121.507154, py: 25.136577, range: 5
const params = {
  px: 121, py: 24, range: 5
}
api('search', params).then(res => {
  poplarList.value = res.items
  localStorage.setItem('cardList', JSON.stringify(res.items))
  cardList.value = res.items
})
// api('search', { px: 121.507154, py: 25.136577, tags: [1] }).then(res => {
//   res.items.forEach(item => {
//     console.log(item.data.tags)
//   })
// })
const chagnePrice = (price) => {
  return price === '免費' ? price : price === undefined || price === '' ? '--' : price
}

const radioHandler = (id, name) => {
  cardList.value = JSON.parse(localStorage.getItem('cardList'))
  name.value = id
  fitlerCardList(name)
}

const fitlerCardList = (id, name) => {
  if (mainRadio.value !== 0) {
    arr.push(mainRadio.value)
  }
  if (secRadio.value !== 0) {
    arr.push(secRadio.value)
  }
  if (arr.length === 1) {
    if (mainRadio.value === 0) {
      arr.push(secRadio.value)
    } else {
      arr.push(this[name])
    }
    cardList.value = cardList.value.filter(item => {
      const tags = item.data.tags
      return tags.some((item, index) => {
        return item === arr[index]
      })
    })
  } else {
    cardList.value = cardList.value.filter(item => {
      const tags = item.data.tags
      return tags.join() === arr.join()
    })
  }
  arr = []
}

</script>
<style lang="scss" scoped>
.swiper-slide {
  width: 138px;

  &:first-child {
    margin-left: 16px;
  }
}
</style>
