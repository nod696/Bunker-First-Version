<template>
    <h2 class="exchange__title">Курс EUR</h2>
  <div class="showData" ref="showData" @click="maxGraphEl" v-if="dataExchangeEUR != []">

    <div
      class="graph"
      :style="{ height: `${item}` + 'px' }"
      v-for="(item) in dataExchangeEUR"
      :key="item"
    >
      {{ item.toFixed(1) }}
    </div>
  </div>
          <h2 class="exchange__title">Курс USD</h2>
  <div class="showData" v-if="dataExchangeUSD != []">
    <div
      class="graph"
      :style="{ height: `${item}` + 'px' }"
      v-for="item in dataExchangeUSD"
      :key="item"
    >
      {{ item.toFixed(1) }}
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref, watch} from "@vue/runtime-core";
import { getEURData, getUSDData } from "./exchange-app";

export default {
  emits: {triggerLoad: Boolean},
  setup() {
    let dataExchangeEUR = ref([]);
    let dataExchangeUSD = ref([]);
    let showData = ref(null);
    let graphs = ref([]);

    function loadData() {
      setInterval(async () => {
        getUSDData().then((result) => {
          let resultRand = result.rates["RUB"] + (Math.random() + Math.floor(Math.random() * 11));
          dataExchangeUSD.value.push(resultRand);
        });
        getEURData().then((result) => {
          let resultRand = result.rates["RUB"] + (Math.random() + Math.floor(Math.random() * 11));
          dataExchangeEUR.value.push(resultRand);
        });
      }, 10000);
    }
    let maxGraphEl = computed(() => {
     return (showData.value.clientWidth / 30);
    });
    watch(dataExchangeEUR.value, () => {
       if(dataExchangeEUR.value.length > maxGraphEl.value){
        dataExchangeEUR.value.shift();
      }
    });
    watch(dataExchangeUSD.value, () => {
       if(dataExchangeUSD.value.length > maxGraphEl.value){
        dataExchangeUSD.value.shift();
      }
    });
    onMounted(loadData);
    return {
      graphs,
      dataExchangeEUR,
      dataExchangeUSD,
      loadData,
      showData,
      maxGraphEl
    };
  },
};
</script>

<style scoped>
.exchange__title{
  margin-top: 50px;
}
.showData {
  width: 320px;
  display: flex;
  align-items: flex-end;
  margin-bottom: 50px;
  margin: 0 auto;
  animation-name: blurre;
  animation-duration: .1s;
  animation-iteration-count: infinite;
}
@keyframes blurre{
  from{
      filter: blur(1.3px);
  }
  to {
    filter: blur(0px);
  }
}
.graph {
  border: 1px solid white;
  width: 30px;
  color: white;
  background-color: black;
}
.graph:not(:last-child) {
  /* margin-right: 20px; */
}
</style>
