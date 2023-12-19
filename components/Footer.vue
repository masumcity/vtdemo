<template>
  <footer aria-label="Site Footer" class="bg-white dark:bg-gray-800 ">
    <div
      class="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24"
    >
      <div
        class="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8"
      >
        <a
          class="inline-block rounded-full bg-gray-600 dark:bg-gray-200 p-2 text-white dark:text-black shadow transition hover:bg-gray-500 sm:p-3 lg:p-4"
          href="#__nuxt"
        >
          <span class="sr-only">Back to top</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>

      <div class="lg:flex lg:items-end lg:justify-between">
        <div>
          <div class="flex justify-center text-gray-600 lg:justify-start">
            <a href="/" class="flex items-center">
              <img
                v-if="color.dark"
                src="/logo_w.png"
                class="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <img
                v-else
                src="/logo_b.png"
                class="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <span
                class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
              >
                Value-Top
              </span>
            </a>
          </div>

          <p
            class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-200 lg:text-left"
          >
            Manufacturer Of Best Computer Accessories In Bangladesh. We are
            your most reliable partner.
          </p>
        </div>

        <nav aria-label="Footer Nav" class="mt-12 lg:mt-0">
          <ul
            class="flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12"
          >
            <li v-for="menu in bottomMenus">
              <nuxt-link
                :to="menu.url"
                class="text-gray-700 transition hover:text-gray-700/75 dark:text-gray-200"
              >
                {{ menu.name }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>

      <p
        class="mt-12 text-center text-sm text-gray-500 dark:text-gray-200 lg:text-right"
      >
        Copyright &copy; 2022 Value-Top Limited. All rights reserved.
      </p>
    </div>
  </footer>
</template>
<script setup>
import { modeStore } from "~/store/color";
import { menus } from "~/assets/menu.json";
const color = modeStore();

const bottomMenus = computed({
  get() {
    return menus.filter((menu) => {
      return menu.bottom == true;
    });
  },
});
</script>
