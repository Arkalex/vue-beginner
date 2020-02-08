const app = new Vue({
    el: '#app',
    data: {
        saludo: 'Vue lifecycle'
    },
    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        // Al crear los métodos, watchers y eventos, pero aún no accede al DOM.
        // Aún no se puede acceder a 'el'
        console.log('created');
    },
    beforeMount() {
        // Se ejecuta antes de insertar el DOM
        console.log('beforeMount');
    },
    mounted() {
        // Se ejecuta al insertar el DOM
        console.log('mounted');
    },
    beforeUpdate() {
        // Al detectar un cambio
        console.log('beforeUpdated');
    },
    updated() {
        // Al realizar cambios
        console.log('updated');
    },
    beforeDestroy() {
        // Antes de destruir la instancia
        console.log('beforeDestroy')
    },
    destroyed() {
        // Se destruye toda la instancia F
        console.log('destroyed');
    },
    methods: {
        destruir() {
            this.$destroy();
        }
    }
});