<template>
  <div>

    <!-- NAV BAR -->
    
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
      <div class="container-fluid">
        <router-link to="/"><img class="logo navbar-brand ms-3" src="./assets/1200px-Rick_and_Morty.svg.png" alt=""></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link p-3" to="/opiniones">Opiniones</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link p-3" to="/favoritos">Favoritos</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link p-3" to="/administracion">Administración</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!--  TRANSICION VISTAS  -->

    <transition name="la-transicion" mode="out-in">
      <router-view></router-view>
    </transition>

    <!-- FOOTER -->

    <footer class="footer navbar navbar-expand-lg bg-dark text-white">
      <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <p class="my-auto"> Pagina web creada por:<strong> Sebastian Uribe</strong></p>
      </div>
      <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <ul class="my-auto">
          <li><a href="https://twitter.com/?lang=es" target="_blank"><font-awesome-icon class="fa-2x" :icon="['fab', 'twitter-square']"></font-awesome-icon></a></li>
          <li><a href="https://web.facebook.com" target="_blank"><font-awesome-icon class="fa-2x" :icon="['fab', 'facebook-square']"></font-awesome-icon></a></li>
          <li><a href="https://github.com" target="_blank"><font-awesome-icon class="fa-2x" :icon="['fab', 'github-square']"></font-awesome-icon></a></li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>

// LLAMADO DE API 

export default {
  name: 'App',
  created() {
    this.$store.dispatch('llamadoAPI');
  },
}
</script>

<style>

/* RESET*/

body {
  margin: 0;
  padding: 0;
  border: 0;
  background: url('../src/assets/fondo.gif');
}

/* ESTILOS TRANSICION */

.transicion-enter-active {
  transition:  all 1s ease;
}
.la-transicion-enter, .slide-fade-leave-to {
  transform: rotateY(100deg);
}

/* ESTILOS NAVBAR */

.logo {
  width: 150px;
  transition: 1s;
  align-content: center;

}
.logo:hover {
  transform: scale(1.1);
  transition: 1s;
}

/* ESTILOS FOOTER */

.footer {
  height: 80px; 
  padding: 0;
  display: flex;
  align-items: center;
  justify-items: center;
}
.footer div {
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 0;
  padding: 0;
}
.footer div ul {
  padding: 0;
}
.footer div ul li {
  display: inline;
  margin: 10px;
  transition: 2s;
}
.footer p {
  color: yellow;
}
.fa-2x {
  color: yellow;
  transition: 1s;
  margin-right: 20px;
}
.fa-2x:hover {
  transform: scale(1.3);
  transition: 2s;
}

/* FUENTE */

@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
</style>
