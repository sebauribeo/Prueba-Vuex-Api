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
            <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 mt-4"  v-for="(personaje, index) in personaje.results" :key="index">
                <img :src="personaje.image" class="image card-img-top mx-auto d-block" alt="">
                <div class="">
                    <h5 class="card-title text-center text-white m-4">{{personaje.name}}</h5>
                    <a href="#" class="btn btn-danger col-6 rounded-pill">Opinar</a>
                    <a href="#" class="btn btn-success col-6 rounded-pill">Ver más</a>
                </div>
            </div>
        </div>

    </div>

</template>

<script>

    export default {
        name: 'Home',
        data() {
            return {
                personaje: {},
            }
        },
        mounted() {
            fetch('https://rickandmortyapi.com/api/character/')
            .then((resp) => resp.json())
            .then((results) => {
                this.personaje = results;
            })
        }


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
</style>