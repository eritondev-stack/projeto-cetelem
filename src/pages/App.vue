<template>
  <v-app id="inspire">
    <v-navigation-drawer :width="230" v-model="drawer" color="rgb(221,228,238)" app>
      <div class="titulo">
        <div>
          <v-img id="flutuar" src="@/assets/layout_set_logo.png" max-width="160px" class="ml-9"></v-img>
          <!--   <v-img id="flutuar" src="" max-width="160px" class="ml-9"></v-img> -->
        </div>
      </div>

      <ul class="mt-5">
        <router-link tag="li" class="links" to="/dashboard">
          <v-icon medium color="white" class="mr-3 pb-1 pl-2">mdi-poll</v-icon>Dashbord
        </router-link>
<!--         <router-link tag="li" class="links" to="/">
          <v-icon medium color="white" class="mr-3 pb-1 pl-2">mdi-account-alert</v-icon>User Profile
        </router-link> -->
        <router-link tag="li" class="links" to="/upload">
          <v-icon medium color="white" class="mr-3 pb-1 pl-2">mdi-upload-outline</v-icon>Upload
        </router-link>
        <router-link tag="li" class="links" to="/">
          <v-icon medium color="white" class="mr-3 pb-1 pl-2">mdi-upload-outline</v-icon>Sair
        </router-link>

        <div>
          <v-img id="flutuar2" src="@/assets/bnp.png" max-width="160px" class="ml-9"></v-img>
          <!--   <v-img id="flutuar" src="" max-width="160px" class="ml-9"></v-img> -->
        </div>
      </ul>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" class="grey lighten-5" elevation="0">
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
    </v-app-bar>

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
    drawer: true
  })
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
</style>
