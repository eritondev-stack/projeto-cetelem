<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 d-flex justify-content-center">
    
       
                     <button @click="irHome()" class="btn btn-sm btn-colour-1 btn-block mt-3">Dashboard</button>
 
      </div>
    </div>
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
      this.$router.push("/dashboard");
      this.statusbtn = "Login";
      this.close = false;
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.back {
  //background-image: url(https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260);
  background-image: url("../assets/fundo_login2.png");
  background-size: cover;
  filter: contrast(120%);
}

.main-login{

  
  width: 400px;
  height: 400px;
  background-color: rgb(236, 236, 236);
  border-radius: 40px;
}

.form-control.form-control-sm:focus {
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

.input-custom{
  width: 80%;
  margin: 0 auto;

}

.login{
  position: absolute;
  top: 100px;
  width: 350px;
  margin-left: 26px;

}

</style>
