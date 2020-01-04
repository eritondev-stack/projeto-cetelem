<template>
  <v-app id="inspire">


  <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home-city</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home-city</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  <v-icon :id="toggleidCss" color="error" @click.stop="toggleMenu()">mdi-menu</v-icon>
   
<!--     <v-navigation-drawer :width="230" v-model="drawer" color="rgb(221,228,238)" app>
      <div class="titulo">
        <div>
          <v-img id="flutuar" src="@/assets/layout_set_logo.png" max-width="160px" class="ml-9"></v-img>
         
        </div>
      </div>

      <ul class="mt-5">
        <router-link tag="li" class="links" to="/dashboard">
          <v-icon medium color="white" class="mr-3 pb-1 pl-2">mdi-poll</v-icon>Dashbord
        </router-link>
        <router-link tag="li" class="links" to="/upload">
          <v-icon medium color="white" class="mr-3 pb-1 pl-2">mdi-upload-outline</v-icon>Upload
        </router-link>
        <router-link tag="li" class="links" to="/">
          <v-icon medium color="white" class="mr-3 pb-1 pl-2">mdi-upload-outline</v-icon>Sair
        </router-link>

        <div>
          <v-img id="flutuar2" src="@/assets/bnp.png" max-width="160px" class="ml-9"></v-img>      
        </div>
      </ul>
    </v-navigation-drawer> -->

<!--     <v-app-bar app color="indigo" class="grey lighten-5" elevation="0">
      <v-app-bar-nav-icon class="d-md-none" @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <span class="font-c">Dashboard</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <template>
        <v-btn icon>
          <v-badge color="error">
            <template v-slot:badge>0</template>
            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>
    </v-app-bar> -->

    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </v-app>
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
      next();
    } else {
      console.log("Não autenticado");
      next({
        path: "/"
      });
    }
  },
  data: () => ({
    drawer: false,
    toggleidCss: 'hamburger',
    items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' },
        ],
  }),
 methods:{
    toggleMenu(){
      this.drawer = !this.drawer

      if( this.drawer == false){
        this.toggleidCss = 'hamburger'
      }else{
        this.toggleidCss = 'hamburger1'
      }

    }
 }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");

$verde1: rgb(0, 176, 90);
$verde1t: rgba(0, 176, 90, 0.7);
$verde2: rgb(146, 208, 80);
$verde3: #a9d18e;
$roxo: rgb(171, 91, 153);
$azul: rgb(131, 205, 232);
$teste: #ffffff;

.font-c {
  color: #546e7a;
}

.titulo {
  height: 64px;
  background: white;
  border-bottom: 2px solid rgb(240, 239, 239);
}

.links {
  font-family: "Open Sans", sans-serif;
  text-decoration: none;
  height: 40px;
  cursor: pointer;
  list-style-type: none;
  border-radius: 20px;
  background: $verde1t;
  margin-right: 15px;
  margin-top: 5px;
  padding-top: 7px;
  color: white;
  transition: all 0.7s;
  font-size: 15px;
}

.links:hover {
  background: $verde1;
}

.router-link-exact-active {
  font-family: "Open Sans", sans-serif;
  text-decoration: none;
  height: 40px;
  cursor: pointer;
  list-style-type: none;
  border-radius: 20px;
  background: $roxo;
  margin-right: 15px;
  margin-top: 5px;
  padding-top: 7px;
  color: white;
  font-size: 15px;
}

.router-link-exact-active:hover {
  background: $roxo;
}

#flutuar {
  position: fixed;
  top: 8px;
}

#flutuar2 {
  position: fixed;
  bottom: 8px;
  left: 0;
}

#hamburger{

position: absolute;
top: 0;
left: 15px;
z-index: 1000;
}

#hamburger1{

position: absolute;
top: 0;
left: 230px;
z-index: 1000;
}
</style>
