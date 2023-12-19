<template>
  <nav class="bg-white border-gray-200 dark:border-gray-600 dark:bg-black">
    <div
      class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5 lg:px-8"
    >
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
          VALUE-TOP
        </span>
      </a>
      <div class="flex items-center md:order-2 md:hidden">
        <button
          data-collapse-toggle="mega-menu-icons"
          type="button"
          class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mega-menu-icons"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            aria-hidden="true"
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        id="mega-menu-icons"
        class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
      >
        <ul
          class="flex flex-col mt-4 text-sm font-medium md:flex-row md:space-x-8 md:mt-0"
        >
          <li v-for="menu in topMenus" :key="menu.id">
              <nuxt-link
                v-if="menu.enable && !menu.child"
                :to="menu.url"
                class="block py-2 pr-4 pl-3 text-gray-700 dark:text-gray-200 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-gray-500 md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                {{ menu.name }}
              </nuxt-link>
              <button
                v-if="menu.enable && menu.child"
                :id="menu.cid"
                id="mega-menu-icons-dropdown-button"
                data-dropdown-toggle="mega-menu-icons-dropdown"
                class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-200 md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-gray-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                {{ menu.name }}
                <svg
                  aria-hidden="true"
                  class="ml-1 w-5 h-5 md:w-4 md:h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            <div
              id="mega-menu-icons-dropdown"
              class="grid hidden absolute z-10 grid-cols-2 w-auto text-sm bg-white rounded-lg border border-gray-100 shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700"
            >
              <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                <ul
                  class="space-y-4"
                  aria-labelledby="mega-menu-icons-dropdown-button"
                >
                  <li v-for="sub in subones" :key="sub.id">
                    <nuxt-link
                      v-if="sub.part == 1"
                      :to="sub.url"
                      class="hover:underline hover:text-gray-600 dark:hover:text-gray-500"
                    >
                      {{ sub.name }}
                    </nuxt-link>
                  </li>
                </ul>
              </div>
              <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                <ul class="space-y-4">
                  <li v-for="sub in subtwos" :key="sub.id">
                    <nuxt-link
                      v-if="sub.part == 2"
                      :to="sub.url"
                      class="hover:underline hover:text-gray-600 dark:hover:text-gray-500"
                    >
                      {{ sub.name }}
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a
              @click="togglecolor"
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-gray-400 md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-gray-500 md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer"
            >
              <svg
                v-if="color.dark"
                class="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
              <svg
                v-else
                class="w-5 h-5 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { modeStore } from "~/store/color";
import { menus, submenus } from "~/assets/menu.json";

const color = modeStore();

const topMenus = computed({
  get() {
    return menus.filter((menu) => {
      return menu.top == true;
    });
  },
});

const subones = computed({
  get() {
    return submenus.filter((sub) => {
      return sub.part == 1;
    });
  },
});

const subtwos = computed({
  get() {
    return submenus.filter((sub) => {
      return sub.part == 2;
    });
  },
});

const togglecolor = () => {
  if (localStorage.getItem("color-theme") === "dark") {
    color.updateColor((color.dark = false));
    document.documentElement.classList.remove("dark");
    localStorage.setItem("color-theme", "light");
  } else {
    color.updateColor((color.dark = true));
    document.documentElement.classList.add("dark");
    localStorage.setItem("color-theme", "dark");
  }
};
</script>
