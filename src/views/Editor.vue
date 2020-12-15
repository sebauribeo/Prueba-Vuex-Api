<template>
    <div>
      <h1>
        <span>E</span>
        <span>d</span>
        <span>i</span>
        <span>t</span>
        <span>o</span>
        <span>r</span>
      </h1>
<div class="contenedor text-center">    
    <div class="modal-content p-3 bg-dark text-warning ">
        <h4 class="p-2">Editor de opiniones</h4>
        <form @submit.prevent="guardar">
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Nombre de Personaje:</label>
            <input type="text" class="form-control" id="recipient-name" v-model="nombre">
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Edita tu Opinion:</label>
            <textarea class="form-control" id="message-text" v-model="comentario"></textarea>
          </div>
            <button type="submit" class="btn btn-success col-6 rounded-pill m-1">Guardar</button>
            <button type="button" class="btn btn-primary col-6 rounded-pill m-1" @click="$router.go(-1)">Regresar</button>
        </form>
    </div>
</div>
    </div>
</template>

<script>

    export default {
        name: 'Editor',
        data() {
            return {
                nombre: '',
                comentario: '',
                nameOpinion: '',
            }
        },
        props: {
        idOpinion: {
            type: String,
            required: true,
        }
        },
        mounted(){
          let editar = this.$store.getters.enviarOpinion.find(result => result.id == this.idOpinion);
               this.idOpi = editar.id;
               this.nameOpinion = editar.name;
               this.nombre = editar.nombre;
               this.comentario = editar.nombre;
        },
        

        methods: {
          guardar(){
            if(this.nombre && this.comentario && this.nameOpinion){
              let opiniones = {
                nombre: this.nombre,
                comentario: this.comentario,
                nameOpinion: this.nameOpinion,
                id: this.idOpi,
              };
              this.$store.dispatch('guardarPersonaje',opiniones).then(() => {
                this.$router.push({name: 'Administracion'});
              })
            }
          },
        }
    }
</script>

<style>
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
.contenedor {
  margin: 0;
  padding: 0;
  display: flex;
  align-content: center;
  justify-content: center;
}
.modal-content {
    position: relative;
    width: 320px;
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