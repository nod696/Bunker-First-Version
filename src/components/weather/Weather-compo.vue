<template>
  <div class="map__wrapper">
    <img class="map__img" src="./../../assets/russia.png" alt="" />
    <div class="points">
      <div class="point" @click="loadData" v-for="city in cities" :key="city">{{ city }}</div>
      <div class="modal" v-if="currentCity">{{currentCity}} {{currentDegr}}°C</div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/runtime-core";
import {getData } from "./weather-api";
export default {
  setup() {
    let cities = ref([
      "Moscow",
      "Yekaterinburg",
      "Volgograd",
      "Saint-Petersburg",
    ]);
    let currentCity = ref(null);
    let currentDegr = ref(null);
    let triggerLoading = ref(true);
    function loadData(curCity) {
      currentCity.value = curCity.path[0].textContent;
      getData(currentCity, currentDegr, triggerLoading);
    }
    return {
      getData,
      loadData,
      currentCity,
      currentDegr,
      cities,
    };
  },
};
</script>

<style scoped>
.modal {
  color: white;
  background-color: black;
  font-size: 30px;
  width: 300px;
  height: 100px;
  position: absolute;
}
.map__img {
  position: relative;
  width: 800px;
  height: 450px;
}
.map__wrapper{
  animation-name: blurre;
  animation-duration: .1s;
  animation-iteration-count: infinite;
}
.map__wrapper:hover{
  filter: blur(0px);
}
@keyframes blurre{
  from{
      filter: blur(1.3px);
  }
  to {
    filter: blur(0px);
  }
}
.point {
  cursor: pointer;
  background-color: grey;
    color: white;
}
.point:nth-child(1) {
  border-radius: 50%;
  position: absolute;
  z-index: 10;
  content: "";
  width: 30px;
  height: 30px;
  top: 42%;
  left: 20%;
}
.point:nth-child(2) {
  border-radius: 50%;
  position: absolute;
  z-index: 10;
  content: "";
  width: 30px;
  height: 30px;
  top: 60%;
  left: 32%;
}
.point:nth-child(3) {
  border-radius: 50%;
  position: absolute;
  z-index: 10;
  content: "";
  width: 30px;
  height: 30px;
  top: 90%;
  left: 78%;
}
.point:nth-child(4) {
  border-radius: 50%;
  position: absolute;
  z-index: 10;
  content: "";
  width: 30px;
  height: 30px;
  top: 29%;
  left: 21%;
}
</style>
