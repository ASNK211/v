<template>
  <div class="hello">
    Your account has been activated successfully
    <button class="sssa" @click="urls">Login Now</button>
  </div>
</template>

<script>
import AuthenticationServices from "@/services/AuthenticationServices";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      seccess: "",
    };
  },
  async created() {
    const accessToken = this.$route.params.accessToken;
    const response = await AuthenticationServices.activatedUser({
      sorer: accessToken,
    });
    this.seccess = response.data.message;
    setTimeout(() => {
      this.$router.push("/");
    }, 1000);
  },
  methods: {
    urls() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped lang="scss">
.sssa {
  display: block;
  position: relative;
  left: 40%;
  background-color: #0800f7;
  border-radius: 5px;
  color: aliceblue;
  width: 20%;
  font-size: larger;
  font-weight: bolder;
  height: 42px;
  top: 50px;
}
</style>
