require('./bootstrap')

// Import modules...
import Vue from 'vue'
import { App as InertiaApp, plugin as InertiaPlugin } from '@inertiajs/inertia-vue'
import PortalVue from 'portal-vue'
import { InertiaProgress } from '@inertiajs/progress'
import 'es6-promise/auto'
import store from "./store/index"
import VueMeta from 'vue-meta'

Vue.mixin({ methods: { route } })
Vue.use(InertiaPlugin)
Vue.use(PortalVue)
Vue.use(VueMeta)

const app = document.getElementById('app')

InertiaProgress.init({
    color: '#7b3694'
});

new Vue({
    render: (h) =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent: (name) => require(`./Pages/${name}`).default,
            },
        }),
    store
}).$mount(app)
