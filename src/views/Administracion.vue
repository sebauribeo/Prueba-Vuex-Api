<template>
    <div>

        <!-- HEADER -->

        <h1 >
            <span>A</span>
            <span>d</span>
            <span>m</span>
            <span>i</span>
            <span>n</span>
            <span>i</span>
            <span>s</span>
            <span>t</span>
            <span>r</span>
            <span>a</span>
            <span>c</span>
            <span>i</span>
            <span>ó</span>
            <span>n</span>
        </h1>

        <!-- TABLA ADMINISTRACION -->

        <div v-if="enviarOpinion.length > 0">
        <table class="table container bg-dark text-warning mt-5">
          <thead>
            <tr class="text-center">
              <th>#</th>
              <th>Personaje</th>
              <th>Opinion</th>
              <th>Usuario</th>
              <th>Eliminar</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-center" v-for="(item, index) in enviarOpinion" :key="index">
              <th>{{index+1}}</th>
              <td>{{item.name}}</td>
              <td>{{item.comentario}}</td>
              <td>{{item.nombre}}</td>
              <td><a href="#" class="btn btn-danger col-12 rounded-pill" @click="eliminandoOpinion(index)">Eliminar</a></td>
              <td><button type="button" class="btn btn-success col-12 rounded-pill" data-bs-toggle="modal" :data-bs-target="'#exampleModal'+item.id" data-bs-whatever="@mdo">Editar</button></td>
            </tr>
          </tbody>  
        </table>
        </div>

        <!-- ALERT -->

        <div v-else>
          <div class="alert mx-auto my-5" role="alert" >
            <div class="titulo text-center">
              <h2 class="pt-5">No hay datos para Administrar</h2>             
            </div>
         </div>
        </div>

        <!-- MODAL EDITOR -->

        <div class="modal fade mt-5" :id="'exampleModal'+item.id" v-for="(item, index) in enviarOpinion" :key="index" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content text-white">
              <div class="modal-header">
                <label for="recipient-name" class="col-form-label">Editando a : {{item.name}}</label>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">Edita tu Nombre:</label>
                    <input v-model="nombre" type="text" class="form-control" :id="'recipient-name'+item.nombre">
                  </div>
                  <div class="mb-3">
                    <label for="message-text" class="col-form-label">Edita tu Opinion:</label>
                    <textarea v-model="comentario" class="form-control" :id="'message-text'+item.comentario"></textarea>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click.prevent="guardarOpinion(item)" >Guardar</button>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import { mapGetters,mapActions } from "vuex";
    export default {
        name: 'Administracion',
        data() {
            return {
                nombre: '',
                comentario: '',
            }
        },

        computed: {
           ...mapGetters(['enviarOpinion'])
        },
        methods: {
            guardarOpinion(item){
                if (this.nombre && this.comentario){
                    let opinion = {
                        nombre: this.nombre,
                        comentario: this.comentario,
                        id: item.id,
                        name: item.name,
                    }
                this.$store.dispatch('guardarPersonaje',opinion),
                this.nombre = '';
                this.comentario = '';
                }
            },
            ...mapActions(['agregarOpinion', 'eliminandoOpinion', 'guardarPersonaje'])
        }
    }
</script>

<style scoped>

/* RESET */

body {
    margin: 0;
    border: 0;
    padding: 0;
}

/* ESTILOS HEADER */

h1 {
    font-family: 'Lobster', cursive;
    margin-top: 40px;
    color:  #eeff00;
    font-size: 50px;
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
h1 span:nth-child(10){
    animation-delay: 2.25s;
}
h1 span:nth-child(11){
    animation-delay: 2.5s;
}
h1 span:nth-child(12){
    animation-delay: 2.75s;
}
h1 span:nth-child(13){
    animation-delay: 3s;
}
h1 span:nth-child(14){
    animation-delay: 3.25s;
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

/* ESTILOS HEADER */

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

/* ESTILOS TABLA */

.table {
    margin-bottom: 250px;
}

/* ESTILOS MODAL */

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