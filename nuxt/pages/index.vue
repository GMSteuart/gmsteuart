<template>
  <v-layout column justify-center align-center>
    <v-flex>
      <my-card xs12 sm12 md3 />
      <my-timeline xs12 sm12 md9 lg6 />
    </v-flex>
  </v-layout>
</template>

<script>
import MyCard from '~/components/MyCard.vue'
import MyTimeline from '~/components/MyTimeline.vue'

export default {
  components: {
    MyCard,
    MyTimeline
  }
}
</script>
