<template>
  <div class="main__wrapper">
    <div class="main_content">
      <nav class="navigation">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="#" @click="defineCompo(0)" class="nav__link"
              ><img src="./assets/corona.png" alt="" class="nav__img"
            /></a>
          </li>
          <li class="nav__item">
            <a href="#" @click="defineCompo(1)" class="nav__link"
              ><img src="./assets/weather.png" alt="" class="nav__img"
            /></a>
          </li>
          <li class="nav__item">
            <a href="#" @click="defineCompo(2)" class="nav__link"
              ><img src="./assets/exchange.png" alt="" class="nav__img"
            /></a>
          </li>
        </ul>
      </nav>
      <preloader-compo v-if="trello"></preloader-compo>
      <component :is="currentCompo" @triggerLoad="doSome()"></component>
    </div>
  </div>
  <figure class="figure">
    <video
      src="./assets/background.mp4"
      loop
      muted
      autoplay
      class="background__video"
      type="video/mp4"
    ></video>
  </figure>
</template>

<script>
import CoronavirusCompo from "./components/coronavirus/Coronavirus-compo.vue";
import ExchangeCompo from "./components/exchange/Exchange-compo.vue";
import WeatherCompo from "./components/weather/Weather-compo.vue";
import PreloaderCompo from "./components/Preloader-compo.vue";
import { ref, shallowRef } from "@vue/runtime-core";

export default {
  name: "App",
  components: {
    CoronavirusCompo,
    WeatherCompo,
    ExchangeCompo,
    PreloaderCompo,
  },
  setup() {
    let trello = shallowRef(null);
    function doSome(){
      trello.value = false;
    }
    let compos = ref(["CoronavirusCompo", "WeatherCompo", "ExchangeCompo"]);
    let currentCompo = shallowRef(null);
    function defineCompo(el) {
      // if(currentCompo.value == null){
      trello.value = true;
      if(el !== 0){
        trello.value = false;
      }
      currentCompo.value = compos.value[el];
      // }else{
      // trello.value = true;
      // currentCompo.value = [];
      // setTimeout(() => {
      // trello.value = false;
      // currentCompo.value = compos.value[el];
      // }, 3000);
      // }
    }
    return {
      trello,
      doSome,
      compos,
      currentCompo,
      defineCompo,
    };
  },
};
</script>

<style>
@font-face {
  font-family: Boncegro;
  src: url("Boncegro.ttf") format("truetype");
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  margin: 0;
  padding: 0;
  font-family: Boncegro;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  perspective: 2000px;
}

.figure {
  margin: 0;
  position: relative;
}
.main__wrapper {
  width: 1000px;
  height: 700px;
  left: 31.5%;
  top: 10%;
  z-index: 10;
  transform: rotateY(-10deg) rotateZ(-0.5deg);
  position: absolute;
  /* background-color: antiquewhite; */
}
.background__video {
  display: block;

  width: 100%;
  height: 100vh;
  object-fit: cover;
}
.nav__img {
  width: 80px;
  height: 80px;
  animation-name: icon;
  animation-duration: 0.1s;
  animation-iteration-count: infinite;
}
@keyframes icon{
  from{
      filter: blur(1.3px);
  }
  to {
    filter: blur(0px);
  }
}
.navigation {
  margin: 0 auto;
}

.nav__list {
  list-style: none;
  display: flex;
  justify-content: center;
  animation-name: navigation;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
}
/* @keyframes navigation{
  from{
      filter: blur(4px);
  }
  to {
       filter: blur(0px);
  }
} */
.nav__list:hover {
  filter: blur(0px);
}
.nav__item:not(:last-child) {
  margin-right: 40px;
}
</style>
