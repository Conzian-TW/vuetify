import Vue from 'vue'
import App from './App'
import Boilerplate from './Boilerplate'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import router from './router'

Vue.config.performance = true

Vue.use(
  Vuetify,
  {
    theme:{
      primary: '#2096f3',
      secondary: '#ff5722',
      danger: '#dd2c00',
      success: '#7ed321',
      teal: '#00bfa5',
      'czn-blue': '#147bd1',
      'light-gray': '#d4d4d4',
      'dark-gray': '1b2733'
    }
  }
)
Vue.use(VueRouter)

Vue.component(Boilerplate.name, Boilerplate)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
