<template>
  <div id="app" class="back">
    <v-app id="inspire">
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs8 sm4 md3>
              <v-card class="elevation-0" ref="login">
                <v-toolbar color="rgb(169,209,142)">
                  <v-toolbar-title class="white--text">Entry</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      color="success"
                      name="login"
                      label="Login"
                      type="text"
                    ></v-text-field>
                    <v-text-field
                      color="success"
                      label="Password"
                      id="password"
                      type="password"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    @click="irHome()"
                    :disabled="close"
                    color="rgb(0,176,90)"
                    class="white--text"
                    block
                    >{{ statusbtn }}</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
 
  data() {
    return {
      statusbtn: "Login",
      close: false
    };
  },
  methods: {
    irHome() {
      this.$router.push("/home");
      this.statusbtn = "Login";
      this.close = false;
    }
  },
  created() {}
};
</script>

<style lang="scss">
.back {
  //background-image: url(https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260);
  background-image: url("../assets/fundo_login2.png");
  background-size: cover;
  filter: contrast(120%);
}
#inspire {
  background: none;
}
</style>
