// init app
import { createApp } from 'vue';
import App from '@/App.vue';
import i18n from '@/i18n';
const app = createApp(App);

// set global properties
app.config.globalProperties.$version = APP_VERSION;

// use plugins
app.use(i18n);

// ready? let's go!
app.mount('#app');
