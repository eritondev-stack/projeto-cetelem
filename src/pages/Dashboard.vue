<template>
  <div class="container-fluid back">
    <div class="row">
      <div class="col-12"></div>
      <i class="fas fa-bars hamburguer"></i>
      <div class="col-lg-4 col-md-6">
        <div class="box2 d-flex justify-content-center">
          <div class="box-title">ITGov</div>
          <apexchart
            class="box-content"
            type="pie"
            width="320"
            :options="chartOptions2"
            :series="series"
          />
        </div>
      </div>

      <div class="col-lg-4 col-md-6">
        <div class="box2 d-flex justify-content-center">
          <div class="box-title">Orçamento</div>
          <apexchart type="bar" width="430" :options="optionsITOrca" :series="seriesITOrca" />
        </div>
      </div>

      <div class="col-lg-4 col-md-6">
        <div class="box2 d-flex justify-content-center">
          <div class="box-title">ITCapacity</div>
          <apexchart
            type="area"
            :width="tamanho"
            :options="optionsITCapacity"
            :series="seriesITCapacity"
          />
        </div>
      </div>

      <div class="col-lg-4 col-md-6">
        <div class="box2 d-flex justify-content-center">
          <div class="box-title">Projetos</div>
          <apexchart
            type="bar"
            width="410"
            :options="optionsITProjetos"
            :series="seriesITProjetos"
          />
        </div>
      </div>

      <div class="col-lg-4 col-md-6">
        <div class="box2 d-flex justify-content-center">
          <div class="box-title-cal" style="background-color: rgb(0, 176, 90);">Calendarização</div>
          <div class="mt-4" style="width:100%; height:90%; overflow: auto;">
            <table>
              <thead>
                <th style="background-color: rgb(171, 91, 153);">Plataforma</th>
                <th style="background-color: rgb(171, 91, 153);">Capacity</th>
                <th style="background-color: rgb(171, 91, 153);">Requerido</th>
                <th style="background-color: rgb(171, 91, 153);" colspan="2">Delta</th>
              </thead>

              <tbody>
                <tr>
                  <td>Cobol</td>
                  <td>500</td>
                  <td>600</td>
                  <td>-100</td>
                  <td class="retirar">
                    <i class="fas fa-check-circle text-success"></i>
                  </td>
                </tr>
                <tr>
                  <td>Cobol</td>
                  <td>500</td>
                  <td>600</td>
                  <td>-100</td>
                  <td class="retirar">
                    <i class="fas fa-times text-danger"></i>
                  </td>
                </tr>
                <tr>
                  <td>Cobol</td>
                  <td>500</td>
                  <td>600</td>
                  <td>-100</td>
                  <td class="retirar">
                    <i class="fas fa-times text-danger"></i>
                  </td>
                </tr>
                <tr>
                  <td>Cobol</td>
                  <td>500</td>
                  <td>600</td>
                  <td>-100</td>
                  <td class="retirar">
                    <i class="fas fa-times text-danger"></i>
                  </td>
                </tr>
                <tr>
                  <td>Cobol</td>
                  <td>500</td>
                  <td>600</td>
                  <td>-100</td>
                  <td class="retirar">
                    <i class="fas fa-times text-danger"></i>
                  </td>
                </tr>
                <tr>
                  <td>Cobol</td>
                  <td>500</td>
                  <td>600</td>
                  <td>-100</td>
                  <td class="retirar">
                    <i class="fas fa-times text-danger"></i>
                  </td>
                </tr>
                <tr>
                  <td>Cobol</td>
                  <td>500</td>
                  <td>600</td>
                  <td>-100</td>
                  <td class="retirar">
                    <i class="fas fa-times text-danger"></i>
                  </td>
                </tr>
                <tr>
                  <td>Cobol</td>
                  <td>500</td>
                  <td>600</td>
                  <td>-100</td>
                  <td class="retirar">
                    <i class="fas fa-times text-danger"></i>
                  </td>
                </tr>
                <tr>
                  <td>Cobol</td>
                  <td>500</td>
                  <td>600</td>
                  <td>-100</td>
                  <td class="retirar">
                    <i class="fas fa-times text-danger"></i>
                  </td>
                </tr>
                <tr>
                  <td>Cobol</td>
                  <td>500</td>
                  <td>600</td>
                  <td>-100</td>
                  <td class="retirar">
                    <i class="fas fa-times text-danger"></i>
                  </td>
                </tr>
                <tr>
                  <td>Cobol</td>
                  <td>500</td>
                  <td>600</td>
                  <td>-100</td>
                  <td class="retirar">
                    <i class="fas fa-times text-danger"></i>
                  </td>
                </tr>
                <tr>
                  <td>Cobol</td>
                  <td>500</td>
                  <td>600</td>
                  <td>-100</td>
                  <td class="retirar">
                    <i class="fas fa-times text-danger"></i>
                  </td>
                </tr>
                <tr>
                  <td>Cobol</td>
                  <td>500</td>
                  <td>600</td>
                  <td>-100</td>
                  <td class="retirar">
                    <i class="fas fa-times text-danger"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6">
        <div v-show="true">
          <!-- <h1>Mostrou</h1>
          <button @click="mudar()" class="btn btn-primary btn-sm">Mudar</button>-->
          <div class="box2 d-flex justify-content-center">
            <div class="box-title-cal" style="background-color: rgb(0, 176, 90);">Aprovadas</div>
            <div class="mt-4" style="width:100%; height:90%; overflow: auto;">
              <table>
                <thead>
                  <th style="background-color: rgb(171, 91, 153);" colspan="2">Pais</th>
                  <th style="background-color: rgb(171, 91, 153);">Quantidade</th>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <img width="30" src="https://www.countryflags.io/fr/shiny/64.png" />
                    </td>
                    <td class="retirar">França</td>
                    <td>600</td>
                  </tr>

                  <tr>
                    <td>
                      <img width="30" src="https://www.countryflags.io/br/shiny/64.png" />
                    </td>
                    <td class="retirar">Brasil</td>
                    <td>600</td>
                  </tr>

                  <tr>
                    <td>
                      <img width="30" src="https://www.countryflags.io/us/shiny/64.png" />
                    </td>
                    <td class="retirar">Estados Unidos</td>
                    <td>600</td>
                  </tr>

                  <tr>
                    <td>
                      <img width="30" src="https://www.countryflags.io/es/shiny/64.png" />
                    </td>
                    <td class="retirar">Espanha</td>
                    <td>600</td>
                  </tr>

                  <tr>
                    <td>
                      <img width="30" src="https://www.countryflags.io/za/shiny/64.png" />
                    </td>
                    <td class="retirar">Africa do Sul</td>
                    <td>600</td>
                  </tr>

                  <tr>
                    <td>
                      <img width="30" src="https://www.countryflags.io/gb/shiny/64.png" />
                    </td>
                    <td class="retirar">Reino Unido</td>
                    <td>600</td>
                  </tr>
                  <tr>
                    <td>
                      <img width="30" src="https://www.countryflags.io/fr/shiny/64.png" />
                    </td>
                    <td class="retirar">França</td>
                    <td>600</td>
                  </tr>

                  <tr>
                    <td>
                      <img width="30" src="https://www.countryflags.io/br/shiny/64.png" />
                    </td>
                    <td class="retirar">Brasil</td>
                    <td>600</td>
                  </tr>

                  <tr>
                    <td>
                      <img width="30" src="https://www.countryflags.io/us/shiny/64.png" />
                    </td>
                    <td class="retirar">Estados Unidos</td>
                    <td>600</td>
                  </tr>

                  <tr>
                    <td>
                      <img width="30" src="https://www.countryflags.io/es/shiny/64.png" />
                    </td>
                    <td class="retirar">Espanha</td>
                    <td>600</td>
                  </tr>

                  <tr>
                    <td>
                      <img width="30" src="https://www.countryflags.io/za/shiny/64.png" />
                    </td>
                    <td class="retirar">Africa do Sul</td>
                    <td>600</td>
                  </tr>

                  <tr>
                    <td>
                      <img width="30" src="https://www.countryflags.io/gb/shiny/64.png" />
                    </td>
                    <td class="retirar">Reino Unido</td>
                    <td>600</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!--<GChart
                  :settings="{ packages: ['geochart'], mapsApiKey: 'AIzaSyDGPlV-Cw-p_WFVDj-CTd7QSph-lyVQIPE' }"
                  type="GeoChart"
                  :data="chartData"
                  :options="chartOptions"
                  width="300px"
            />-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { GChart } from "vue-google-charts";

export default {
  props: {
    source: String
  },
  components: {
    GChart
  },

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
      rejeitado: 0,
      aprovado: 0,
      nao_enviado: 0,
      pendente: 0,

      mostrar: false,
      chartData: [],
      chartOptions: null,
      tamanho: 410,

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

      series: [1, 1, 1, 1],
      chartOptions2: {
        labels: ["Aprov", "Não Env", "Pendente", "Rejeitado"],
        colors: ["#03A9F4", "#64DD17", "#EF5350", "#E0E0E0"],
        legend: {
          position: "top",
          show: true,
          offsetY: 15
        },
        chart: {
          offsetY: 15
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
        yaxis: {
          show: false
        },
        legend: {
          position: "top",
          show: true,
          offsetY: 35
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
          show: true,
          offsetY: 35
        },
        grid: {
          show: false
        },
        yaxis: {
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
          },
          offsetY: 15
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
          show: true,
          offsetY: 35
        },
        grid: {
          show: false
        },
        yaxis: {
          show: false
        },
        chart: {
          toolbar: {
            show: false
          },

          offsetY: 15
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
          categories: ["Jan", "Fev", "Mar"]
        },
        yaxis: {
          title: {
            text: undefined
          }
        },
        legend: {
          position: "top",
          show: true
        },
        fill: {
          opacity: 1
        }
      }
    };
  },
  methods: {
    mudar() {
      this.tamanho = 300;
    },
    myEventHandler(e) {
      if (e.target.innerWidth < 489) {
        console.log("Menor que 489");
      }
    }
  },
  created() {
    setTimeout(() => {
      this.mostrar = true;
    }, 4000);

    this.$http
      .get("http://localhost:5000/resumo/itgov")
      .then(response => {
        console.log(response.data);
        response.data.forEach(element => {
          if (element.status == "REJEITADO") {
            this.rejeitado = element.total;
          } else if (element.status == "APROVADO") {
            this.aprovado = element.total;
          } else if (element.status == "NÃO ENVIADO") {
            this.nao_enviado = element.total;
          } else if (element.status == "PENDENTE") {
            this.pendente = element.total;
          }

          this.series = [
            this.aprovado,
            this.nao_enviado,
            this.pendente,
            this.rejeitado
          ];
        });
      })
      .catch(error => {
        console.log(error);
      });

    window.addEventListener("resize", this.myEventHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
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
  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");

$verde1: rgb(0, 176, 90);
$verde1t: rgba(0, 176, 90, 0.7);
$verde2: rgb(146, 208, 80);
$verde3: #a9d18e;
$roxo: #ab5b99;
$azul: rgb(131, 205, 232);
$teste: #ffffff;

table {
  border-collapse: collapse;
  border: 1px solid rgb(141, 139, 139);
  text-align: center;
  font-size: 18px;
  font-family: Calibri, Helvetica, sans-serif;
  width: 98%;
  margin-left: 4px;
  margin-top: 3px;
}

th {
  background: rgb(0, 176, 90);
  color: white;
  text-align: center;
  border: 1px solid rgb(255, 255, 255);
  padding: 0 9px;
}

td {
  border: 1px solid rgb(235, 235, 235);
  /* Evitar quebra de linhas tabela */
  white-space: nowrap;
  padding: 0 9px;
  color: rgb(87, 85, 85);
  font-size: 17px;
}
.retirar {
  border-left: 2px solid rgb(255, 255, 255);
}

.box-main {
  background-color: white;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 18px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 18px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 18px -6px rgba(0, 0, 0, 0.75);
  height: 250px;
}
.box-title {
  font-size: 20px;
  background-color: $verde2;
  width: 100%;
  border-radius: 10px;
  top: -4px;
  position: absolute;
  text-align: center;
  -webkit-box-shadow: 0px 0px 18px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 18px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 18px -6px rgba(0, 0, 0, 0.75);
  color: white;
}

.box-title-cal {
  font-size: 20px;
  background-color: $verde2;
  width: 95%;
  border-radius: 10px;
  top: 6px;
  position: absolute;
  text-align: center;
  -webkit-box-shadow: 0px 0px 18px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 18px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 18px -6px rgba(0, 0, 0, 0.75);
  color: white;
}
.box-content {
  margin-top: 13px;
}

.box2 {
  background-color: white;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 18px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 18px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 18px -6px rgba(0, 0, 0, 0.75);
  height: 275px;
}

.back {
  background-color: #dbdbdb;
}

.hamburguer {
  position: fixed;
  top: 2px;
  left: 24px;
  font-size: 27px;
  color: rgb(23, 38, 253);
  transition: 500ms;
  z-index: 1002;
}

.hamburguer:hover {
  top: 0px;
  color: rgb(23, 38, 253);
  font-size: 30px;
}
</style>


