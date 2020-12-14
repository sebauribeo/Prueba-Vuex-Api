<template>
    <div>
        <div class="alert mx-auto " role="alert" >
            <div class="titulo text-center ">
            <h2 class="pt-5">No hay Favoritos añadidos</h2>             
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NotFound',
    }
</script>

<style scoped>
.alert {
    margin: 100px;
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
    position: absolute;
    padding: 50px;
    box-sizing: border-box;
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