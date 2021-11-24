<script setup>
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import Header from './partials/Header.vue'
import Footer from './partials/Footer.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Gallery from './views/Gallery.vue'
import Contact from './views/Contact.vue'


</script>

<template>
  <div>
    <Header />
    <router-view v-slot="{ Component, route }">
      <transition
        :enter-active-class="route.meta.enterClass"
        :leave-active-class="route.meta.leaveClass"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
    <Footer />
  </div>
</template>


