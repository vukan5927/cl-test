import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { MdStar, FaSpinner } from "oh-vue-icons/icons";

addIcons(MdStar, FaSpinner);

const app = createApp(App);

app.use(router);
app.component("v-icon", OhVueIcon);
app.mount("#app");
