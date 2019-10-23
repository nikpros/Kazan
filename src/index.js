/**
 * Varinats connect libraries
 * 
 * import 'vue'
 * import 'bootstrap/dist/css/bootstrap.min.css'
 * import Vue from 'vue'
 * window.Vue = require('vue')
 */
import Vue from 'vue'
import './js/common'
import './assets/styl/main.styl'
import App from './components/App.vue'
import store from './store'

import OAuth from 'oauth'
var KEY = "f85c7a3e53b646b38ce817adebe73d76";
var SECRET = "0ef147264ba647b7b001ca95bd0c3549";

// var oauth = new OAuth.OAuth(
// 	'http://api.thenounproject.com',
// 	'http://api.thenounproject.com',
// 	KEY,
// 	SECRET,
// 	'1.0',
// 	null,
// 	'HMAC-SHA1'
// )
// oauth.get(
// 	'http://api.thenounproject.com/icon/6324',
// 	null,
// 	null,
// 	function (e, data, res){
// 		if (e) console.error(e)
//         console.log(require('util').inspect(data));
// 	}
// )


// Vue init
new Vue({
    el: '#app',
    store,
    render: h => h(App)
})