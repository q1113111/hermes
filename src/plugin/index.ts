import webFont from 'webfontloader'
import 'swiper/swiper-bundle.css'
import swiper, { Navigation, Pagination, Autoplay, EffectFade, Parallax } from 'swiper'
webFont.load({
  google: {
    families: ['Noto Sans TC:100,400,700,900', 'sans-serif', 'Dancing Script', 'cursive']
  }
})
swiper.use([Navigation, Pagination, Autoplay, EffectFade, Parallax])
export default swiper
