new Vue({
  el: '#exercise',
  data: {
    isHighlight: false,
    effectClass: '',
    color: 'cyan',
    attachLight: false,
    attachBold: false,
    textColor: '',
    width: 0,
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function() {
        vm.effectClass = vm.isHighlight ? 'highlight' : 'shrink';
        vm.isHighlight = !vm.isHighlight;
      }, 1000);
    },
    loadingEffect: function() {
      var vm = this;
      setInterval(function() {
        if (vm.width < 200) vm.width += 10;
      }, 500);
    }
  },
  computed: {
    myStyle: function() {
      return {
        backgroundColor: this.color,
      };
    },
    loadingBar: function() {
      return {
        backgroundColor: 'red',
        height: '30px',
        transition: 'width 0.25s',
        width: this.width + 'px',
      }
    }
  }
});
