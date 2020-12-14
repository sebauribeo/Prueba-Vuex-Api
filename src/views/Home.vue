<template>
    <div>
        <h1>
            <span>P</span>
            <span>e</span>
            <span>r</span>
            <span>s</span>
            <span>o</span>
            <span>n</span>
            <span>a</span>
            <span>j</span>
            <span>e</span>
            <span>s</span>
        </h1>
        <div class="row m-5" >
            <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 mt-4"  v-for="(personaje, index) in enviarPersonaje" :key="index">
                <img :src="personaje.image" class="image card-img-top mx-auto d-block" alt="">
                <div class="">
                    <h5 class="card-title text-center text-white m-4">{{personaje.name}}</h5>
                    <button type="button" class="btn btn-danger col-6 rounded-pill" data-bs-toggle="modal" :data-bs-target="'#exampleModal2'+personaje.id" data-bs-whatever="@mdo">Opinar</button>
                    <button type="button" class="btn btn-success col-6 rounded-pill" data-bs-toggle="modal" :data-bs-target="'#exampleModal'+personaje.id">Ver más</button>
                </div>
            </div>
        </div>


<!-- Modal -->
        <div class=""  v-for="(personaje, index) in enviarPersonaje" :key="index">
        <div class="modal fade  mt-5" :id="'exampleModal'+personaje.id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content text-white">
              <div class="modal-header ">
                <h5 class="modal-title" id="exampleModalLabel">{{personaje.name}}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body m-1 row">
                <img class="col-6" :src="personaje.image" alt="">  
                <ul class="p-0 col-6">
                    <li class="m-3">{{personaje.species}}</li>
                    <li class="m-3">{{personaje.gender}}</li>
                    <li class="m-3">{{personaje.status}}</li>
                    <li class="m-3">{{personaje.origin.name}}</li>
                </ul>
              </div>
              <div class="modal-footer d-flex justify-content-center">
                <button type="button" class="btn btn-secondary rounded-pill " data-bs-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-success rounded-pill" data-bs-dismiss="modal" @click="agregandoFavoritos(personaje)" :disabled="personaje.favorito">Agregar a Favoritos</button>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div v-for="(personaje, index) in enviarPersonaje" :key="index">
          <div class="modal fade mt-5" :id="'exampleModal2'+personaje.id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content text-white">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">{{personaje.name}}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form>
                   <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">Tu nombre:</label>
                      <input v-model="nombre" type="text" class="form-control" id="recipient-name">
                    </div>
                    <div class="m-1">
                      <label for="message-text" class="col-form-label">Opinion:</label>
                      <textarea v-model="comentario" class="form-control" id="message-text"></textarea>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="agregandoOpinion(personaje)" >Enviar Opinion</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>

</template>

<script>
import { mapGetters, mapActions } from "vuex";


    export default {
        name: 'Home',

        computed: {
           ...mapGetters(['enviarPersonaje'])
        },
        methods: {
            ...mapActions(['agregandoFavoritos', 'agregandoOpinion'])
        },
        


    }
</script>

<style scoped>
body {
    margin: 0;
    border: 0;
    padding: 0;
}
.row {
    width: auto;
}
.image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow: 0 0 20px 0 yellow;
    transition: 1s;
}
.image:hover {
    transform: scale(1.1);
    transition: 1s;
    box-shadow: 0 0 20px 0 yellow, 0 0 40px 0 red;

}
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


.modal-content {
    position: relative;
    margin: 50px;
    width: 400px;
    height: 400px;
    background: linear-gradient(0deg, #000000, #262626);
}
.modal-content:before, .modal-content:after{
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
.modal-content:after{
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