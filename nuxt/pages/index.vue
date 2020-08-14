<template>
  <v-container fluid class="container--home">
    <v-row no-gutters>
      <v-col>
        <v-row justify="center">
          <v-col class="pb-0">
            <my-card />
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col class="pt-1">
            <my-timeline />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
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

<style lang="scss">
.container--home {
  max-width: 1024px;
}
</style>
