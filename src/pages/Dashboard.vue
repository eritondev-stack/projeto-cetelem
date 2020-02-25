<template>
  <div class="back">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 mt-4"></div>
        <div class="d-flex justify-content-center align-items-center flex-wrap">
          <div class="col-lg-4 col-md-6 mt-3">
            <div class="box-title-cal2">ITGOV</div>

            <div class="box2 d-flex justify-content-center">
              <div v-if="itgovstatus" style="width: 100%; height: 100%;">
                <div class="ph-item mt-5">
                  <div class="ph-col-12">
                    <div class="ph-row">
                      <div class="ph-col-6 big"></div>
                      <div class="ph-col-4 empty big"></div>
                      <div class="ph-col-2 big"></div>
                      <div class="ph-col-4"></div>
                      <div class="ph-col-8 empty"></div>
                      <div class="ph-col-6"></div>
                      <div class="ph-col-6 empty"></div>
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>
                    </div>
                  </div>
                </div>
              </div>
              <apexchart
                v-else
                class="box-content"
                type="pie"
                width="320"
                :options="chartOptions2"
                :series="series"
              />
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mt-3">
            <div
              class="box-title-cal2"
              @mouseenter="showVerMais('entrou')"
              @mouseleave="showVerMais('saiu')"
            >
              <span v-if="mostrarVerMaisOrca">Orçamento</span>

              <span v-else>
                <router-link tag="span" to="/vermaisorcamento">Ver mais</router-link>
              </span>
            </div>
            <div class="box2 d-flex justify-content-center">
              <div v-if="orcastatus" style="width: 100%; height: 100%;">
                <div class="ph-item mt-5">
                  <div class="ph-col-12">
                    <div class="ph-row">
                      <div class="ph-col-6 big"></div>
                      <div class="ph-col-4 empty big"></div>
                      <div class="ph-col-2 big"></div>
                      <div class="ph-col-4"></div>
                      <div class="ph-col-8 empty"></div>
                      <div class="ph-col-6"></div>
                      <div class="ph-col-6 empty"></div>
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>
                    </div>
                  </div>
                </div>
              </div>
              <apexchart
                v-else
                type="bar"
                :width="tamanhoOrca"
                :options="optionsITOrca"
                :series="seriesITOrca"
              />
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mt-3">
            <div class="box-title-cal2">ITCapacity</div>
            <div class="box2 d-flex justify-content-center">
              <div v-if="itcapacity" style="width: 100%; height: 100%;">
                <div class="ph-item mt-5">
                  <div class="ph-col-12">
                    <div class="ph-row">
                      <div class="ph-col-6 big"></div>
                      <div class="ph-col-4 empty big"></div>
                      <div class="ph-col-2 big"></div>
                      <div class="ph-col-4"></div>
                      <div class="ph-col-8 empty"></div>
                      <div class="ph-col-6"></div>
                      <div class="ph-col-6 empty"></div>
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>
                    </div>
                  </div>
                </div>
              </div>
              <apexchart
                v-else
                type="area"
                :width="tamanhoItCap"
                :options="optionsITCapacity"
                :series="seriesITCapacity"
              />
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mt-3">
            <div class="box-title-cal2">Projetos</div>
            <div class="box2 d-flex justify-content-center">
              <apexchart
                type="bar"
                width="410"
                :options="optionsITProjetos"
                :series="seriesITProjetos"
              />
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mt-3">
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

          <div class="col-lg-4 col-md-6 mt-3">
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
            </div>
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

  data() {
    return {
      rejeitado: 0,
      aprovado: 0,
      nao_enviado: 0,
      pendente: 0,
      itgovstatus: true,
      orcastatus: true,
      itcapacity: true,
      mostrarVerMaisOrca: true,

      mostrar: false,
      chartData: [],
      chartOptions: null,
      tamanhoOrca: 430,
      tamanhoItCap: 420,

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

      series: [0, 0, 0, 0],
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
          name: "Real",
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          name: "Negative",
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          name: "Budget",
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
      ],

      optionsITOrca: {
        colors: ["#03A9F4", "#EF5350", "#64DD17"],
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
          name: "Capacity",
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          name: "Horas trabalhadas",
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
      ],
      optionsITCapacity: {
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
    myEventHandler(e) {
      if (e.target.innerWidth < 489) {
        this.tamanhoOrca = 360;
        this.tamanhoItCap = 360;
        console.log("Menor que 489");
      } else {
        this.tamanhoOrca = 430;
        this.tamanhoItCap = 410;
      }
    },
    showVerMais(motivo) {
      console.log(motivo);
      console.log(event.target.innerText);

      this.mostrarVerMaisOrca = !this.mostrarVerMaisOrca;
    }
  },
  created() {
    this.$http
      .get("http://eriton.pythonanywhere.com/resumo/itgov")
      .then(response => {
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

          setTimeout(() => {
            this.series = [
              this.aprovado,
              this.nao_enviado,
              this.pendente,
              this.rejeitado
            ];
            this.itgovstatus = false;
          }, 1000);
        });
      })
      .catch(error => {
        console.log(error);
      });

    this.$http
      .get("http://eriton.pythonanywhere.com/resumo/orcamento")
      .then(response => {
        var meses = [];
        var saldo_lim = [];
        var saldo_pos = [];
        var saldo_neg = [];

        response.data.forEach(element => {
          meses.push(element.MES);
          saldo_lim.push(element.GASTO_LIMITADO);
          saldo_pos.push(element.SALDO_POSITIVO);
          saldo_neg.push(element.SALDO_NEGATIVO);
        });

        setTimeout(() => {
          this.seriesITOrca = [
            {
              name: "Real",
              data: saldo_lim
            },
            {
              name: "Negative",
              data: saldo_neg
            },
            {
              name: "Budget",
              data: saldo_pos
            }
          ];

          this.optionsITOrca = {
            colors: ["#03A9F4", "#EF5350", "#64DD17"],
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
                dataLabels: {
                  hideOverflowingLabels: false
                },
                horizontal: false
              }
            },
            xaxis: {
              type: "string",
              categories: meses
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
          };

          this.orcastatus = false;
        }, 1500);
      })
      .catch(error => {
        console.log(error);
      });

    this.$http
      .get("http://eriton.pythonanywhere.com/resumo/itcapacity")
      .then(response => {
        var meses = [];
        var ctb = [];
        var horas = [];

        response.data.forEach(element => {
          meses.push(element.MES);
          ctb.push(element.CTB);
          horas.push(element.HORAS);
        });

        console.log(ctb);

        setTimeout(() => {
          this.seriesITCapacity = [
            {
              name: "Capacity",
              data: ctb
            },
            {
              name: "Horas trabalhadas",
              data: horas
            }
          ];

          this.optionsITCapacity = {
            xaxis: {
              type: "string",
              categories: meses
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
          };

          this.itcapacity = false;
        }, 1500);
      })
      .catch(error => {
        console.log(error);
      });

    window.addEventListener("resize", this.myEventHandler);
    var width = document.body.clientWidth;
    if (width <= 375) {
      this.tamanhoItCap = 360;
      this.tamanhoOrca = 360;
    }
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

.back {
  background: url("../assets/back.png");
  height: 100vh;
  background: cover;
}

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
  top: 0px;
  position: absolute;
  text-align: center;
  -webkit-box-shadow: 0px 0px 18px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 18px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 18px -6px rgba(0, 0, 0, 0.75);
  color: white;
}

.box-title-cal2 {
  font-size: 20px;
  background-color: $verde2;
  width: 94%;
  border-radius: 10px;
  top: 0px;
  position: absolute;
  text-align: center;
  -webkit-box-shadow: 0px 0px 18px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 18px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 18px -6px rgba(0, 0, 0, 0.75);
  color: white;
  z-index: 10;
  cursor: pointer;
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

body {
  background-color: #dbdbdb;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>


