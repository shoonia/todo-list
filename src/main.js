import Vue from 'vue';
import VueLocalStorage from 'vue-localstorage';

import App from './App';

Vue.config.productionTip = false;

Vue.directive('autofocus', {
  inserted(el) {
    Vue.nextTick(() => el.focus());
  }
});

Vue.use(VueLocalStorage, {
  name: 'ls',
  bind: true,
});

new Vue({
  render: h => h(App)
}).$mount('#app');
