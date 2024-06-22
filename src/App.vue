<template>
  <div>
    <!-- Header와 Footer는 고정 -->
      <MainHeader />
      <router-view />
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader.vue";

export default {
  name: "App",
  components: {
    MainHeader,
  },
};
</script>