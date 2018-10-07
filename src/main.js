import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;

Vue.directive('autofocus', {
  inserted(el) {
    Vue.nextTick(() => el.focus());
  }
});

new Vue({
  render: h => h(App)
}).$mount('#app');
