<template>
<body>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
</body>

</template>

<script>
export default {
  props: {
    source: String
  },
  components: {},
  /* eslint-disable */
  beforeRouteEnter(to, from, next) {

    if(true){
      next(true)
    }else{
      
      next({
        path: "/"
      })
    }
  
  },

  data(){
    return{

    }
  },
  methods: {
   
  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");

$verde1: #00b05a;
$verde1t: rgba(0, 176, 90, 0.7);
$verde2: rgb(146, 208, 80);
$verde3: #a9d18e;
$roxo: rgb(171, 91, 153);
$azul: rgb(131, 205, 232);
$teste: #ffffff;

</style>
