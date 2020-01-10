<template>
<body class="back">
    <div class="container">
    <div class="row no-gutters">
      <div class="col-md-6 d-none d-md-block">
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
              <input v-model="user" class="form-control mt-4 login" type="text" placeholder="User" />
              <input v-model="password" class="form-control mt-4 login" type="password" placeholder="Password" />
              <button @click="irHome()" :disabled="hab" class="btn btn-sm btn-cetelem mt-4">{{ statusbtn }}</button>
              <div class="text-danger mt-3 error">
<!--                 
              <div class="d-inline">
                 <i class="fas fa-exclamation-circle fa-2x"></i> 
              </div> -->
               <div class="d-inline">
                  <span style="padding-bottom: 30px;">{{ msgErro }}</span>
               </div>
              </div>
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
      statusbtn: "Entrar",
      user: null,
      password: null,
      msgErro: null,
      hab: false,

    };
  },
  methods: {
    irHome() {
  

    this.hab = true
    this.statusbtn = "Carregando"

  const usuario = {
    id: this.user,
    senha: this.password
  }

    this.$http
      .post("http://eriton.pythonanywhere.com/login", usuario)
      .then(response => {
      
       console.log(response.status)
       this.hab = false  
       this.statusbtn = "Entrar"

        if(response.status == 200){
          this.$router.push("/dashboard")
        }

      })
      .catch(error => {
        console.log(error);
        this.hab = false
        this.statusbtn = "Entrar"
        this.msgErro = "Usúario ou senha inválidos"
      });

      
    },
 
  },
  created() {
   
  }
};
</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css?family=Varela+Round&display=swap');


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

.error{
font-family: 'Varela Round', sans-serif;
}
</style>
