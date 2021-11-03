<template>
  <header class=" py-4 px-9 bg-info-blur backdrop-blur">
    <div class="flex justify-center">
      <div class="text-sm text-black mr-5 flex items-center">
        <span class="mr-1 text">台北市</span><span class="mr-1">29°C</span>
        <img
          class=""
          src="/image/icon/sun.svg"
          alt=""
        >
      </div>
      <div class="text-blue text-sm ">
        <img
          class="inline-block mr-1"
          src="/image/icon/umbrella.svg"
          alt=""
        > 10%
      </div>
    </div>
    <div class="flex mt-4">
      <BaseButton
        width="48.5"
        height="48.5"
        src="/image/icon/Vector.svg"
        class="bg-btn-white rounded-full shadow-sm mr-2"
      />
      <Search
        class="rounded-lg flex-1"
        place-holder="輸入景點、活動..."
      />
      <BaseButton
        width="46"
        height="46"
        src="/image/icon/setting.svg"
        class=" bg-gradual rounded-full shadow-lg ml-2"
      />
    </div>
  </header>
</template>
