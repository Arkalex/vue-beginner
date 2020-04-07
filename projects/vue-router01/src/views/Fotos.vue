<template>
    <div>
        <h1>
            Fotografía
        </h1>
        <router-link :to="{ name: 'Fotos', params: {id: item} }" 
            v-for="(item, index) of fotosAr" :key="index">
            <button>Foto {{item}}</button>
        </router-link>

        <Fotografia />

        <button @click="home">Home</button>
        <button @click="anterior">Anterior</button>
        <button @click="siguiente">Siguiente</button>
    </div>
</template>

<script>
import Fotografia from '@/components/Fotografia.vue';

export default {
    name: 'Fotos', 
    components: {
        Fotografia
    },
    data() {
        return {
            fotosAr: [1, 2, 3]
        }
    },
    methods: {
        home() {
            this.$router.push('/')
        },
        anterior() {
            this.$router.go(-1)
        },
        siguiente() {
            this.$router.go(1)
        }
    }
}
</script>