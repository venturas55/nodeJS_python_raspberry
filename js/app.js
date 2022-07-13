var app = new Vue({
    el: "#app",
    data: {
        tiempo: 5,
        verOpciones: false,

    },
    mounted: function () {
    },
    computed: {

    },
    methods: {
        accion: function () {
            alert("voy");
        },

        apagar: function (pin) {
            //fetch ('./../py/cambiarEstado.py '+pin+' on').then(R=> R.text()).then(R=> console.log(R));
            $.ajax({
                type: "POST",
                url:"./py/cambiarEstado.py 11 on",
                data: { param: pin }
            }).done(function (o) {
                //do something
            });
        },
        encender: function (pin) {
           // fetch('./../py/cambiarEstado.py ' + pin + ' off').then(R => R.text()).then(R => console.log(R));
           $.ajax({
            type: "POST",
            url:"./  py/cambiarEstado.py 11 off",
            data: { param: pin }
        }).done(function (o) {
            //do something
        });
        }
    }
})

