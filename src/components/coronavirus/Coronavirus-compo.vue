<template>
  <div class="data-coronavirus" v-if="dataCoronavirus">
    <h1 class="main__title">Число погибших от коронавируса на {{getDate}}</h1>
    <div class="graph__wrapper" v-for="item in dataCoronavirus" :key="item">
    <div
      class="graph"
      :style="{ height: `${(item['Confirmed'] / 3000000) * 300}` + 'px' }"
    >
     {{ item["Confirmed"] }}
    </div>
    <div class="graph__info">{{item["Province_State"]}}</div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
import { getCoronavirusData } from "./coronavirus-app";
// import {ref} from "@vue/reactivity";

export default {
  data() {
    return {
      // getCoronavirusData,
      // dataCoronavirus: null,
    };
  },
  // created() {
  //   this.getCoronavirusData().then((result) => (this.dataCoronavirus = result));
  // },
  emits: {triggerLoad: Boolean},
  setup(props, {emit}) {
    let dataCoronavirus = ref(null);
    let triggerLoading = ref(true);
    let getData = () => {
      getCoronavirusData().then((result) => {
        emit("triggerLoad", triggerLoading.value);
        dataCoronavirus.value = result});
    };
    onMounted(getData);
    let getDate = new Date().toString();
    return {
      dataCoronavirus,
      getData,
      getDate,
    };
  },
};
</script>

<style scoped>
.main__title{
  animation-name: blurre;
  animation-duration: .1s;
  animation-iteration-count: infinite;
  font-size: 20px;
}
.data-coronavirus {
  width: 900px;
  height: 359px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border: 3px solid black;
  animation-name: blurre;
  animation-duration: .1s;
  animation-iteration-count: infinite;
}
@keyframes blurre{
  from{
      filter: blur(.7px);
  }
  to {
    filter: blur(0px);
  }
}
.graph__wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.graph__wrapper:not(:last-child) {
  margin-right: 50px; 
}
.graph {
  border: 1px solid black;
  width: 100px;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(1px);

}

.graph__info{

}
</style>
