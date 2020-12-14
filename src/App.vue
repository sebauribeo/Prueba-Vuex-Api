<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link to="/"><img class="logo navbar-brand ms-5" src="./assets/1200px-Rick_and_Morty.svg.png" alt=""></router-link>
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
    <transition name="la-transicion" mode="out-in">
      <router-view></router-view>
    </transition>

    <footer class="footer navbar navbar-expand-lg bg-dark text-white">
      <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
        <p>Pagina web creada por: Sebastian Uribe</p>
      </div>
      <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
        <ul>
          <li><a href="https://twitter.com/?lang=es" target="_blank"><i class="fab fa-twitter-square fa-2x"></i></a></li>
          <li><a href="https://web.facebook.com" target="_blank"><i class="fab fa-facebook-square fa-2x"></i></a></li>
          <li><a href="https://github.com" target="_blank"><i class="fab fa-github-square fa-2x"></i></a></li>
        </ul>
      </div>
    </footer>



  </div>
</template>

<script>

export default {
  name: 'App',
  created() {
    this.$store.dispatch('llamadoAPI');
  },
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  border: 0;
  background: url('../src/assets/fondo.gif');
}
.la-transicion-enter-active {
  transition: all .1s ease;
}
.la-transicion-enter, .slide-fade-leave-to {
  transform: rotateY(90deg);
  opacity: 0;
}
.logo {
  width: 150px;
    transition: 1s;

}
.logo:hover {
  transform: scale(1.1);
  transition: 1s;
}
.footer {
  max-width: auto;
  height: auto;
  padding: 0;
}
.footer div {
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: end;
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
.footer div ul li i {
  color: white;
    transition: 1s;
}
.footer div ul li i:hover {
  transform: scale(1.3);
  transition: 1s;
}

</style>
