<template>
<body class="back">
    <div class="container">
    <div class="row no-gutters">
      <div class="col-md-6">
        <div class="box1">
          <img
            src="../assets/work1.gif"
            style="margin-top: 50px; margin-left: 10px;"
            class="img-fluid"
            alt
          />
        </div>
      </div>

      <div class="col-md-6">
        <div class="box2">
          <div class="main-login p-1">
            <div style="margin-top: 15px;">
              <img
                src="../assets/layout_set_logo.png"
                style="width: 200px; margin-top: 50px; margin-left: 10px;"
                class="img-fluid"
                alt
              />
              <input class="form-control mt-4 login" type="text" placeholder="User" />
              <input class="form-control mt-4 login" type="password" placeholder="Password" />
              <button @click="irHome()" class="btn btn-sm btn-cetelem mt-4">Entrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>

</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      statusbtn: "Login",
      close: false,
      box1: "box1",
      box2: "box2",
      imagem: true,
      imagem: false
    };
  },
  methods: {
    irHome() {
      this.$router.push("/dashboard");
      this.statusbtn = "Login";
      this.close = false;
    },
    changeCss() {
      setTimeout(() => {
        console.log("Passei por aqui");

        if (this.imagem) {
          this.box1 = "box1v";
          this.box2 = "box2v";
          this.imagem = false;
          this.imagem2 = true;
        } else {
          this.box1 = "box1";
          this.box2 = "box2";
          this.imagem = true;
          this.imagem2 = false;
        }

        this.changeCss();
      }, 5000);
    }
  },
  created() {
    this.changeCss();
  }
};
</script>

<style lang="scss" scoped>
.back{
  background: url('../assets/back.png');
  height: 100vh;
  background: cover;
}
.box1 {
  background-color: #f7f7f7;
  height: 450px;
  width: 100%;
  align-items: center;
  text-align: center;
  margin-top: 80px;
  border-top-left-radius: 62px;
  border-bottom-left-radius: 62px;
  transition: all 0s;

}

.box2 {
  padding-top: 1px;
  background: rgb(247, 247, 247);
  background: linear-gradient(
    90deg,
    rgba(247, 247, 247, 1) 0%,
    rgba(247, 247, 247, 1) 35%,
    rgba(247, 247, 247, 1) 100%
  );

  height: 450px;
  width: 100%;
  align-items: center;
  text-align: center;
  margin-top: 80px;
  border-top-right-radius: 62px;
  border-bottom-right-radius: 62px;
  transition: all 1s;
}



.main-login {
  background-color: white;
  height: 90%;
  width: 80%;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 62px;
-webkit-box-shadow: 6px 8px 8px -5px rgba(0,0,0,0.75);
-moz-box-shadow: 6px 8px 8px -5px rgba(0,0,0,0.75);
box-shadow: 6px 8px 8px -5px rgba(0,0,0,0.75);
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
</style>
