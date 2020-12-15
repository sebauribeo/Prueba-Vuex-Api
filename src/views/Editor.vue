<template>
    <div>
        <div class="modal fade mt-5" :id="'exampleModal'+item.id" v-for="(item, index) in eviarOpAdm" :key="index" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <label for="recipient-name" class="col-form-label">personaje:</label>
                <input v-model="name2" type="text" class="form-control" id="recipient-name">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">nombre:</label>
                    <input v-model="nombre2" type="text" class="form-control" id="recipient-name">
                  </div>
                  <div class="mb-3">
                    <label for="message-text" class="col-form-label">Opinion:</label>
                    <textarea v-model="comentario2" class="form-control" id="message-text"></textarea>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click.prevent="guardar" >Guardar</button>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import { mapGetters,mapActions } from "vuex";

    export default {
        name: 'Editor',
        data() {
            return {
                nombre2: '',
                comentario2: '',
                name2: '',
            }
        },
        props: {
        id2: {
            type: String,
            required: true
        }
        },
        mounted() {
           let item = this.$store.getters.enviarEditar.find(result => result.id == this.idLista);
           if(item){
               this.id = item.id;
               this.name2 = item.name;
               this.nombre2 = item.nombre;
               this.comentario2 = item.nombre;
           }
        },
                computed: {
           ...mapGetters(['enviarOpinion', 'eviarOpAdm'])
        },
                methods: {
            editando(item){
                this.push({name: 'editar', params: {id2: item.id}})
            },
            guardar(){
             if(this.nombre2 && this.comentario2 && this.name2){
                let item = {
                    nombre2: this.nombre2,
                    comentario2: this.comentario2,
                    name2: this.name2,
                    id: this.id2,
                };
                this.$store.dispatch('guardarPersonaje',item)
                this.nombre2 = '';
                this.comentario2 = '';
                this.name2 = '';
             }
            },

        }
    }
</script>

<style>

</style>