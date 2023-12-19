<template>
  <div class="bg-white dark:bg-gray-700">
    <div
      class="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-16"
    >
    <ClientOnly fallback-tag="span" fallback="Loading ...">
      <section>
        <div class="relative mx-auto max-w-screen-xl px-4 py-8">
          <div>
            <h1 class="text-2xl font-bold lg:text-2xl dark:text-gray-200">
              {{ data?.name }}
            </h1>

            <p class="mt-1 text-sm text-gray-500 dark:text-gray-200">
              {{ data?.model }}
            </p>
          </div>

          <div class="grid gap-8 lg:grid-cols-4 lg:items-start">
            <div class="lg:col-span-3">
              <div class="relative mt-4">
                <vue-easy-lightbox
                  :visible="visibleRef"
                  :imgs="imgsRef"
                  :index="indexRef"
                  @hide="onHide"
                ></vue-easy-lightbox>
                <img
                  @click="showMore(data)"
                  :alt="data?.name"
                  :src="data?.photo"
                  class="h-72 w-full rounded-xl object-cover lg:h-[640px]"
                />
              </div>

              <ul class="mt-1 flex gap-1">
                <li v-for="pic in data?.gallery">
                  <img
                    @click="showSingle(pic.src)"
                    :alt="data?.name"
                    :src="pic.thumb"
                    class="h-16 w-16 rounded-md object-cover"
                  />
                </li>
              </ul>
            </div>

            <div class="lg:sticky lg:top-0">
              <form class="space-y-4 lg:pt-8 text-center">
                <div
                  class="rounded border bg-gray-100 p-4 text-left"
                  v-html="data?.short"
                ></div>

                <a
                  :href="`https://comcitybd.com/product/${data?.slug}`"
                  target="_blank"
                  type="submit"
                  class="w-full rounded bg-gray-700 dark:bg-gray-800 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white text-center"
                >
                  Buy From comcitybd.com
                  
                </a>
              </form>
            </div>

            <div class="lg:col-span-3">
              <div
                class="prose max-w-none [&>iframe]:mt-6 [&>iframe]:aspect-video [&>iframe]:w-full [&>iframe]:rounded-xl"
              >
                <span class="dark:text-gray-200" v-html="data?.details"> </span>

                <h2 class="dark:text-gray-200 py-3 text-2xl font-bold">
                  Features
                </h2>
                <span class="dark:text-gray-200" v-html="data?.short"></span>

                <iframe
                  v-if="data.youtube"
                  :src="
                    'https://www.youtube.com/embed/' +
                    data?.youtube.replace('https://www.youtube.com/watch?v=', '')
                  "
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ClientOnly>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug;

onMounted(()=>{
  console.log(slug);
});

const { data } = await useAsyncData("products", () =>
  $fetch("https://admindash.comcitybd.com/api/product/" + slug)
);

const visibleRef = ref(false);
const indexRef = ref(0);
const imgsRef = ref([]);
const onShow = () => {
  visibleRef.value = true;
};
const showSingle = (photo) => {
  imgsRef.value = photo;
  onShow();
};

const showMore = (data) => {
  const photos = [data.photo];
  data.gallery.map(function (value, key) {
    photos.push(value.src);
  });
  imgsRef.value = photos;
  indexRef.value = 0;
  onShow();
};

const onHide = () => (visibleRef.value = false);
</script>
