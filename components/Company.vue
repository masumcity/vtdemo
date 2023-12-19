<template>
  <div class="dark:bg-[#212022] py-40">
    <div class="max-w-screen-xl mx-auto flex">
      <div class="w-4/5">
        <h1
          class="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl dark:text-white"
        >
          Build your Ideal computer with <br />Valur-Top Gaming Casing
        </h1>
        <p
          class="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"
        >
        Value-Top has a team of experienced engineers and designers who work closely with customers to develop custom computer casings that meet their specific needs. The company uses state-of-the-art technology and equipment to ensure that all of its products are of the highest quality.
        </p>
        <nuxt-link
          to="/company"
          class="inline-flex justify-center items-center py-3 text-base font-medium text-center text-black dark:text-white dark:hover:text-gray-300 rounded-lg hover:text-gray-600"
        >
          Learn more
          <svg
            class="ml-2 -mr-1 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </nuxt-link>
        <div class="flex">
          <div
            class="text-black dark:text-white border-r-2 dark:border-gray-800 w-1/4 text-center py-12"
          >
            <h3 class="text-8xl font-extrabold p-4">70</h3>
            <p class="text-xl">Employees</p>
          </div>
          <div
            class="text-black dark:text-white border-r-2 dark:border-gray-800 w-1/4 text-center py-12"
          >
            <h3 class="text-8xl font-extrabold p-4">12</h3>
            <p class="text-xl">Category</p>
          </div>
          <div
            class="text-black dark:text-white border-r-2 dark:border-gray-800 w-1/4 text-center py-12"
          >
            <h3 class="text-8xl font-extrabold p-4">8</h3>
            <p class="text-xl">Award</p>
          </div>
          <div class="text-black dark:text-white w-1/4 text-center py-12">
            <h3 class="text-8xl font-extrabold p-4">2</h3>
            <p class="text-xl">Countrys</p>
          </div>
        </div>
      </div>
      <video-player
        class="w-1/5 bg-[#212022]"
        src="/video.mp4"

        autoplay="muted"
        :loop="true"
        :volume="0.6"
      />
    </div>
  </div>
</template>
