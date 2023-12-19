<template>
  <div class="bg-gray-200 dark:bg-gray-900 md:pt-48">
    <div class="max-w-screen-xl mx-auto">
      <h3 class="text-black dark:text-white text-2xl px-6 pt-6">
        <span class="font-extrabold">Value-Top</span> Limited
      </h3>
      <h1 class="md:text-8xl text-6xl px-6 py-12 text-black dark:text-white">
        Let's Talk.
      </h1>
    </div>
    <div class="text-gray-600 body-font relative">
      <div class="container px-5 md:py-24 mx-auto flex sm:flex-nowrap flex-wrap border-2 dark:border-0 rounded">
        <div
          class="lg:w-2/3 md:w-1/2 w-full bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0"
            marginwidth="0" scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2184155551686!2d90.38495755094505!3d23.739589484519115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b8853b020f%3A0x940805bebc32563e!2svaluetop!5e0!3m2!1sen!2sbd!4v1670499108756!5m2!1sen!2sbd"
            style="filter: grayscale(1) contrast(1.2) opacity(0.4)"></iframe>

          <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div class="lg:w-1/2 px-6">
              <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p class="mt-1">
                75-76, B.S. Bhaban, 3rd Floor, Mirpur Road, Dhaka-1205,
                Bangladesh,
              </p>
            </div>
            <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a class="text-gray-900 leading-relaxed">info@valuetop.com.bd</a>
              <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p class="leading-relaxed">+8801938858808</p> 
            </div>
          </div>
        </div>

        <div class="lg:w-1/3 md:w-1/2 w-full bg-white flex flex-col md:ml-auto md:py-8 mt-8 md:mt-0 px-4 rounded">
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
            Contact Us
          </h2>
          <p class="leading-relaxed mb-5 text-gray-600">
            Your opinion matter to us. Please feel free to Contact Us.
          </p>
          <form name="contact" @submit.prevent="submitForm">
            <div class="mb-4">
              <label for="name" class="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input type="text" id="name" name="name" v-model="data.name"
                class="w-full bg-white rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8"
                required />
            </div>
            <div class="mb-4">
              <label for="phone" class="leading-7 text-sm text-gray-600">
                Phone
              </label>
              <input type="text" id="phone" name="phone" v-model="data.phone"
                class="w-full bg-white rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8"
                required />
            </div>
            <div class="mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input type="email" id="email" name="email" v-model="data.email"
                class="w-full bg-white rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8"
                required />
            </div>
            <div class="mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea id="message" name="message" v-model="data.message"
                class="w-full bg-white rounded border border-gray-300 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6"
                required></textarea>
            </div>
            <button type="submit"
              class="dark:text-white dark:bg-gray-900 dark:border-0 py-2 px-6 focus:outline-none dark:hover:bg-gray-600 rounded text-lg border-2 hover:bg-gray-900 hover:text-white">
              Submit
            </button>

            <p class="text-xs text-gray-500 mt-3">
              We will get back as soon as possible
            </p>
          </form>
        </div>
      </div>
    </div>

    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" ref="error" v-if="error">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div
                  class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10 rotate-180">
                  <svg class="text-red-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z">
                    </path>
                  </svg>
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">
                    Error In Form
                  </h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      There is some Error in form. Please check all the field and try again. Message must be more then 50
                      character
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button @click="hide" type="button"
                class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" ref="show" v-if="show">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div
                  class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
                  <svg class="text-red-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z">
                    </path>
                  </svg>
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">
                    Message Sent Successfull
                  </h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      Thank you for sending the Message. we will get back to you
                      as soon as posibble.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button @click="hide" type="button"
                class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const data = {
  name: '',
  phone: '',
  email: '',
  message: '',
};

const show = ref(false);
const error = ref(false);

const submitForm = async () => {
  console.log(data.message.length);
  if (data.name.length < 5 || data.phone.length < 8 || data.email.length < 6 || data.message.length < 50) {
    console.log('errro');
    error.value = true;
  } else {

    await useAsyncData("success", () =>
      $fetch("https://formspree.io/f/xjvznjwg", {
        method: "post",
        body: data,
      }).then((res) => {
        if (res.ok) {
          show.value = true;
        }
      })
    );
  }

};

const hide = () => {
  show.value = false;
  error.value = false;
};
</script>
