import VueEasyLightbox from 'vue-easy-lightbox/dist/external-css/vue-easy-lightbox.esm.min.js'
import 'vue-easy-lightbox/external-css/vue-easy-lightbox.css'
export default defineNuxtPlugin((nuxtApp) => nuxtApp.vueApp.use(VueEasyLightbox));
