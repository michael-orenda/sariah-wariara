// Every Vue application starts by creating a new application instance with the createApp function
import { createApp } from 'vue'

/**
 * The object we are passing into createApp is in fact a component. 
 * Every app requires a "root component" that can contain other components as its children.
 */ 
import App from './App.vue'

/**
 * An application instance won't render anything until its .mount() method is called. 
 * It expects a "container" argument, which can either be an actual DOM element or a selector string
 */
createApp(App).mount('#app')
