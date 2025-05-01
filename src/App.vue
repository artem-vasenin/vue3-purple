<script setup lang="ts">
import Profile from "@/components/Profile.vue";
import {onMounted, ref} from "vue";
import {http} from "@/http/http.ts";
import type {IProfile} from "@/types/profile.ts";

const profile = ref<IProfile | null>(null);

onMounted(async () => {
  profile.value = await http.getProfile();
});
</script>

<template>
  <div class="app">
  <aside class="aside">
    <Profile :profile="profile" />
  </aside>
  <main class="main">
    main
  </main>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  max-width: 1400px;
  min-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding-top: 140px;
}
.aside {
  height: 100vh;
  flex: 0 0 400px;
  max-width: 400px;
}
.main {
  flex: 1;
}
</style>
