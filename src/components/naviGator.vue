<template>
  <div style="background-color: #013363">
    <nav id="xser" class="shadow">
      <div class="mx-auto container px-6 py-2 xl:py-0">
        <div class="flex items-center justify-between">
          <div
            class="flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start"
          >
            <div class="conrt">
              <div class="flex items-center">
                <img
                  class="urlimage"
                  style="width: 950px"
                  src="./BackgroundEraser_20230112_210100656.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <img class="urlicon" src="./1673550792295.png" alt="" />
        </div>
      </div>
    </nav>
  </div>
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

<style scoped>
.urlicon {
  width: 60px;
  display: inline-block;
}
@media (min-width: 1012px) {
  .urlimage {
    position: absolute;
    bottom: 68%;
    left: 12%;
    display: inline-block;
  }
  .urlicon {
    width: 60px;
    display: inline-block;
  }
}
@media (max-width: 550px) {
  .urlimage {
    position: absolute;
    bottom: 85%;
    left: 2%;
  }
  .urlicon {
    width: 40px;
    display: inline-block;
    position: relative;
    left: 10%;
  }
}
</style>
