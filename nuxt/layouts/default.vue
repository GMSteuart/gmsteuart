<template>
  <div class="font-sans">
    <base-navigation></base-navigation>
    <nuxt/>
  </div>
</template>

<script>
import BaseNavigation from '@/components/BaseNavigation'

export default {
  name: 'DefaultLayout',
  components: {
    BaseNavigation
  }
}
</script>

<style>
html {
  background-color: theme('colors.white');
  font-family: theme('fontFamily.sans');
}
</style>
