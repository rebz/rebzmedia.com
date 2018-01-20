require("./mixins");

import router from "./router";

require("./bootstrap");
require("./components");

const app = new Vue({
    router
});

app.$mount("#app")