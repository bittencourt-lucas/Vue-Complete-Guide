new Vue({
  el: '#app',
  data: {
    title: 'Hello World!',
    link: 'https://www.google.com',
    finishedLink: '<a href="https://www.google.com">Google</a>"',
    counter: 0,
    x: 0,
    y: 0,
    name: 'Wrex',
    secondCounter: 0,
  },
  computed: {
    output: function() {
      return this.counter < 5 ? 'Smaller than 5' : 'Greater than 5';
    },
  },
  watch: {
    counter: function(value) {
      var vm = this;
      setTimeout(function() {
        vm.counter = 0;
      }, 2000);
    },
  },
  methods: {
    sayHello: function() {
      this.title = 'Hello!';
      return this.title;
    },
    increase: function(step, event) {
      this.counter += step;
    },
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    result: function() {
      return this.counter < 5 ? 'Smaller than 5' : 'Greater than 5';
    },
    changeLink: function() {
      this.link = 'https://www.apple.com/'
    },
    alertMe: () => alert("Alert!"),
  },
});
  