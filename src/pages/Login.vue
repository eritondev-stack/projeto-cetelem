<template>
<div>
      <h1>Login</h1>
      <button @click="irHome()">Ir</button>
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
