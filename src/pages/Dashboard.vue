<template>
  <v-content>
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col md="4" sm="12" xs="12" align="center">
          <v-card class="mt-4 mx-auto alinhar2" height="270px">
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
                <apexchart type="pie" width="300" :options="chartOptions2" :series="series" />
              </div>

              <!--   
              <v-btn small @click="dialog = !dialog" color="#EF5350" width="80" class="ml-2" dark>Pendente</v-btn>-->
            </v-card-text>
          </v-card>
        </v-col>

        <v-col md="4" sm="12" xs="12" align="center">
          <v-card class="mt-4 mx-auto alinhar2" height="270px">
            <v-sheet
              class="v-sheet--offset mx-auto"
              color="#a9d18e"
              elevation="12"
              max-width="calc(100% - 32px)"
            >
              <div class="card-titulo">ORÇAMENTO</div>
            </v-sheet>

            <v-card-text class="pt-0">
              <div class="title font-weight-light mb-2"></div>
              <div class="subheading font-weight-light grey--text">
                <apexchart type="bar" width="100%" :options="optionsITOrca" :series="seriesITOrca" />
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col md="4" sm="12" xs="12" align="center">
          <v-card class="mt-4 mx-auto alinhar2" height="270px">
            <v-sheet
              class="v-sheet--offset mx-auto"
              color="#a9d18e"
              elevation="12"
              max-width="calc(100% - 32px)"
            >
              <div class="card-titulo">ITCAPACITY</div>
            </v-sheet>

            <v-card-text class="pt-0">
              <div class="title font-weight-light mb-2"></div>
              <div class="subheading font-weight-light grey--text">
                <apexchart
                  type="area"
                  width="100%"
                  :options="optionsITCapacity"
                  :series="seriesITCapacity"
                />
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col md="4" sm="12" xs="12" align="center">
          <v-card class="mt-4 mx-auto alinhar2" height="270px">
            <v-sheet
              class="v-sheet--offset mx-auto"
              color="#a9d18e"
              elevation="12"
              max-width="calc(100% - 32px)"
            >
              <div class="card-titulo">PROJETO</div>
            </v-sheet>

            <v-card-text class="pt-0">
              <div class="title font-weight-light mb-2"></div>
              <div class="subheading font-weight-light grey--text">
                <apexchart
                  type="bar"
                  width="100%"
                  :options="optionsITProjetos"
                  :series="seriesITProjetos"
                />
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col md="4" sm="12" xs="12" align="center">
          <v-card class="mt-4 mx-auto alinhar2" height="270px">
            <v-sheet
              class="v-sheet--offset mx-auto"
              color="#a9d18e"
              elevation="12"
              max-width="calc(100% - 32px)"
            >
              <div class="card-titulo">Calendarização</div>
            </v-sheet>

            <v-card-text class="pt-0">
              <div class="title font-weight-light mb-2"></div>
              <div class="overflow-y-auto subheading font-weight-light grey--text">

             <v-container style="height: 230px;" class="overflow-y-auto">
                  <v-row align="center" justify="center">
                      <table>
                 
                        <thead>
                          <th>Plataforma</th>
                          <th>Capacity</th>
                          <th>Requerido</th>
                          <th colspan="2">Delta</th>
                        </thead>
                   
                        <tbody>
                          <tr>
                            <td>Cobol</td>
                            <td>500</td>
                            <td>600</td>
                            <td>-100 </td>
                            <td class="retirar"> <v-icon small color="error">mdi-brightness-1</v-icon></td>
                          </tr>
                                                   <tr>
                            <td>Cobol</td>
                            <td>500</td>
                            <td>600</td>
                            <td>-100</td>
                             <td class="retirar"> <v-icon small color="error">mdi-brightness-1</v-icon></td>
                          </tr>
                                                   <tr>
                            <td>Cobol</td>
                            <td>500</td>
                            <td>600</td>
                            <td>-100</td>
                             <td class="retirar"> <v-icon small color="error">mdi-brightness-1</v-icon></td>
                          </tr>
                                                   <tr>
                            <td>Cobol</td>
                            <td>500</td>
                            <td>600</td>
                            <td>-100</td>
                             <td class="retirar"> <v-icon small color="error">mdi-brightness-1</v-icon></td>
                          </tr>
                                                   <tr>
                            <td>Cobol</td>
                            <td>500</td>
                            <td>600</td>
                            <td>-100</td>
                             <td class="retirar"> <v-icon small color="error">mdi-brightness-1</v-icon></td>
                          </tr>
                                                   <tr>
                            <td>Cobol</td>
                            <td>500</td>
                            <td>600</td>
                            <td>-100</td>
                            <td class="retirar"> <v-icon small color="success">mdi-brightness-1</v-icon></td>
                          </tr>
                                                   <tr>
                            <td>Cobol</td>
                            <td>500</td>
                            <td>600</td>
                            <td>-100</td>
                             <td class="retirar"> <v-icon small color="success">mdi-brightness-1</v-icon></td>
                          </tr>
                                                   <tr>
                            <td>Cobol</td>
                            <td>500</td>
                            <td>600</td>
                            <td>-100</td>
                             <td class="retirar"> <v-icon small color="success">mdi-brightness-1</v-icon></td>
                          </tr>
                                                   <tr>
                            <td>Cobol</td>
                            <td>500</td>
                            <td>600</td>
                            <td>-100</td>
                             <td class="retirar"> <v-icon small color="success">mdi-brightness-1</v-icon></td>
                          </tr>
                                                   <tr>
                            <td>Cobol</td>
                            <td>500</td>
                            <td>600</td>
                            <td>-100</td>
                             <td class="retirar"> <v-icon small color="success">mdi-brightness-1</v-icon></td>
                          </tr>
                                                   <tr>
                            <td>Cobol</td>
                            <td>500</td>
                            <td>600</td>
                            <td>-100</td>
                             <td class="retirar"> <v-icon small color="success">mdi-brightness-1</v-icon></td>
                          </tr>
                                                   <tr>
                            <td>Cobol</td>
                            <td>500</td>
                            <td>600</td>
                            <td>-100</td>
                             <td class="retirar"> <v-icon small color="success">mdi-brightness-1</v-icon></td>
                          </tr>
                                                   <tr>
                            <td>Cobol</td>
                            <td>500</td>
                            <td>600</td>
                            <td>-100</td>
                             <td class="retirar"> <v-icon small color="success">mdi-brightness-1</v-icon></td>
                          </tr>
                        </tbody>
                      </table>
                  </v-row>
                </v-container> 
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col md="4" sm="12" xs="12">
          <v-card class="mt-0 mx-auto alinhar" height="270px">
            <v-sheet
              class="v-sheet--offset mx-auto"
              color="cyan"
              elevation="12"
              max-width="calc(100% - 32px)"
            >
              <div class="card-titulo">Provas aprovadas</div>
            </v-sheet>

            <v-card-text class="subir">
              <div class="title font-weight-light"></div>
              <div class="subheading font-weight-light grey--text">
                <GChart
                  :settings="{ packages: ['geochart'], mapsApiKey: 'AIzaSyDGPlV-Cw-p_WFVDj-CTd7QSph-lyVQIPE' }"
                  type="GeoChart"
                  :data="chartData"
                  :options="chartOptions"
                />
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Grafico -->
        <v-col md="4" sm="12" xs="12" align="center"></v-col>

        <v-dialog v-model="dialog" max-width="500">
          <v-card>
            <v-card-title class="headline red--text mb-5">Pendentes</v-card-title>
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
          text: "Colaboradores",
          align: "left",
          sortable: false,
          value: "name"
        }
      ],

      desserts: [
        {
          name: "Marcelo Santos"
        },
        {
          name: "Carlos Da Costa"
        },
        {
          name: "Casemiro de Olavo"
        },
        {
          name: "João Almeida"
        },
        {
          name: "Marcos Sateles"
        },
        {
          name: "Victon Santana"
        },
        {
          name: "Daniel Camargo"
        },
        {
          name: "Erivan Farias"
        },
        {
          name: "Donald Francisco"
        },
        {
          name: "Gilberdo Dos Santos"
        }
      ],

      series: [44, 55, 13, 43],
      chartOptions2: {
        labels: ["Ok", "Aprovada", "Pendente", "Enviada"],
        colors: ["#03A9F4", "#64DD17", "#EF5350", "#E0E0E0"],
        legend: {
          position: "top",
          show: true
        }
      },

      seriesITOrca: [
        {
          name: "Cons",
          data: [1.7, 1.7, 1.7, 1.7, 1.7, 1.7, 1.7, 1.7, 1.7, 1.7, 1.7, 1.7]
        },
        {
          name: "Deb",
          data: [1.7, 1.7, 1.7, 1.7, 1.7, 1.7, 1.7, 1.7, 1.7, 1.7, 1.7, 1.7]
        },
        {
          name: "Credit",
          data: [1.7, 1.7, 1.7, 1.7, 1.7, 1.7, 1.7, 1.7, 1.7, 1.7, 1.7, 1.7]
        }
      ],

      optionsITOrca: {
        colors: ["#03A9F4", "#64DD17", "#EF5350"],
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
          toolbar: {
            show: false
          }
        },
        grid: {
          show: false
        },
        plotOptions: {
          bar: {
            horizontal: false
          }
        },
        xaxis: {
          type: "string",
          categories: [
            "Jan",
            "Fev",
            "Mar",
            "Abr",
            "Mai",
            "Jun",
            "Jul",
            "Ago",
            "Set",
            "Out",
            "Nov",
            "Dez"
          ]
        },
        legend: {
          position: "top",
          show: true
        },
        fill: {
          opacity: 1
        }
      },
      seriesITCapacity: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: "series2",
          data: [11, 32, 45, 32, 34, 52, 41]
        }
      ],
      optionsITCapacity: {
        xaxis: {
          type: "string",
          categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul"]
        },
        legend: {
          position: "top",
          show: true
        },
        grid: {
          show: false
        },
        plotOptions: {
          bar: {
            horizontal: false
          }
        },
        chart: {
          toolbar: {
            show: false
          }
        }
      },
      seriesITProjetos: [
        {
          name: "Net Profit",
          data: [44, 55]
        },
        {
          name: "Revenue",
          data: [76, 85]
        },
        {
          name: "Free Cash Flow",
          data: [35, 41]
        }
      ],
      optionsITProjetos: {
        labels: ["Man Days", "R$"],
        colors: ["#03A9F4", "#64DD17", "#7B1FA2"],
        legend: {
          position: "top",
          show: true
        },
        grid: {
          show: false
        },
        chart: {
          toolbar: {
            show: false
          }
        }
      },
           seriesCalen: [
        {
          name: "Cons",
          data: [1.7, 1.7, 1.7]
        },
        {
          name: "Deb",
          data: [1.7, 1.7, 1.7]
        },
        {
          name: "Credit",
          data: [1.7, 1.7, 1.7]
        }
      ],

      optionsCalen: {
        colors: ["#03A9F4", "#64DD17", "#EF5350"],
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
          toolbar: {
            show: false
          }
        },
        grid: {
          show: true
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        xaxis: {
          type: "string",
          categories: [
            "Jan",
            "Fev",
            "Mar",

            
          ]
        },
        yaxis: {
          title: {
            text: undefined
          },
        },
        legend: {
          position: "top",
          show: true
        },
        fill: {
          opacity: 1
        }
      },
      
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
      colorAxis: { colors: ["blue", "yellow", "red"] },
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
  top: -8px;
  position: relative;
  z-index: 2;
}

.card-titulo {
  font-family: "Open Sans", sans-serif;
  color: rgb(255, 255, 255);
  height: 30px;
  align-items: center;
  text-align: center;
  font-size: 20px;
}

.alinhar {
  top: -6px;
}

.alinhar2 {
  top: -14px;
}

.subir {
  position: relative;
  top: -45px;
  z-index: 0;
}

.roll {
  width: 100%;
  border: solid red 2px;
  overflow: auto;
  height: calc(100vh - 116px);
}

table{

    border-collapse: collapse;
    border: 1px solid  rgb(141, 139, 139);
    text-align: center;
    font-size:18px;
    font-family: Calibri, Helvetica, sans-serif;
    width: 400px;
    margin-right: 4px;
   margin-top: -7px;
}

th{

    background: rgb(0, 176, 90);
    color: white;
    text-align: center;
    border: 1px solid rgb(255, 255, 255);
    padding:0 9px;
}

 td{

    border: 1px solid rgb(235, 235, 235);
    /* Evitar quebra de linhas tabela */
    white-space: nowrap;
    padding:0 9px;
    color:rgb(87, 85, 85);
    font-size: 17px;
}
.retirar{
   border-left: 2px solid rgb(255, 255, 255);
 
}

</style>


