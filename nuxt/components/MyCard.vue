<template>
  <v-card>
    <v-list-item three-line>
      <v-list-item-content class="text-left">
        <div class="text-caption text-uppercase">Developer</div>
        <v-list-item-title class="headline mb-1"
          >Grant Steuart</v-list-item-title
        >
        <v-container class="pa-1">
          <v-row>
            <span class="group pa-2">
              <v-btn
                icon
                nuxt
                ripple
                href="https://github.com/gmsteuart"
                target="_blank"
              >
                <v-icon>mdi-github</v-icon></v-btn
              >
              <v-btn
                icon
                nuxt
                ripple
                href="https://www.linkedin.com/in/gmsteuart/"
                target="_black"
              >
                <v-icon>mdi-linkedin</v-icon></v-btn
              >
              <v-btn
                icon
                nuxt
                ripple
                href="https://twitter.com/gmsteuart"
                target="_blank"
              >
                <v-icon>mdi-twitter</v-icon></v-btn
              >
              <v-btn
                icon
                nuxt
                ripple
                href="mailto:gmsteuart@gmail.com"
                target="_blank"
              >
                <v-icon>mdi-email</v-icon></v-btn
              >
            </span>
          </v-row>
        </v-container>
      </v-list-item-content>

      <v-list-item-avatar width="100" height="100">
        <v-img :src="require('~/assets/images/me.jpg')" />
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>
