<template>
  <div style="padding: 0">
    <h1 style="font-weight: 800; font-size: larger">not active</h1>
    <div v-if="$store.state.isUserLoggedIn">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">userId</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in displayorders" :key="user._id">
            <!-- <td>{{ user.createdAt }}</td> -->
            <td>{{ user.userId }}</td>
            <td>
              <router-link :to="`notactive/${user._id}`" class="btn btn-primary"
                >view</router-link
              >
            </td>
          </tr>
        </tbody>
      </table>
      <nav aria-label="...">
        <paginate
          v-model="page"
          :page-count="pages.length"
          :page-range="3"
          :margin-pages="1"
          :click-handler="clickCallback"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'pagination'"
          :page-class="'page-item'"
        >
        </paginate>
      </nav>
    </div>
  </div>
</template>

<script>
import AuthenticationServices from "@/services/AuthenticationServices";
export default {
  name: "LightWithButton",
  data() {
    return {
      balance: "",
      show: 1,
      users: [],
      page: 1,
      perPage: 10,
      pages: [],
      profilePhoto:
        "https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_1.png",
    };
  },
  async created() {
    const response = await AuthenticationServices.getnotactive();
    this.users = response.data;
    // const respons = await AuthenticationServices.getunUser();
    // this.users = respons.data;
    // const userId = localStorage.getItem("userId");

    // const ddd = response.data.message;
  },
  methods: {
    paginate(users) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return users.slice(from, to);
    },
    setusers() {
      let numberOfPages = Math.ceil(this.users.length / this.perPage);
      for (let i = 1; i <= numberOfPages; i++) {
        this.pages.push(i);
      }
    },
  },
  computed: {
    displayorders() {
      return this.paginate(this.users);
    },
  },
  watch: {
    users() {
      this.setusers();
    },
  },
};
</script>

<style scoped lang="scss">
.namepage {
  list-style: none;
  display: flex;
  border-bottom: 1px solid rgb(197, 191, 191);
}
@media screen and (max-width: 700px) {
  .namepage {
    margin: 10%;
  }
}
.namepage li {
  font-size: 300;
  color: rgb(155, 155, 155);
}
.link {
  text-decoration: none !important;
  color: rgb(155, 155, 155);
}
</style>
