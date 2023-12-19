<template>
  <div v-editable="blok" class="bg-gray-300 dark:bg-gray-900 pt-48">
    <div class="max-w-screen-xl mx-auto p-4">
      <h3 class="text-black dark:text-white text-2xl">
        <span class="font-extrabold">{{blok.name1}}</span> {{blok.name2}}
      </h3>
      <h1 class="text-8xl md:py-12 py-6 text-black dark:text-white">{{blok.bigtext}}</h1>
    </div>
    <div class="text-gray-600 body-font relative">
      <div
        class="container px-5 md:py-24 py-10 mx-auto flex sm:flex-nowrap flex-wrap border-2 dark:border-0 rounded"
      >
        <div
          class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
        >
          <iframe
            width="100%"
            height="100%"
            class="absolute inset-0"
            frameborder="0"
            title="map"
            marginheight="0"
            marginwidth="0"
            scrolling="no"
            :src="blok.map"
            loading="lazy"
            style="filter: grayscale(1) contrast(1.2) opacity(0.4)"
          ></iframe>

          <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div class="lg:w-1/2 px-6">
              <h2
                class="title-font font-semibold text-gray-900 tracking-widest text-xs"
              >
                {{blok.address}}
              </h2>
              <p class="mt-1">
                {{blok.realaddress}}
              </p>
            </div>
            <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2
                class="title-font font-semibold text-gray-900 tracking-widest text-xs"
              >
              {{blok.email}}
              </h2>
              <a class="text-gray-900 leading-relaxed">{{blok.realemail}}</a>
              <h2
                class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4"
              >
              {{blok.phone}}
              </h2>
              <p class="leading-relaxed">{{blok.realphone}}</p>
            </div>
          </div>
        </div>

        <div
          class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 px-4 rounded"
        >
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font pt-3 md:pt-0">
            {{blok.formtitle}}
          </h2>
          <p class="leading-relaxed mb-5 text-gray-600">
            {{blok.formtext1}}
          </p>
          <form name="contact" action="https://formspree.io/f/xjvznjwg" method="POST">
            <div class="mb-4">
              <label for="name" class="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              type="submit"
              class="dark:text-white dark:bg-gray-900 dark:border-0 py-2 px-6 focus:outline-none dark:hover:bg-gray-600 rounded text-lg border-2 hover:bg-gray-900 hover:text-white"
            >
              Submit
            </button>

            <p class="text-xs text-gray-800 mt-3">
              {{blok.formtext2}}
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({ blok: Object });
</script>