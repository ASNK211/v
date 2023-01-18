<template>
  <body>
    <div class="bg-indigo-50" style="background-color: #02376b">
      <div
        class="xl:px-20 md:px-10 sm:px-6 px-4 md:py-12 py-9 2xl:mx-auto 2xl:container md:flex items-center justify-center"
      >
        <div
          class="bg-white shadow-lg rounded xl:w-1/3 lg:w-5/12 md:w-1/2 w-full lg:px-10 sm:px-6 sm:py-10px-2 py-6"
        >
          <p
            tabindex="0"
            class="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
          ></p>
          <!-- <div class="col-auto d-block mx-auto alert alert-danger" v-if="error">
            {{ error }}
          </div> -->

          <div>
            <label
              for="email"
              class="text-sm font-medium leading-none text-gray-800"
            >
              Email
            </label>
            <input
              id="email"
              aria-labelledby="email"
              type="email"
              v-model="email"
              class="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              placeholder="email"
            />
          </div>
          <div class="mt-6 w-full">
            <label
              for="pass"
              class="text-sm font-medium leading-none text-gray-800"
            >
              NEW PASSWORD
            </label>
            <div class="relative flex items-center justify-center">
              <input
                id="myInput"
                v-model="password"
                placeholder="Password"
                :type="show ? 'password' : 'text'"
                class="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
              <div class="absolute right-0 mt-2 mr-3 cursor-pointer">
                <div id="show" @click="show = false" v-if="show">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
                      fill="#71717A"
                    />
                  </svg>
                </div>
                <div @click="show = true" v-if="show === false" class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-eye-off"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#27272A"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="3" y1="3" x2="21" y2="21" />
                    <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83" />
                    <path
                      d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-6 w-full">
            <label
              for="pass"
              class="text-sm font-medium leading-none text-gray-800"
            >
              CONFIRM PASSWORD
            </label>
            <div class="relative flex items-center justify-center">
              <input
                id="myInput"
                v-model="passwordVerify"
                placeholder="Password"
                :type="show ? 'password' : 'text'"
                class="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
              <div class="absolute right-0 mt-2 mr-3 cursor-pointer">
                <div id="show" @click="show = false" v-if="show">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
                      fill="#71717A"
                    />
                  </svg>
                </div>
                <div @click="show = true" v-if="show === false" class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-eye-off"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#27272A"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="3" y1="3" x2="21" y2="21" />
                    <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83" />
                    <path
                      d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div>
            <label
              for="email"
              class="text-sm font-medium leading-none text-gray-800"
            >
              (REFERAL ID OPTIONAL)
            </label>
            <input
              id="email"
              aria-labelledby="email"
              type="email"
              v-model="email"
              class="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              placeholder="ID"
            />
          </div>
          <div class="mt-8">
            <button
              @click="register"
              role="button"
              class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
            >
              Create my account
            </button>
          </div>
          <p
            tabindex="0"
            class="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
          >
            <a
              href="/"
              class="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none text-gray-800 cursor-pointer"
            >
              login now</a
            >
          </p>
        </div>
        <div class="xl:w-1/3 md:w-1/2 lg:ml-16 ml-8 md:mt-0 mt-6">
          <div class="flex items-start mt-8">
            <p class="sm:text-2xl text-xl leading-7 text-gray-600 pl-2.5">
              <img
                src="../components/BackgroundEraser_20230112_210100656.png"
                alt=""
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import AuthenticationServices from "@/services/AuthenticationServices";
export default {
  name: "logn-view",
  data() {
    return {
      email: "",
      password: "",
      passwordVerify: "",
      // error: [],
      message: "",
      alert: "",
      show: true,
      success: "",
    };
  },

  methods: {
    async google() {
      window.location.href = "http://zoolgame.com/api/google";
    },
    async register() {
      try {
        // this.alert = "";
        // if (this.password !== this.passwordVerify) {
        //   this.alert = "Passwords must match";
        //   return;
        // }
        const response = await AuthenticationServices.register({
          email: this.email,
          password: this.password,
        });
        console.log("4", response.data.message);
        this.message = response.data.message;
        localStorage.setItem("isAdmin", response.data.sendUser.isAdmin);
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem(
          "userId",
          JSON.stringify(response.data.sendUser._id)
        );
        localStorage.setItem("email", response.data.sendUser.email);
        this.$store.dispatch("setToken", response.data.accessToken);
        this.$store.dispatch("setUser", response.data.sendUser);
        this.$store.dispatch("setAdmin", response.data.sendUser.isAdmin);
      } catch (error) {
        this.alert = error.response.data.error;
      }
    },
  },
  mounted() {
    document.title = "Sign up";
  },
};
</script>
<style scoped lang="scss">
.error {
  color: red;
}
.body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}
.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
.mb-4 {
  border-radius: 23%;
}
</style>
