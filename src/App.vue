<template>
  <div>
    <!-- Header와 Footer는 고정 -->
      <MainHeader />
      <router-view />
      <MainFooter />
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader.vue";
import MainFooter from "./components/MainFooter.vue";

export default {
  name: "App",
  components: {
    MainHeader,
    MainFooter,
  },
};
</script>