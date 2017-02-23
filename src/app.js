import Vue from 'vue'
import Hello from './components/Hello'
import VueMdl from 'vue-mdl'

Vue.use(VueMdl)

const AppComponent = Vue.extend({
    name: 'app',
    components: {
        Hello
    }
})

export default AppComponent
