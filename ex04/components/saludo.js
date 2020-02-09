Vue.component('saludo', {
    template: `
        <div>
            <h1>
                {{saludo}}
            </h1>
            <h3>
                asdasdas
            </h3>
        </div>
    `,
    data () {
        return {
            saludo: 'Hello World!'
        }
    }
})