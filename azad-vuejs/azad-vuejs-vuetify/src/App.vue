<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
      <v-spacer></v-spacer>
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Sign In</span>
        <span class="mr-2">Sign Up</span>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app class="indigo">
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-img
                alt="Vuetify Logo"
                class="shrink mr-2"
                contain
                src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                transition="scale-transition"
                width="40"
              />
            </v-list-item-content>
          </v-list-item>
          <v-list-item  class="white--text" v-for="(item, index) in items" :key="index" router :to="item.route">
            <v-list-item-action>
              <v-list-item-icon>
                <v-icon>{{item.icon}}</v-icon>
              </v-list-item-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title left> {{item.text}} </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
    </v-navigation-drawer>
    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',

  components: {
    HelloWorld
  },

  data: () => ({
    //
    drawer: false,
    items: [
      {
        icon: 'mdi-home', text: 'Dashboard', route: '/'
      },
      {
        icon: 'mdi-home', text: 'Settings', route: '/about'
      },
      {
        icon: 'mdi-home', text: 'Settings', route: '/settings'
      }
    ]
  })
}
</script>
