// let's install Vue globally, so we can access whereever we want
window.Vue = require('vue')

import App from './components/App.vue'

new Vue({
    el: '#root',
    render: h => h(App)
})