import Vue from 'vue'
import App from './App.vue'
import UIKit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import 'uikit/dist/css/uikit.min.css'
import 'uikit/dist/js/uikit.min'
import 'uikit/dist/js/uikit-icons.min'

UIKit.use(Icons)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: createElement => createElement(App)
})
