<template>
  <body style="background-color: #cccccc">
    <div>
      <div style="display: inline-block">{{ date }}</div>

      <div class="over">
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
            <h1 class="text-center font-bold leading-10 text-gray-800">
              {{ senderusdtId }}
            </h1>
          </div>
        </button>
      </div>

      <input type="hidden" id="testing-code" :value="senderusdtId" />
      <div
        @click="userp"
        class="userId"
        v-for="order in orders"
        :key="order._id"
      >
        {{ order.userId }}
      </div>

      <div class="inor">
        <div class="balance">
          <div style="font-weight: 800">balance</div>
          <h1
            v-for="user in orders"
            :key="user._id"
            class="text-center font-bold leading-10 text-gray-800"
          >
            {{ user.balance }}
          </h1>
        </div>
        <div class="profit">
          <div style="font-weight: 800">profit</div>
          <h1
            v-for="user in orders"
            :key="user._id"
            class="text-center font-bold leading-10 text-gray-800"
          >
            {{ user.profit }}
          </h1>
        </div>
      </div>

      <div class="inline-block p-8 text-center">
        <button
          @click="acceptwithdraw"
          type="button"
          class="m-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          accept
        </button>
      </div>
      <button style="display: inline-block" @click="deleteorder" class="">
        Done
      </button>
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
      users: [],
      id: "",
      testingCode: "1234",
      shows: 1,
      idt: "",
      amount: "",
      senderusdtId: "",
      date: "",
    };
  },
  async created() {
    this.id = this.$route.params.id;
    const orderId = this.id;
    const response = await AuthenticationServices.getorderone(orderId);
    this.orders = response.data;
    this.senderusdtId = response.data.orders.usdtId;
    this.idt = response.data.others._id;
    this.amount = response.data.orders.amount;
    this.date = response.data.orders.createdAt;
    console.log(response.data.orders.amount);
  },
  methods: {
    async userp() {
      this.$router.push(`/admin/Dashboardusers/${this.idt}`);
    },
    async acceptwithdraw() {
      const crdet = this.amount;
      console.log(crdet);
      const orderId = this.idt;
      console.log(orderId, "11");
      await AuthenticationServices.acceptwithdraw({
        userId: orderId,
        balance: crdet,
      });
    },
    copyTestingCode() {
      try {
        let testingCodeToCopy = document.querySelector("#testing-code");
        testingCodeToCopy.setAttribute("type", "text"); // 不是 hidden 才能複製
        testingCodeToCopy.select();
        document.execCommand("copy");
      } catch (err) {
        alert("Oops, unable to copy");
      }
    },
    async deleteorder() {
      const orderId = this.id;
      const response = await AuthenticationServices.deleteorder(orderId);
      console.log(response);
    },
  },
};
</script>

<style scoped>
.over {
  border: 1px solid rgb(199, 196, 196);
  overflow: scroll;
  width: 206px;
  border-radius: 7px;
  position: relative;
  left: 30%;
  height: 60px;
}
#testing-code {
  position: absolute;
  left: -9999px;
}
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
