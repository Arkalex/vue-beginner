Vue.component('saludo', {
    template:
    `
        <div>
            <h1>{{saludo}}</h1>
            <h2>{{nombre}}</h2>
        </div>
    `,
    data(){
        return {
            saludo: 'Holi desde vue',
            nombre: 'Soy Alex'
        }
    }
});