import 'bootstrap/dist/css/bootstrap.css';
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

// remover o localStorage em caso de refresh no app
// if (window.localStorage.getItem('gitHubIssues')) {
//  window.localStorage.removeItem('gitHubIssues');
// }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});

