import Vue from 'vue/dist/vue.esm'

document.addEventListener('DOMContentLoaded', () => {
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue. This is Elvis!'
    }
  })
  // v-bind binds the element attributes, in this case title, to the data on the Vue app.
  var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
  })
  // v-if toggles the presence of an element depending on its value.
  var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true
    }
  })
  // v-for goes through each item on an Array
  var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        {text: 'Learn Javascript'},
        {text: 'Learn Vue'},
        {text: 'Learn ReactJS'},
        {text: 'Learn RoR'},
        {text: 'Build something awesome!'}
      ]
    }
  })
  // v-on attaches a method to event listeners
  var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Hello Vue.js!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })
  // v-model creates a two-way binding between form input and app state.
  var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Hello Vue!'
    }
  })
})
