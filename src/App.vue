<template>
  <div id="app">
    <div id="nav">
      <router-link class="links" to="/">Lista</router-link>•
      <router-link class="links" to="/cadastro">Cadastro</router-link>
    </div>
    <Title :title="$route.name" />
    <router-view class="container" />
    <div id="footer">
      <span class="footerSpan">Wayne Gomes - 2020</span>
    </div>
  </div>
</template>
<style scoped>
.links,
.footerSpan {
  margin: auto 16px auto 16px;
}
.router-link-exact-active {
  color: #1188ee;
}
</style>
<script>
import Title from "@/components/Title.vue";

export default {
  components: {
    Title
  },
};
</script>