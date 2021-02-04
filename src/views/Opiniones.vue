<template>
    <div>
        
        <!-- HEADER -->
        <h1>
            <span>O</span>
            <span>p</span>
            <span>i</span>
            <span>n</span>
            <span>i</span>
            <span>o</span>
            <span>n</span>
            <span>e</span>
            <span>s</span>
        </h1>

        <!-- MAIN -->
        <div class="accordion container mt-5" id="accordionExample" v-if="enviarOpinion.length > 0">
          <div class="accordion-item bg-light" v-for="(opinion, index) in enviarOpinion" :key="index">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapseOne'+opinion.id" aria-expanded="true" aria-controls="collapseOne">
                <strong class="m-3">Opinion sobre: </strong>{{opinion.name}}
                <br>
                <strong class="m-3">Realizado por: </strong>{{opinion.nombre}}      
                </button>
            </h2>
            <div :id="'collapseOne'+opinion.id" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <h2>Opinion de personaje:</h2>
                <p><strong>{{opinion.comentario}}</strong></p>
              </div>
            </div>
          </div>
        </div>

        <!-- ALERT -->

        <div v-else>
          <div class="alert mx-auto m-5" role="alert" >
              <div class="titulo text-center ">
              <h2 class="pt-5 ">No hay Opiniones añadidas</h2>             
              </div>
          </div>
        </div>

    </div>
</template>

<script>
import { mapGetters,mapActions } from "vuex";

    export default {
        name: 'Opiniones',
        computed: {
            ...mapGetters(['enviarOpinion'])
        },
        methods: {
            ...mapActions(['agregandoOpinion'])
        }


    }
</script>

<style scoped>

/* RESET */

body {
    margin: 0;
    padding: 0;
    border: 0;
    height: 100%;
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

/*  ESTILOS ALERT */

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

/* ESTILOS MAIN */

.container {
    position: relative;
    margin-bottom: 260px;
    background: linear-gradient(0deg, #000000, #262626);
}
.container:before, .container:after{
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    background: linear-gradient(60deg, #fb0094, #0000ff, #00ff00, #fff000, #ff0000,#fb0094, #0000ff, #00ff00, #fff000, #ff0000);
    background-size: 200%;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    z-index: -1;
    animation: animate1 20s linear infinite;
}
.container:after{
filter: blur(20px);
}
@keyframes animate1{
    0%{
        background-position: 0 0;
    }
    50%{
        background-position: 700% 0;
    }
    100%{
        background-position: 0 0;
    }
}
</style>