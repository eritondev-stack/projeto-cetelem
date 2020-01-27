<template>
  <content>
    <div class="container">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6 mt-5">
      <!-- <div class="col-lg-6 col-md-12 mt-3"> -->
        <div class="card">
          <div class="card-body">
            <div>
               <i class="fas fa-upload fa-3x" style="color: rgb(0, 176, 90)"></i>
              <h4 class="d-inline ml-3 text-success">Upload</h4>
      
        <v-col cols="12" md="6">
          <form>
            <table>
                
                <tr>
                  <td colspan="3">Upload IT Capacity</td>
                  <td><button type="button">Upload</button></td>
                  
                </tr>
                <tr>
                  <td colspan="3">Upload IT Governance</td>
                  <td><button type="button">Upload</button></td>
                  
                </tr>
                <tr>
                  <td colspan="3">Upload IT Orçamento</td>
                  <td><button type="button">Upload</button></td>
                  
                </tr>
                <tr>
                  <td colspan="3">Upload Horas JIRA</td>
                  <td><button type="button">Upload</button></td>
                  
                </tr>
                <tr>
                  <td colspan="3">Upload ITPP</td>
                  <td><button type="button">Upload</button></td>
                  
                </tr>
                <tr>
                  <td colspan="3">Upload Estimativa de Projeto</td>
                  <td><button type="button">Upload</button></td>
                  
                </tr>
              </table>
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
          </div>
        </div>
    </div>
      </div>
      </div>  
      </div>
    
    
  </content>
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