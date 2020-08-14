<template>
  <v-card class="ml-1" max-width="410px">
    <v-container class="pa-2">
      <v-row no-gutters align="center" justify="start">
        <v-col cols="auto">
          <v-avatar class="ma-2" :width="avatarWidth" :height="avatarWidth">
            <v-img :src="require('~/assets/images/me.jpg')" />
          </v-avatar>
        </v-col>
        <v-col>
          <v-list-item>
            <v-list-item-content class="text-left pt-2">
              <div class="text-caption text-uppercase pl-1 mb-0">
                Developer
              </div>
              <v-list-item-title class="headline pl-1 pb-0"
                >Grant Steuart</v-list-item-title
              >
              <div>
                <v-btn
                  v-for="(item, i) in socialItems"
                  :key="i"
                  icon
                  nuxt
                  ripple
                  :href="item.url"
                  target="_blank"
                >
                  <v-icon>{{ item.icon }}</v-icon></v-btn
                >
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="pt-0">
          <blockquote class="blockquote pa-2 pl-4">
            No matter how great a tool may be, people will choose the one that
            is easier to use.
          </blockquote>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
  name: 'MyCard',
  data() {
    return {
      socialItems: [
        {
          url: 'https://github.com/gmsteuart',
          icon: 'mdi-github'
        },
        {
          url: 'https://www.linkedin.com/in/gmsteuart/',
          icon: 'mdi-linkedin'
        },
        {
          url: 'https://twitter.com/gmsteuart',
          icon: 'mdi-twitter'
        },
        {
          url: 'mailto:gmsteuart@gmail.com',
          icon: 'mdi-email'
        }
      ],
      avatarSizeMap: {
        xs: '75px',
        sm: '75px',
        md: '100px',
        lg: '100px',
        xl: '100px'
      }
    }
  },
  computed: {
    avatarWidth() {
      return this.avatarSizeMap[this.$vuetify.breakpoint.name]
    }
  }
}
</script>
