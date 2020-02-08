const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hello World with Vue!',
        frutas: [
            {nombre: 'Pera', cantidad: 10},
            {nombre: 'Manzana', cantidad: 0},
            {nombre: 'platanos', cantidad: 11}
        ],
        nuevaFruta: '',
        total: 0
    },
    methods: {
        //Métodos normales
        addFruta () {
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: this.nuevaCantidad
            })
            this.nuevaFruta = '';
            this.nuevaCantidad = 0;
        }
    },
    computed: {
        //Si se modifica algún data, se lanzan los COMPUTED
        sumarFrutas() {
            this.total = 0;

            for(fruta of this.frutas){
                this.total += fruta.cantidad;
            }

            return this.total;
        }
    }
});