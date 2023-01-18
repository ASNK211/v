<template>
  <div style="background-color: #013363">
    <naviGator />
    <div class="cardet">
      <div class="balance">
        <div class="button-23">
          <p class="text-1xl font-semibold text-gray-800">{{ balance || 0 }}</p>
        </div>
      </div>
      <div class="prsantge">
        <div class="buthton-23">
          <p style="color: beige" class="text-1xl font-semibold text-gray-800">
            {{ percentage || 0 }} %
          </p>
        </div>
      </div>
      <div class="profit">
        <div class="button-23">
          <p class="text-1xl font-semibold text-gray-800">{{ profit || 0 }}</p>
        </div>
      </div>
      <div class="logout1">
        <div class="butjton-23">
          <p
            role="button"
            style="color: beige"
            v-if="$store.state.isUserLoggedIn"
            @click="logout"
            class="text-1xl font-semibold text-gray-800"
          >
            logout
          </p>
        </div>
      </div>
      <div>
        <div>
          <div
            v-if="show === 0"
            class="h-full w-full absolute flex items-center justify-center top-0 lg:mx-auto md:px-28 md:py-10 px-4 py-9"
            id="modal"
          >
            <div
              class="bg-black bg-opacity-70 w-full h-full absolute"
              @click="show = 1"
            ></div>
            <div
              class="bg-white border border-gray-300 xl:w-2/6 w-full relative z-30 xl:px-14 lg:px-28 md:px-16 px-4 py-10 flex flex-col items-center justify-center"
            >
              <div v-if="massage" class="alert alert-danger" role="alert">
                {{ massage }}
              </div>
              <div class="w-full mt-8">
                <input
                  placeholder="USDT TRC20 ID"
                  v-model="usdtId"
                  type="email"
                  class="w-full py-4 focus:outline-none text-base leading-4 text-gray-600 border-gray-400 border-b"
                />
              </div>
              <div class="w-full mt-8">
                <input
                  placeholder="amount"
                  v-model="amount"
                  type="number"
                  class="w-full py-4 focus:outline-none text-base leading-4 text-gray-600 border-gray-400 border-b"
                />
                <button
                  role="button"
                  @click="ordern"
                  aria-label="unlock ten percent off"
                  class="text-base font-medium leading-4 py-4 w-full bg-gray-800 text-white uppercase mt-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 hover:bg-gray-700"
                >
                  send
                </button>
              </div>
              <div class="flex items-center justify-center">
                <button
                  role="button"
                  aria-label="no thanks"
                  class="mt-4 text-base font-semibold leading-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 underline text-gray-800 capitalize hover:text-gray-600"
                  @click="show = 1"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="dexrt">
            <button
              style="background-color: #94a3b8; color: black; font-weight: 800"
              class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 rounded px-4 sm:px-8 py-2 text-xs sm:text-sm"
              @click="show = 0"
            >
              Wthdraw
            </button>
          </div>
          <div>
            <div
              v-if="shown === 0"
              class="h-full w-full absolute flex items-center justify-center top-0 lg:mx-auto md:px-28 md:py-10 px-4 py-9"
              id="modal"
            >
              <div
                class="bg-black bg-opacity-70 w-full h-full absolute"
                @click="shown = 1"
              ></div>
              <div
                class="bg-white border border-gray-300 xl:w-2/6 w-full relative z-30 xl:px-14 lg:px-28 md:px-16 px-4 py-10 flex flex-col items-center justify-center"
              >
                <div v-if="massaged" class="alert alert-danger" role="alert">
                  {{ massaged }}
                </div>
                <div>{{ usdtId }}</div>
                <div>
                  <button
                    @click="copyTestingCode"
                    type="button"
                    style="position: relative; left: 10%"
                    class="py-2.5 px-2 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
                  >
                    <div
                      v-if="shows === 1"
                      style="color: black; font-weight: 800; font-size: large"
                    >
                      Copy
                    </div>
                    <svg
                      v-if="shows === 0"
                      class="h-8 w-8 text-green-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>

                <input type="hidden" id="testing-code" :value="testingCode" />

                <div class="flex items-center justify-center">
                  <button
                    role="button"
                    aria-label="no thanks"
                    class="mt-4 text-base font-semibold leading-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 underline text-gray-800 capitalize hover:text-gray-600"
                    @click="shown = 1"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="Deposit">
            <div class="flex items-center justify-center" id="button">
              <button
                style="
                  background-color: #94a3b8;
                  color: black;
                  font-weight: 800;
                "
                class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 rounded px-4 sm:px-8 py-2 text-xs sm:text-sm"
                @click="shown = 0"
              >
                Deposit
              </button>
            </div>
          </div>
          <div
            v-if="show === 0"
            class="h-full w-full absolute flex items-center justify-center top-0 lg:mx-auto md:px-28 md:py-10 px-4 py-9"
            id="modal"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import naviGator from "../components/naviGator.vue";
import AuthenticationServices from "@/services/AuthenticationServices";

export default {
  name: "LightWithButton",
  components: { naviGator },
  data() {
    return {
      balance: "",
      show: 1,
      shown: 1,
      usdtId: "",
      percentage: "",
      profit: "",
      shows: 1,
      massage: "",
      massaged: "",
      testingCode: "1234",
      amount: "",
      profilePhoto:
        "https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_1.png",
    };
  },
  async created() {
    const userId = localStorage.getItem("userId");
    try {
      const response = await AuthenticationServices.getUserbalance(
        JSON.parse(userId)
      );
      this.balance = response.data.balance;
      this.usdtId = response.data.usdtId;
      this.percentage = response.data.percentage;
      this.profit = response.data.profit;
    } catch (error) {
      const ddd = error.response.data.error;
      console.log(ddd);
    }
  },
  methods: {
    async getdata() {},
    async copyTestingCode() {
      try {
        const userId = localStorage.getItem("userIds");
        await AuthenticationServices.deposit({
          userId: userId,
        });
        let testingCodeToCopy = document.querySelector("#testing-code");
        testingCodeToCopy.setAttribute("type", "text"); // 不是 hidden 才能複製
        testingCodeToCopy.select();
        document.execCommand("copy");
        this.shows = 0;
      } catch (error) {
        this.massaged = error.response.data.massage;
        console.log(error.response.data.massage);
      }
    },
    async ordern() {
      try {
        const userId = localStorage.getItem("userIds");
        await AuthenticationServices.addorder({
          amount: this.amount,
          usdtId: this.usdtId,
          userId: userId,
        });
      } catch (error) {
        this.massage = error.response.data.massage;
      }
    },
    async logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$store.dispatch("setAdmin", false);
      localStorage.removeItem("token");
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("cart");
      localStorage.removeItem("userId");
      localStorage.removeItem("userIds");
      localStorage.removeItem("email");
      this.$router.push({
        path: "/",
      });
    },
  },
};
</script>

<style scoped lang="scss">
#testing-code {
  position: absolute;
  left: -9999px;
}
.prsantge {
  display: inline-block;
  top: 121px;
  position: relative;
}
.balance {
  display: inline-block;
  top: 121px;
  position: relative;
  right: 6%;
}
.profit {
  display: inline-block;
  top: 121px;
  position: relative;
  left: 6%;
}
.dexrt {
  display: inline-block;
  position: relative;
  top: 225px !important;
  left: 10%;
  z-index: 10;
}
.Deposit {
  position: relative;
  top: 193px;
  right: 9%;
}
.logout1 {
  position: relative;
  top: 350px;
}
@media (max-width: 530px) {
  .dexrt {
    position: relative;
    top: 161px;
    left: 16%;
  }
  .Deposit {
    position: relative;
    top: 193px;
    right: 16%;
  }
}
/* CSS */
.button-23 {
  background-color: #aab6afb2;
  border: 1px solid #222222;
  border-radius: 8px;
  box-sizing: border-box;
  color: #222222;
  display: inline-block;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin: 0;
  outline: none;
  padding: 13px 23px;
  position: relative;
  text-align: center;
  text-decoration: none;
  width: auto;
}

.cardet {
  height: 462px;
}
</style>
