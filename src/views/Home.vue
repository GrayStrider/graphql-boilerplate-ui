<template lang=pug>
  .home
    HelloWorld(msg='Welcome to Your Vuetify App')
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
