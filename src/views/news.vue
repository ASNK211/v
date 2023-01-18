<template>
  <div class="bg-gray-200 py-10">
    <form id="login" v-on:submit.prevent>
      <div class="bg-white dark:bg-gray-800">
        <div
          class="container mx-auto bg-white dark:bg-gray-800 mt-10 rounded px-4"
        >
          <div class="mx-auto pt-4">
            <div class="container mx-auto">
              <form class="my-6 w-11/12 mx-auto xl:w-full xl:mx-0">
                <div class="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                  <label
                    for="Country"
                    class="pb-2 text-sm font-bold text-gray-800"
                    >Title</label
                  >
                  <input
                    type="text"
                    v-model="title"
                    id="Country"
                    name="country"
                    required
                    class="border bg-transparent border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-800 dark:text-gray-800"
                    placeholder="United States"
                  />
                </div>

                <div class="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                  <label
                    for="StreetAddress"
                    class="pb-2 text-sm font-bold text-gray-800"
                    >the article</label
                  >
                  <input
                    type="text"
                    v-model="article"
                    id="StreetAddress"
                    name="streetAddress"
                    required
                    class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-800 dark:text-gray-800"
                    placeholder=""
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="container mx-auto w-11/12 xl:w-full">
          <div
            class="w-full py-4 sm:px-0 bg-white dark:bg-gray-800 flex justify-end"
          >
            <button
              @click="adminProduct"
              class="bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
        <div
          class="container mx-auto mt-10 rounded bg-gray-100 dark:bg-gray-700 w-11/12 xl:w-full"
        >
          <div class="xl:w-full py-5 px-8">
            <div class="flex items-center mx-auto">
              <div class="container mx-auto">
                <div
                  v-for="product in products"
                  :key="product._id"
                  class="mx-auto xl:w-full"
                >
                  <!-- {{ products }} -->
                  <p class="text-lg text-gray-800 dark:text-gray-100 font-bold">
                    {{ product.title }}
                  </p>
                  <p class="text-sm text-gray-500 dark:text-gray-400 pt-1">
                    {{ product.article }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="container mx-auto pb-6"></div>
        </div>
      </div>
    </form>
  </div>
</template>
<style>
#xclose {
  position: relative;
  right: 35px;
  top: -86px;
}
.immudel {
  width: 80px;
}
</style>
<script>
import AuthenticationServices from "@/services/AuthenticationServices";
export default {
  name: "aboutView",
  data() {
    return {
      products: [],
      // product: { price: "", title: "", image: "" },
      activeItem: null,
      article: null,
      page: 1,
      perPage: 10,
      pages: [],
      title: null,
      alert: "",
      alerte: "",
    };
  },
  async created() {
    this.id = this.$route.params.id;
    const respons = await AuthenticationServices.getalladminProduct();
    this.products = respons.data;
    console.log();
    console.log();
    const response = await AuthenticationServices.updatedadminProduct();
    this.product = response.data;
  },
  methods: {
    async adminProduct() {
      this.alerte = "";
      if (this.article === null || this.title === null) {
        this.alerte = "one fo the value is not faund!";
      } else {
        try {
          await AuthenticationServices.adminProduct({
            article: this.article,
            title: this.title,
          });
        } catch (error) {
          this.error = error.response.data.error;
        }
      }
    },
    async updateProduct() {
      this.alert = "";
      if (this.filed === null || this.title === null || this.price === null) {
        this.alert = "one fo the value is not faund!";
      } else {
        await AuthenticationServices.updatedadminProduct({
          article: this.article,
          title: this.title,
        });
      }
    },
    async deleteProduct(_id) {
      await AuthenticationServices.dleteadminProduct(_id);
    },
    paginate(products) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return products.slice(from, to);
    },
    setusers() {
      let numberOfPages = Math.ceil(this.products.length / this.perPage);
      for (let i = 1; i <= numberOfPages; i++) {
        this.pages.push(i);
      }
    },
  },
  computed: {
    displayproducts() {
      return this.paginate(this.products);
    },
  },
  watch: {
    products() {
      this.setusers();
    },
  },
};
</script>
