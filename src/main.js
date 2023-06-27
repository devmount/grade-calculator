// init app
import { createApp } from 'vue';
import App from '@/App.vue';
const app = createApp(App);

// set global properties
app.provide('version', APP_VERSION);

// ready? let's go!
app.mount('#app');
