<script setup lang="ts">
import { computed, Ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import TabMenu from "primevue/tabmenu";

const router = useRouter();
const route = useRoute();

const mainNav = computed(() =>
  router
    .getRoutes()
    .filter(({ meta }) => meta.nav === true)
    .map((route) => ({
      label: route.name,
      to: router.resolve(route),
    }))
);
</script>

<template>
  <TabMenu
    id="main-tab-nav"
    class="hidden xl:flex"
    :model="mainNav"
    :exact="false"
  />
  <pre>
    {{ route }}
  </pre>
  <footer>
    <router-link to="/career">Career</router-link>
  </footer>
</template>

<style scoped></style>
