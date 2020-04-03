Vue.component('contador', {
    template:
    `
        <div>
            <h1>{{numero}}</h1>
            <button @click="numero++">+</button>
        </div>
    `,
    data(){
        return {
            numero: 0
        }
    }
});