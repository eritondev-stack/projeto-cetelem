<template>
  <div class="back d-flex justify-content-center align-items-center">
    <div class="d-flex justify-content-center align-items-center">
      <div class="box-main">
        <div class="container">
          <div class="row">
            <div
              class="col-md-6 d-flex justify-content-center align-items-center"
              style="width: 100%; height: 100%;"
            >
              <div class="working recuo"></div>
            </div>

            <div
              class="col-md-6 d-flex justify-content-center align-items-center"
              style="width: 100vw;"
            >
              <div class="box-login">
                <div class="centralizar">
                  <img
                    src="../assets/layout_set_logo.png"
                    style="width: 200px; margin-top: 50px; margin-left: 10px;"
                    class="img-fluid"
                    alt
                  />
                </div>
                <input
                  v-model="user"
                  class="form-control mt-4 login"
                  type="text"
                  placeholder="User"
                />
                <input
                  v-model="password"
                  class="form-control mt-4 login"
                  type="password"
                  placeholder="Password"
                />

                <div class="centralizar">
                  <button
                    @click="irHome()"
                    :disabled="hab"
                    class="btn btn-sm btn-cetelem mt-4"
                  >{{ statusbtn }}</button>
                </div>

                <div class="centralizar mt-4">
                  <div class="erro">{{ msgErro }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  data() {
    return {
      statusbtn: "Entrar",
      user: null,
      password: null,
      msgErro: null,
      hab: false
    };
  },
  methods: {
    irHome() {
      this.hab = true;
      this.statusbtn = "Carregando";

      const usuario = {
        id: this.user,
        senha: this.password
      };

      console.log(usuario);

      if (usuario.id == "admin" && usuario.senha == "admin2019") {
        setTimeout(() => {
          this.hab = false;
          this.statusbtn = "Entrar";

          this.$router.push("/dashboard");
        }, 2000);
      } else {
        setTimeout(() => {
          this.hab = false;
          this.statusbtn = "Entrar";

          this.msgErro = "Usúario ou senha inválidos";
        }, 2000);

        setTimeout(() => {
          this.msgErro = "";
        }, 7000);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Varela+Round&display=swap");

@media screen and (max-width: 1024px) {
  div.box-main {
    width: 85vw;
    background: rgb(255, 255, 255);
    border-radius: 25px;
    -webkit-box-shadow: 0px 0px 18px -6px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 18px -6px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 18px -6px rgba(0, 0, 0, 0.75);
    transition: 300ms;
  }
}

@media screen and (max-width: 750px) {
  div.recuo {
    display: none;
  }

  div.box-login {
    width: 95%;
    height: 40vh;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 32px;
  }
}
.erro {
  color: rgb(212, 55, 55);
  width: 80%;
  margin: 0 auto;
}

.centralizar {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}

.box-main {
  width: 60vw;
  min-height: 390px;
  background: rgb(255, 255, 255);
  border-radius: 25px;
  -webkit-box-shadow: 0px 0px 18px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 18px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 18px -6px rgba(0, 0, 0, 0.75);
  transition: 300ms;
}

.working {
  background-image: url("../assets/working.svg");
  background-size: cover;
  width: 100%;
  height: 85vh;
  position: relative;
  top: 30px;
}

.box-login {
  width: 95%;
  height: 60vh;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 32px;
}

.back {
  // background: url("../assets/back.png");
  width: 100vw;
  height: 100vh;
  background: cover;
  background: rgb(146, 208, 80);
  padding: 30px;
  //background: linear-gradient(356deg, rgba(171, 91, 153,1)0%, rgb(255,255,255) 100%);
}

.form-control.login {
  width: 80%;
  margin: 0 auto;
}

.btn-cetelem {
  color: #fff;
  background-color: rgb(0, 176, 90);
  border-color: rgb(0, 176, 90);
  font-weight: bold;
  letter-spacing: 0.05em;
  border-radius: 7px;
  width: 80%;
}

.btn-cetelem:hover,
.btn-cetelem:active,
.btn-cetelem:focus {
  background: rgb(0, 176, 90);
  color: #ffffff;
  border-color: rgb(0, 176, 90);
}

.form-control.login:focus {
  box-shadow: 0 0 0 0;
  outline: 0;
}

.btn:focus,
.btn:active,
.btn:hover {
  box-shadow: 0 0 0 0;
  outline: 0;
}

.btn-outline {
  color: #4fbfa8;
  background-color: #ffffff;
  border-color: #4fbfa8;
  font-weight: bold;
  border-radius: 7px;
}

.btn-outline:hover,
.btn-outline:active,
.btn-outline:focus {
  background: #4fbfa8;
  color: #ffffff;
  border-color: #4fbfa8;
}

.btn-colour-1 {
  color: #fff;
  background-color: #004e64;
  border-color: #004e64;
  font-weight: bold;
  letter-spacing: 0.05em;
  border-radius: 7px;
}

.btn-colour-1:hover,
.btn-colour-1:active,
.btn-colour-1:focus {
  background: #003d4f;
  color: #ffffff;
  border-color: #003d4f;
}

.input-custom {
  width: 80%;
  margin: 0 auto;
}

.error {
  font-family: "Varela Round", sans-serif;
}
</style>
