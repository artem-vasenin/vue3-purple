import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import './static/styles.css';
import { router } from './routes';
import TextInput from './components/TextInput.vue';

const pinia = createPinia();

createApp(App)
  .use(pinia)
  .use(router)
  .component('TextInput', TextInput)
  .mount('#app');
