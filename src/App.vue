<template>
  <HeaderComponent />
  <main class="container">
    <router-view />
  </main>
</template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  components: {
    HeaderComponent,
  },
};
</script>
<style lang="less">
body {
  background-color: #f6f0f748;
}
main.container {
  margin-top: 20px;
}
</style>
