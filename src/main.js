import Vue from 'vue';

import App from './App.vue';
import buefy from './plugins/buefy';

new Vue({
  buefy,
  render: h => h(App),
}).$mount('#app');
