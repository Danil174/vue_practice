<template>
<div class="app-main-layout">

  <NavBar @click="isOpen = !isOpen" />

  <SideBar v-model="isOpen" />

  <main class="app-content" :class="{full: !isOpen}">
    <div class="app-page">
      <router-view />
    </div>
  </main>

  <div class="fixed-action-btn">
    <a class="btn-floating btn-large blue" href="#">
      <i class="large material-icons">add</i>
    </a>
  </div>
</div>
</template>

<script>
import NavBar from '../components/app/NavBar.vue';
import SideBar from '../components/app/SideBar.vue';

export default {
  name: 'main-layout',
  data: () => ({
    isOpen: true,
  }),
  components: {
    NavBar,
    SideBar,
  },
};
</script>
