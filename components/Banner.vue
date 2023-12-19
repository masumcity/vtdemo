<template>
  <section
    class="relative dark:bg-[url(/banner1_b-1.webp)] bg-[url(/banner1_w-1.webp)] bg-cover bg-center bg-no-repeat"
  >
    <div class="absolute inset-0"></div>

    <div
      class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
    >
      <div class="max-w-xl text-center sm:text-left">
        <h1
          class="text-3xl font-extrabold sm:text-5xl text-gray-800 dark:text-gray-200"
        >
          Awesome Gaming

          <strong class="block font-extrabold dark:text-gray-200 text-gray-800">
            With Value-Top
          </strong>
        </h1>

        <p
          class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-gray-800 dark:text-gray-200"
        >
          Value-Top is a company based in Bangladesh that specializes in the
          production of computer casings. The company was founded in 2011 and
          has since become a leading manufacturer of high-quality computer
          casings in the region.
        </p>

        <div class="mt-8 flex flex-wrap gap-4 text-center">
          <nuxt-link
            to="/company"
            class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-gray-600 shadow hover:text-gray-700 focus:outline-none focus:ring active:text-gray-500 sm:w-auto"
          >
            Learn More
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>
