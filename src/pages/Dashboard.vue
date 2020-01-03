<template>
  <v-content>
    <v-container>
      <v-row align="center" justify="center">
        <v-col md="7" sm="12" xs="12">
          <v-card class="mt-4 mx-auto" height="460px">
            <v-sheet
              class="v-sheet--offset mx-auto"
              color="cyan"
              elevation="12"
              max-width="calc(100% - 32px)"
            >
              <div class="card-titulo">Provas aprovadas</div>
            </v-sheet>

            <v-card-text class="pt-0">
              <div class="title font-weight-light mb-2"></div>
              <div class="subheading font-weight-light grey--text">
                <GChart
                  :settings="{ packages: ['geochart'], mapsApiKey: 'AIzaSyDGPlV-Cw-p_WFVDj-CTd7QSph-lyVQIPE' }"
                  type="GeoChart"
                  :data="chartData"
                  :options="chartOptions"
                />
              </div>
              <v-divider class="my-2"></v-divider>
              <v-icon class="mr-2" small></v-icon>
              <span class="caption grey--text font-weight-light"></span>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col md="5" align="center">
          <v-card class="mt-4 mx-auto" height="460px">
            <v-sheet
              class="v-sheet--offset mx-auto"
              color="#a9d18e"
              elevation="12"
              max-width="calc(100% - 32px)"
            >
              <div class="card-titulo">ITGOV</div>
            </v-sheet>

            <v-card-text class="pt-0">
              <div class="title font-weight-light mb-2"></div>
              <div class="subheading font-weight-light grey--text">
                <apexchart type="pie" width="380" :options="chartOptions2" :series="series" />
              </div>
              <v-divider class="my-2"></v-divider>

              <div>
                <v-btn
                  small
                  @click="dialog = !dialog"
                  color="#EF5350"
                  width="90"
                  class="mt-5 ml-2"
                  dark
                >Pendente</v-btn>
                <v-btn small color="#03A9F4" width="90" class="mt-5 ml-3" dark>Ok</v-btn>
                <v-btn small color="#E0E0E0" width="90" class="mt-5 ml-3" light>Enviada</v-btn>
                <v-btn small color="#64DD17" width="90" class="mt-5 ml-3" dark>Aprovada</v-btn>
              </div>

              <v-icon class="mr-2" small></v-icon>
              <span class="caption grey--text font-weight-light"></span>
            </v-card-text>
          </v-card>
        </v-col>

        <v-dialog v-model="dialog" max-width="500">
          <v-card>
            <v-card-title  class="headline red--text mb-5">Pendentes</v-card-title>
            <v-card-text>
                <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="error" text @click="dialog = false">Fechar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import { GChart } from "vue-google-charts";

export default {
  props: {
    source: String
  },
  components: {
    GChart
  },
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
  data() {
    return {
      chartData: [],
      chartOptions: null,

      dialog: false,
       headers: [
          {
            text: 'Colaboradores',
            align: 'left',
            sortable: false,
            value: 'name',
          }
          ],

        desserts: [
          {
            name: 'Marcelo Santos',
     

          },
          {
            name: 'Carlos Da Costa',

 
          },
          {
            name: 'Casemiro de Olavo',
     
 
          },
          {
            name: 'João Almeida',

   
          },
          {
            name: 'Marcos Sateles',
       

          },
          {
            name: 'Victon Santana',
   

          },
          {
            name: 'Daniel Camargo',
      

          },
          {
            name: 'Erivan Farias',
     

          },
          {
            name: 'Donald Francisco',
         

          },
          {
            name: 'Gilberdo Dos Santos',
    

          },
        ],


      series: [44, 55, 13, 43],
      chartOptions2: {
        labels: ["Ok", "Aprovada", "Pendente", "Enviada"],
        colors: ["#03A9F4", "#64DD17", "#EF5350", "#E0E0E0"],
        legend: {
          position: "top",
          show: false
        }
      }
    };
  },
  methods: {
    mapa() {}
  },
  created() {},
  mounted() {
    this.chartData = [
      ["Country", "Aprovadas"],
      ["Germany", 1],
      ["United States", 3],
      ["Brazil", 4],
      ["Canada", 5],
      ["France", 6]
    ];

    this.chartOptions = {
      displayMode: "markers",
      colorAxis: { colors: ['blue', "yellow", "red" ] },
      backgroundColor: "#ffffff"
    };

    setInterval(() => {
      this.mapa();
    }, 2000);
  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");

$teste: #ffffff;

.v-sheet--offset {
  top: -24px;
  position: relative;
}

.card-titulo {
  font-family: "Open Sans", sans-serif;
  color: rgb(255, 255, 255);
  height: 50px;
  align-items: center;
  text-align: center;
  padding-top: 10px;
  font-size: 20px;
}
</style>
