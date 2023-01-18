<template>
  <nav class="bg-white shadow">
    <div class="mx-auto container px-6 py-2 xl:py-0">
      <div class="flex items-center justify-between">
        <div class="inset-y-0 left-0 flex items-center xl:hidden">
          <div
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-100 focus:outline-none transition duration-150 ease-in-out"
          >
            <div class="visible xl:hidden">
              <ul
                class="p-2 border-r bg-white absolute rounded left-0 right-0 shadow mt-8 md:mt-8 hidden"
              >
                <li
                  class="flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
                >
                  <router-link to="/admin/Dashboard">
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-grid"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                        <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                        <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                        <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                      </svg>
                      <span class="ml-2 font-bold">Dashboard</span>
                    </div>
                  </router-link>
                </li>
                <li
                  class="xl:hidden flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center"
                  @click="dropdownHandler($event)"
                >
                  <router-link to="/admin/orders">
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-puzzle"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <path
                          d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"
                        ></path>
                      </svg>
                      <span class="ml-2 font-bold">Orders</span>
                    </div>
                  </router-link>
                </li>
                <router-link to="/admin/notactive">
                  <li
                    class="xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-compass"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z"></path>
                      <polyline points="8 16 10 10 16 8 14 14 8 16"></polyline>
                      <circle cx="12" cy="12" r="9"></circle>
                    </svg>
                    <span class="ml-2 font-bold">not active</span>
                  </li>
                </router-link>
                <li
                  class="border-b border-gray-300 xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-code"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <polyline points="7 8 3 12 7 16"></polyline>
                    <polyline points="17 8 21 12 17 16"></polyline>
                    <line x1="14" y1="4" x2="10" y2="20"></line>
                  </svg>
                  <router-link to="/admin/news">
                    <span class="ml-2 font-bold">news</span>
                  </router-link>
                </li>
                <li
                  class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none"
                ></li>
              </ul>
              <svg
                @click="MenuHandler($event, true)"
                aria-haspopup="true"
                aria-label="Main Menu"
                xmlns="http://www.w3.org/2000/svg"
                class="show-m-menu icon icon-tabler icon-tabler-menu"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <line x1="4" y1="8" x2="20" y2="8"></line>
                <line x1="4" y1="16" x2="20" y2="16"></line>
              </svg>
              <div
                class="hidden close-m-menu text-gray-700"
                @click="MenuHandler($event, false)"
              >
                <svg
                  aria-label="Close"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="flex">
          <div class="hidden xl:flex md:mr-6 xl:mr-16">
            <router-link to="/admin/Dashboard">
              <a
                href="javascript: void(0)"
                class="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
              >
                <span class="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-grid"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                    <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                    <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                    <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                  </svg>
                </span>
                Dashboard
              </a>
            </router-link>
            <router-link to="/admin/orders">
              <a
                href="javascript: void(0)"
                class="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
              >
                <span class="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-puzzle"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <path
                      d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"
                    ></path>
                  </svg>
                </span>

                Orders
              </a>
            </router-link>
            <router-link to="/admin/notactive">
              <a
                href="javascript: void(0)"
                class="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
              >
                <span class="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-compass"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <polyline points="8 16 10 10 16 8 14 14 8 16"></polyline>
                    <circle cx="12" cy="12" r="9"></circle>
                  </svg>
                </span>
                not active
              </a>
            </router-link>
            <router-link to="/admin/news">
              <a
                href="javascript: void(0)"
                class="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
              >
                <span class="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-code"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <polyline points="7 8 3 12 7 16"></polyline>
                    <polyline points="17 8 21 12 17 16"></polyline>
                    <line x1="14" y1="4" x2="10" y2="20"></line>
                  </svg>
                </span>
                <span class="ml-2 font-bold">news</span>
              </a></router-link
            >
          </div>
          <div class="hidden xl:flex items-center">
            <div class="relative md:mr-6 my-2">
              <button
                class="focus:outline-none bg-gray-100 border-gray-300 border transition duration-150 ease-in-out hover:bg-gray-300 rounded text-gray-600 px-5 py-2 text-xs"
              >
                Manage
              </button>
            </div>
            <div class="ml-6 relative">
              <div
                class="flex items-center relative"
                @click="dropdownHandler($event)"
              >
                <ul
                  class="p-2 w-40 border-r bg-white absolute rounded right-0 shadow top-0 mt-16 hidden"
                >
                  <li
                    class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
                  >
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-user"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx="12" cy="7" r="4" />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                      </svg>
                      <span class="ml-2">My Profile</span>
                    </div>
                  </li>
                  <li
                    class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-help"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx="12" cy="12" r="9" />
                      <line x1="12" y1="17" x2="12" y2="17.01" />
                      <path
                        d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"
                      />
                    </svg>
                    <span class="ml-2">Help Center</span>
                  </li>
                  <li
                    class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-settings"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    <span class="ml-2">Account Settings</span>
                  </li>
                </ul>
                <div
                  class="cursor-pointer flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out"
                >
                  <img
                    class="rounded-full h-10 w-10 object-cover"
                    :src="profilePhoto"
                    alt="logo"
                  />
                </div>
                <div class="ml-2 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-chevron-down cursor-pointer"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "LightWithButton",
  data() {
    return {
      profilePhoto:
        "https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_1.png",
    };
  },
  methods: {
    dropdownHandler(event) {
      let single = event.currentTarget.getElementsByTagName("ul")[0];
      single.classList.toggle("hidden");
    },
    MenuHandler(el, val) {
      let MainList =
        el.currentTarget.parentElement.getElementsByTagName("ul")[0];
      let closeIcon =
        el.currentTarget.parentElement.getElementsByClassName(
          "close-m-menu"
        )[0];
      let showIcon =
        el.currentTarget.parentElement.getElementsByClassName("show-m-menu")[0];
      if (val) {
        MainList.classList.remove("hidden");
        el.currentTarget.classList.add("hidden");
        closeIcon.classList.remove("hidden");
      } else {
        showIcon.classList.remove("hidden");
        MainList.classList.add("hidden");
        el.currentTarget.classList.add("hidden");
      }
    },
  },
};
</script>
