# What is this repo? #
`clean-slate` is a personal starter template for new Vue projects.

---

### Initial Todo

- [ ] Remove Laravel Mix
- [ ] Webpack Config
    - [ ] Browsersync
    - [ ] Cached assets w/ HMR
    - [ ] Generate HTML page
- [ ] ESLint
- [ ] Prettier
- [ ] Render component, don't use <router-view>
- [ ] Cleanup initial mixins setup

### Laravel Valet for MacOS
Inside the root directory you will find `LocalValetDriver.php` that will allow Vue Router to work with Laravel Valet by referencing an HTML file and allowing requests.

### Node Version
**10.15.0**<br>
Using [Node Version Manager](https://github.com/creationix/nvm) you can jump between different versions of Node for each project. Create a `.nvmrc` file in your project root with the version of node inside of it and then type `nvm use` (inside the root folder) to use that version. Easily install versions of Node with `nvm install {node version}`.

### Primary Packages
1. Vue
1. Vuex
1. Vue Router
1. Axios
1. Browser Sync
1. Laravel Mix