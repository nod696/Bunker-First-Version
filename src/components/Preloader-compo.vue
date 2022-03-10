<template>
  <div class="preloader">
    <img src="../assets/nuclear1.png" alt="" class="preload__img" />
  </div>
</template>

<script>

export default {
  setup() {

  },
};
</script>

<style scoped>
.preloader{
  animation-name: preloading;
  animation-duration: .05s;
  animation-iteration-count: infinite;
}
@keyframes preloading{
  from{
      filter: blur(0px);
  }
  to {
    filter: blur(5px);
  }
}
</style>
