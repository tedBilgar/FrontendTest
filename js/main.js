import textConsole from './module.js';
import Vue from 'vue';
import App from 'pages/App.vue'

const hello = name => console.log(`hello ${name}`);

hello('Denis123');
//hello('world');

textConsole();

var app = new Vue({
  el: '#app',
  render: a => a(App)
})
