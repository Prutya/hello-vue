import Vue from 'vue'

import App from './components/App.vue'
import Hello from './components/Hello.vue'

Vue.component('hello', Hello)

new Vue({
  el: '#root',
  render: root => root(App)
})
