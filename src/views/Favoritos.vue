<template>
    <div>

        <!-- HEADER -->

        <h1>
            <span>F</span>
            <span>a</span>
            <span>v</span>
            <span>o</span>
            <span>r</span>
            <span>i</span>
            <span>t</span>
            <span>o</span>
            <span>s</span>
        </h1>

        <!-- MAIN -->

        <div class="container">
            <div class="row" v-if="enviarFavoritos.length > 0">
                <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 my-3" v-for="(favorito, index) in enviarFavoritos" :key="index">
                    <div class="">
                        <img :src="favorito.image" class="image card-img-top rounded-circle mx-auto d-block" :alt="favorito.id++">
                        <div class="card-body">
                           <h5 class="card-title m-4 text-center text-white" >{{favorito.name}}</h5>
                        <a href="#" class="btn btn-danger col-12 rounded-pill m-1" @click.prevent="eliminandoFav(index)">Eliminar</a>
                        </div>
                    </div>
                </div>
            </div>

        <!-- ALERT -->

            <div v-else>
                <div class="alert mx-auto m-5" role="alert" >
                    <div class="titulo text-center ">
                    <h2 class="pt-5">No hay Favoritos añadidos</h2>             
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

    export default {
        name:'Favoritos',
        computed: {
            ...mapGetters(['enviarFavoritos'])
        },
        methods: {
            ...mapActions(['eliminandoFav'])

        }
    }
</script>

<style scoped>

/* RESET */

body {
    margin: 0;
    padding: 0;
    border: 0;
    width: 100%;
    height: 100vh;
}

/* ESTILOS HEADER */

h1 {
    font-family: 'Lobster', cursive;
    margin-top: 20px;
    color:  #eeff00;
    font-size: 70px;
    display: flex;
    align-content: center;
    justify-content: center;
}
h1 span {
    display: table-cell;
    margin: 0;
    padding: 0;
    animation: animate 2s linear infinite;
}
h1 span:nth-child(1){
    animation-delay: 0s;
}
h1 span:nth-child(2){
    animation-delay: 0.25s;
}
h1 span:nth-child(3){
    animation-delay: 0.5s;
}
h1 span:nth-child(4){
    animation-delay: 0.75s;
}
h1 span:nth-child(5){
    animation-delay: 1s;
}
h1 span:nth-child(6){
    animation-delay: 1.25s;
}
h1 span:nth-child(7){
    animation-delay: 1.5s;
}
h1 span:nth-child(8){
    animation-delay: 1.75s;
}
h1 span:nth-child(9){
    animation-delay: 2s;
}
@keyframes animate{
    0%, 100% {
        color: #fff;
        filter: blur(0px);
        text-shadow: 0 0 10px #eeff00, 0 0 20px #eeff00, 0 0 30px #eeff00, 0 0 40px #eeff00,0 0 50px #eeff00;
    }
    30%, 70% {
        color: #7c7c7c;
        filter: blur(0%);
        text-shadow:  none;
    }
}

/* ESTILOS ALERT */

.image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    align-items: center;
    box-shadow: 0 0 20px 0 yellow;
    transition: 1s;
}
.image:hover {
    transform: scale(1.1);
    transition: 1s;
    box-shadow: 0 0 20px 0 yellow, 0 0 40px 0 red;
}
.alert {
    position: relative;
    width: 50%;
    min-height: 300px;
    background: rgba(225, 225, 225, 0.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 1);
}
.alert:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: auto;
    height: auto;
    background: rgba(255, 255, 255, 0.01);
    pointer-events: none;
}
.alert:after{
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background:linear-gradient(45deg, #ff0047, #6eff00);
    pointer-events: none;
    animation: alert 10s linear infinite;
}
@keyframes alert {
    0%{
        filter: blur(60px) hue-rotate(0deg);
    }
    100%{
        filter: blur(60px) hue-rotate(360deg);

    }
}
.titulo {
    position: relative;
    z-index: 1;
}
.titulo h2 {
    color: yellow;
    font-weight: 800;
    transition: 1s;
}
.titulo h2:hover {
    transform: scale(1.4);
    transition: 1s;
}
</style>