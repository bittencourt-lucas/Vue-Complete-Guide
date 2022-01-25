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
      console.log('Computed');
      return this.counter < 5 ? 'Smaller than 5' : 'Greater than 5';
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
      console.log('Method');
      return this.counter < 5 ? 'Smaller than 5' : 'Greater than 5';
    },
    alertMe: () => alert("Alert!"),
  },
});
  