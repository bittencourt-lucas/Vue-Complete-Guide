new Vue({
    el: '#exercise',
    data: {
        name: 'Lucas Bittencourt',
        age: 27
    },
    methods: {
        ageTimesThree() {
            return this.age * 3;
        },
        randomNumber: () => Math.random(),
    },
});
