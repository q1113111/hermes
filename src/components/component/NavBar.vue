<template>
  <div class="fixed bottom-0 w-full">
    <div class="bg-gray-300 shadow-xl hp-2" />
    <nav class="flex justify-center items-center bg-info-blur py-10px backdrop-blur py-3">
      <router-link
        to="/index"
        active-class="bg-gradual shadow-lg"
        class="link bg-btn-white shadow-sm rounded-full mr-11"
      >
        <img
          src="/image/icon/search.svg"
          alt=""
          class="w-9 h-9 flex items-center justify-center p-2"
        >
        <img
          src="/image/icon/seach-active.svg"
          alt=""
          class="w-9 h-9 flex items-center justify-center p-1"
        >
      </router-link>
      <router-link
        to="/about"
        active-class="bg-gradual shadow-lg"
        class="link bg-btn-white shadow-sm rounded-full mr-11"
      >
        <img
          src="/image/icon/favorites.svg"
          alt=""
          class="w-9 h-9 flex items-center justify-center p-2"
        >
        <img
          src="/image/icon/favorites-active.svg"
          alt=""
          class="w-9 h-9 flex items-center justify-center p-2"
        >
      </router-link>
      <router-link
        to="/test3"
        active-class="bg-gradual shadow-lg"
        class="link bg-btn-white shadow-sm rounded-full mr-11"
      >
        <img
          src="/image/icon/Combined Shape.svg"
          alt=""
          class="w-9 h-9 flex items-center justify-center p-2"
        >
        <img
          src="/image/icon/Combined Shape-active.svg"
          alt=""
          class="w-9 h-9 flex items-center justify-center p-2"
        >
      </router-link>
      <router-link
        to="/test4"
        active-class="bg-gradual shadow-lg"
        class="link bg-btn-white shadow-sm rounded-full"
      >
        <img
          src="/image/icon/Combined-Shape.svg"
          alt=""
          class="w-9 h-9 flex items-center justify-center p-2"
        >
        <img
          src="/image/icon/Combined-Shape-active.svg"
          alt=""
          class="w-9 h-9 flex items-center justify-center p-2"
        >
      </router-link>
    </nav>
  </div>
</template>
<style lang="scss" scoped>
.hp-2 {
  height: 2px;
}

.py-10px {
  padding-top: 10px;
  padding-bottom: 10px;
}

.router-link-exact-active {
  img {
    &:first-child {
      display: none;
    }
  }
}

.link {
  img:last-child {
    display: none;
  }

  &.router-link-exact-active {
    img {
      display: block;

      &:first-child {
        display: none;
      }
    }
  }
}
</style>
