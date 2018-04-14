import Vue from 'vue'

import App from '@/components/App'
import Hello from '@/components/Hello'

Vue.component('hello', Hello)

new Vue({
  el: '#root',
  render: root => root(App)
})
