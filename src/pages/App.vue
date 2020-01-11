<template>
<body>
  <i id="hamburguer" @click="sidebarToggle()" class="fas fa-bars"></i>

  <div :id="sidebar">

  <transition
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutLeft"
    >
   <div v-show="show" class="item-sidebar" style="height: 60px; background-color: rgb(255, 255, 255)">
     <img  class="logo" src="@/assets/layout_set_logo.png" alt="">
    <i id="close" @click="sidebarToggle()" class="fas fa-bars"></i>
   </div>
  </transition>

  

    <transition
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutLeft"
    >
      <div v-show="show1" class="item-sidebar">
        <a href="#">Home 1</a>
      </div>
    </transition>

    <transition
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutLeft"
    >
      <div v-show="show2" class="item-sidebar">
        <a href="#">Home 1</a>
      </div>
    </transition>

    <transition
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutLeft"
    >
      <div v-show="show3" class="item-sidebar">
        <a href="#">Home 1</a>
      </div>
    </transition>

    <transition
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutLeft"
    >
      <div v-show="show4" class="item-sidebar">
        <a href="#">Home 1</a>
      </div>
    </transition>

    <transition
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutLeft"
    >
      <div v-show="show5" class="item-sidebar">
        <a href="#">Home 1</a>
      </div>
    </transition>




  </div>

  <div class="overlay"></div>

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
    if (true) {
      next(true);
    } else {
      next({
        path: "/"
      });
    }
  },

  data() {
    return {
      show: true,
      show1: true,
      show2: true,
      show3: true,
      show4: true,
      show5: true,
      show6: true,
      sidebar: "sidebar"
    };
  },
  methods: {
    sidebarToggle() {
      if ((this.sidebar == "sidebar")) {

       setTimeout(() => {
          this.show = !this.show;
        }, 50);

        setTimeout(() => {
          this.show1 = !this.show1;
        }, 100);

        setTimeout(() => {
          this.show2 = !this.show2;
        }, 200);

        setTimeout(() => {
          this.show3 = !this.show3;
        }, 300);

        setTimeout(() => {
          this.show4 = !this.show4;
        }, 400);

        setTimeout(() => {
          this.show5 = !this.show5;
        }, 500);

        setTimeout(() => {
          this.show6 = !this.show6;
        }, 600);


        setTimeout(() => {
            this.sidebar = 'sidebardesativ'
        }, 700);

      } else {


        this.sidebar = 'sidebar'

        setTimeout(() => {
          this.show = !this.show;
        }, 50);

        setTimeout(() => {
          this.show1 = !this.show1;
        }, 100);

        setTimeout(() => {
          this.show2 = !this.show2;
        }, 200);

        setTimeout(() => {
          this.show3 = !this.show3;
        }, 300);

        setTimeout(() => {
          this.show4 = !this.show4;
        }, 400);

        setTimeout(() => {
          this.show5 = !this.show5;
        }, 500);

        setTimeout(() => {
          this.show6 = !this.show6;
        }, 600);

 
      }


     
    }
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

#hamburguer {
  position: fixed;
  top: 10px;
  left: 24px;
  font-size: 27px;
  color: rgb(246, 0, 0);
  transition: 500ms;
  z-index: 2000;
  cursor: pointer;
}

#hamburguer:hover {
  top: 10px;
  color: rgb(23, 38, 253);
  font-size: 30px;
}

@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";
/* ---------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- */

#sidebar {
  width: 210px;
  position: fixed;
  top: 0;
  left: 0px;
  height: 100vh;
  z-index: 3000;
  background: rgba(255, 255, 255, 1);
  color: rgb(14, 14, 14);
  transition: all 0.3s;
  overflow-y: none;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);

}

#sidebardesativ {
  width: 210px;
  position: fixed;
  top: 0;
  left: -250px;
  height: 100vh;
  z-index: 3000;
  background: rgba(255, 255, 255, 0);
  color: rgb(8, 8, 8);
   transition: all 0.3s;
  overflow-y: none;
  //box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
}

.item-sidebar {
  background-color: rgb(169, 209, 142);
  height: 40px;
  width: 100%;
  padding-top: 8px;
  padding-left: 20px;
  cursor: pointer;
}

.item-sidebar a {
  color: $teste;
  text-decoration: none;
  margin-top: 30px;
}

.logo{
  width: 150px;
  margin-left: -14px;
}

.logo-bnp{
  width: 170px;
  position: absolute;
  bottom: 10px;

}


#close{

font-size: 30px;
margin-left: 20px;
color:rgb(171, 91, 153)

}

/* .overlay {
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 800;
} */
</style>
