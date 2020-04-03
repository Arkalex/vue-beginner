Vue.component('hijo', {
    template:
    `
        <div class="py-5 bg-success">
            <h2>Componente hijo {{numero}}</h2>
            <h3>Nombre: {{nombre}}</h3>
            <button>+</button>
        </div>
    `,
    props: ['numero'],
    data() {
        return{
            nombre: 'Alex'
        }
    },
    mounted() {
        this.$emit('nombreHijo', this.nombre);
    }
});