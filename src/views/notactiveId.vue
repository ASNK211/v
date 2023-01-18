<template>
  <body style="background-color: #cccccc">
    <div>
      <h1 class="text-center font-bold leading-10 text-gray-800">
        {{ users }}
      </h1>
      <div class="userId" v-for="order in orders" :key="order._id">
        {{ order.userId }}
      </div>

      <div class="inline-block p-8 text-center">
        <div class="font-bold tracking-wide text-gray-800">
          <div class="relative">
            <input
              v-model="usdtId"
              id="number"
              class="text-gray-600 dark:text-gray-800 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-5 text-sm border-gray-300 rounded border shadow"
              placeholder="usdtId"
            />
          </div>
        </div>
        <button
          @click="updateuserusdtId"
          type="button"
          class="m-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          add now
        </button>
      </div>
    </div>
  </body>
</template>

<script>
import AuthenticationServices from "@/services/AuthenticationServices";

export default {
  name: "MyComponent",
  data() {
    return {
      orders: [],
      users: "",
      id: "",
      usdtId: "",
    };
  },
  async created() {
    this.id = this.$route.params.id;
    const orderId = this.id;
    const response = await AuthenticationServices.getUser(orderId);
    this.orders = response;
    this.users = response.data.createdAt;
    console.log(this.users);
  },
  methods: {
    async updateuserusdtId() {
      const orderId = this.id;
      const usdtId = this.usdtId;
      const response = await AuthenticationServices.updateusdtId(orderId, {
        usdtId: usdtId,
      });
      console.log(response);
    },
  },
};
</script>

<style scoped>
.userId {
  position: relative !important;
  top: 8px !important;
  font-size: large;
  font-weight: bolder;
}
.inor {
  position: relative !important;
  top: 35px !important;
}
.balance {
  display: inline-block;
  position: relative;
  right: 20%;
}
.profit {
  display: inline-block;
  position: relative;
  left: 20%;
}
</style>
