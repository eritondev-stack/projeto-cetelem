<template>
  <v-content>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="6">
          <form>
          <v-file-input v-model="file" name="image" class="mt-5" label="File input"></v-file-input>
    <v-progress-linear
      v-model="percentual"
      height="17"
      reactive
      dark
      color="success"
    >
      <strong>{{ percentual }}%</strong>
    </v-progress-linear>
          </form>
          <v-btn :disabled="desabiltado" class="mt-3" @click="importarArquivo()" color="primary" block>Realizar Upload</v-btn>
        </v-col>
        <v-col cols="12" md="6"></v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  /* eslint-disable */
  data() {
    return {
      file: null,
      percentual: 0,
      desabiltado: false
    };
  },
  methods: {
    importarArquivo() {

    this.desabiltado = true

     var formData = new FormData();

     formData.append("image", this.file, this.file.name);

     console.log(formData);


       const config = {
          onUploadProgress: function(progressEvent) {
          var percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total

            
          );

          this.percentual = percentCompleted

          if(this.percentual == 100){
            this.desabiltado = false
          }
          console.log(this.percentual)
        }.bind(this),
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }

      this.$http
        .post(
          "https://api.imgbb.com/1/upload?key=0b3f4c75a254a32a43d5c379f41aff81",
          formData,
          config
        )
        .then(response => {
          console.log(response.data.data);
        })
        .catch(error => {
          console.log(error);
        });

      
    }
  }
};
</script>

<style scoped>
</style>