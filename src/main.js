import Vue from 'vue';
import App from './App.vue';

import './assets/css/tailwind.css';
import './assets/css/style.css';

import HeroIcon from './components';
import * as icons from './icons';

HeroIcon.add(Object.values({ ...icons }));
Vue.use(HeroIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
