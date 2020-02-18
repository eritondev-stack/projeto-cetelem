<template>
<body>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-7 col-md-12 mt-3">
        <div class="card">
          <div class="card-body d-flex justify-content-center">
            <div @click="selectGerente('nuno parente')" class="avatar-container">
              <img
                class="avatar-img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/User_with_smile.svg/600px-User_with_smile.svg.png"
              />
              <div :class="classNuno">Nuno</div>
            </div>

            <div @click="selectGerente('bruno ceccarelli')" class="avatar-container ml-3">
              <img class="avatar-img" src="@/assets/bruno.png" />
              <div :class="classBruno">Bruno</div>
            </div>

            <div @click="selectGerente('helio junji takikawa')" class="avatar-container ml-3">
              <img class="avatar-img" src="@/assets/helio.png" />
              <div :class="classHelio">Helio</div>
            </div>

            <div
              @click="selectGerente('marcel felipe de carvalho sarmento')"
              class="avatar-container ml-3"
            >
              <img class="avatar-img" src="@/assets/marcel.png" />
              <div :class="classMarcel">Marcel</div>
            </div>

            <div @click="selectGerente('fabiano felix')" class="avatar-container ml-3">
              <img class="avatar-img" src="@/assets/Felix.png" />
              <div :class="classFelix">Felix</div>
            </div>

            <div @click="selectGerente('marcelo guedes')" class="avatar-container ml-3">
              <img class="avatar-img" src="@/assets/guedes.png" />
              <div :class="classGuedes">Guedes</div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-5 col-md-12 mt-3">
        <div class="card">
          <div class="card-body">
            <i class="fas fa-info fa-3x ml-2" style="color: rgb(0, 176, 90)"></i>
            <h4 class="d-inline ml-1 text-success">
              Resumo:
              <select
                class="ml-3"
                @change="onChangeAcao()"
                v-model="selectAcao"
                style="width: 200px; font-size: 13px;"
              >
                <option v-for="item in selectIdBudget" :key="item.ID_BUDGET">{{ item.ID_BUDGET }}</option>
              </select>
            </h4>

            <div class="mt-2">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-6">
                    <div class="resumo">
                      <div class="resumo-title">MTD</div>
                      <div class="resumo-real">
                        <strong>Real:</strong>
                        {{ totalMtd | formatoBr }}
                      </div>
                      <div v-if="(totalMtd - budgetMes) < 0" class="resumo-real text-primary">
                        <strong>Delta:</strong>
                        {{ totalMtd - budgetMes | formatoBr }}
                      </div>
                      <div v-else class="resumo-real text-danger">
                        <strong>Delta:</strong>
                        {{ totalMtd - budgetMes | formatoBr }}
                      </div>
                    </div>
                  </div>

                  <div class="col-6">
                    <div class="resumo2">
                      <div class="resumo-title">YTD</div>
                      <div class="resumo-real">
                        <strong>Real:</strong>
                        {{ totalYtd | formatoBr }}
                      </div>
                      <div v-if="(totalYtd - budgetAno) < 0" class="resumo-real text-primary">
                        <strong>Delta:</strong>
                        {{ totalYtd - budgetAno | formatoBr }}
                      </div>
                      <div v-else class="resumo-real text-danger">
                        <strong>Delta:</strong>
                        {{ totalYtd - budgetAno | formatoBr }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 
  
              <span> {{ totalYtd}}</span><span class="text-danger"> Delta: {{  totalYtd - budgetAno }}</span>-->
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6 col-md-6 mt-3">
        <div class="card" style="height: 250px">
          <div class="card-body">
            <div>
              <i class="fas fa-heart fa-3x" style="color: rgb(0, 176, 90)"></i>
              <h4 class="d-inline ml-1 text-success">Ilon</h4>
            </div>

             <div class="d-flex justify-content-center" v-if="ilonGerente.length == 0"></div>

            <div class="d-flex justify-content-center" v-else-if="ilonGerente.length == 1">
                  <table class="tabela-fornecedor">
                <tbody>
                  <tr class="row-resumo">
                    <td style="width: 600px">{{ ilonGerente[0].ILON }}</td>
                    <td style="width: 100">{{ ilonGerente[0].REAL | formatoBr }}</td>
                  </tr>

                </tbody>
              </table>
            </div>

            <div class="d-flex justify-content-center" v-else-if="ilonGerente.length == 2">
              <table class="tabela-fornecedor">
                <tbody>
                  <tr class="row-resumo">
                    <td style="width: 600px">{{ ilonGerente[0].ILON }}</td>
                    <td style="width: 100">{{ ilonGerente[0].REAL | formatoBr }}</td>
                  </tr>

                  <tr class="row-resumo2">
                    <td>{{ ilonGerente[1].ILON }}</td>
                    <td>{{ ilonGerente[1].REAL | formatoBr }}</td>
                  </tr>

                </tbody>
              </table>
            </div>
            <div class="d-flex justify-content-center" v-else-if="ilonGerente.length == 3">
                    <table class="tabela-fornecedor">
                <tbody>
                  <tr class="row-resumo">
                    <td style="width: 600px">{{ ilonGerente[0].ILON }}</td>
                    <td style="width: 100">{{ ilonGerente[0].REAL | formatoBr }}</td>
                  </tr>

                  <tr class="row-resumo2">
                    <td>{{ ilonGerente[1].ILON }}</td>
                    <td>{{ ilonGerente[1].REAL | formatoBr }}</td>
                  </tr>

                  <tr class="row-resumo">
                    <td>{{ ilonGerente[2].ILON }}</td>
                    <td>{{ ilonGerente[2].REAL | formatoBr }}</td>
                  </tr>

                </tbody>
              </table>
            </div>
            <div class="d-flex justify-content-center"  v-else-if="ilonGerente.length == 4">
              <table class="tabela-fornecedor">
                <tbody>
                  <tr class="row-resumo">
                    <td style="width: 600px">{{ ilonGerente[0].ILON }}</td>
                    <td style="width: 100">{{ ilonGerente[0].REAL | formatoBr }}</td>
                  </tr>

                  <tr class="row-resumo2">
                    <td>{{ ilonGerente[1].ILON }}</td>
                    <td>{{ ilonGerente[1].REAL | formatoBr }}</td>
                  </tr>

                  <tr class="row-resumo">
                    <td>{{ ilonGerente[2].ILON }}</td>
                    <td>{{ ilonGerente[2].REAL | formatoBr }}</td>
                  </tr>

 
                </tbody>
              </table>
            </div>


            <div class="d-flex justify-content-center" v-else-if="ilonGerente.length == 5">
              <table class="tabela-fornecedor">
                <tbody>
                  <tr class="row-resumo">
                    <td style="width: 600px">{{ ilonGerente[0].ILON }}</td>
                    <td style="width: 100">{{ ilonGerente[0].REAL | formatoBr }}</td>
                  </tr>

                  <tr class="row-resumo2">
                    <td>{{ ilonGerente[1].ILON }}</td>
                    <td>{{ ilonGerente[1].REAL | formatoBr }}</td>
                  </tr>

                  <tr class="row-resumo">
                    <td>{{ ilonGerente[2].ILON }}</td>
                    <td>{{ ilonGerente[2].REAL | formatoBr }}</td>
                  </tr>

                  <tr class="row-resumo2">
                    <td>{{ ilonGerente[3].ILON }}</td>
                    <td>{{ ilonGerente[3].REAL | formatoBr }}</td>
                  </tr>

                  <tr class="row-resumo">
                    <td>{{ ilonGerente[4].ILON }}</td>
                    <td>{{ ilonGerente[4].REAL | formatoBr }}</td>
                  </tr>

                </tbody>
              </table>
            </div>
            <div class="d-flex justify-content-center" v-else-if="ilonGerente.length > 5">

              <table class="tabela-fornecedor">
                <tbody>
                  <tr class="row-resumo">
                    <td style="width: 600px">{{ ilonGerente[0].ILON}}</td>
                    <td style="width: 100">{{ ilonGerente[0].REAL | formatoBr }}</td>
                  </tr>

                  <tr class="row-resumo2">
                    <td>{{ ilonGerente[1].ILON }}</td>
                    <td>{{ ilonGerente[1].REAL | formatoBr }}</td>
                  </tr>

                  <tr class="row-resumo">
                    <td>{{ ilonGerente[2].ILON }}</td>
                    <td>{{ ilonGerente[2].REAL | formatoBr }}</td>
                  </tr>

                  <tr class="row-resumo2">
                    <td>{{ ilonGerente[3].ILON }}</td>
                    <td>{{ ilonGerente[3].REAL | formatoBr }}</td>
                  </tr>

                  <tr class="row-resumo">
                    <td>{{ ilonGerente[4].ILON }}</td>
                    <td>{{ ilonGerente[4].REAL | formatoBr }}</td>
                  </tr>

                  <tr class="row-resumo2">
                    <td>Outros</td>
                    <td>{{ somaOutrosIlon | formatoBr }}</td>
                  </tr>
                </tbody>
              </table>

            </div>

          </div>
        </div>
      </div>

      <div class="col-lg-6 col-md-6 mt-3">
        <div class="card" style="height: 250px">
          <div class="card-body">
            <div>
              <i class="fas fa-search-plus fa-3x" style="color: rgb(0, 176, 90)"></i>
              <h4 class="d-inline ml-1 text-success">Maiores Fornecedores</h4>
            </div>

            <div class="d-flex justify-content-center" v-if="fornecedorGerente.length == 0"></div>

            <div class="d-flex justify-content-center" v-else-if="fornecedorGerente.length == 1">
                  <table class="tabela-fornecedor">
                <tbody>
                  <tr class="row-resumo">
                    <td style="width: 600px">{{ fornecedorGerente[0].FORNECEDOR }}</td>
                    <td style="width: 100">{{ fornecedorGerente[0].REAL | formatoBr }}</td>
                  </tr>

                </tbody>
              </table>
            </div>

            <div class="d-flex justify-content-center" v-else-if="fornecedorGerente.length == 2">
              <table class="tabela-fornecedor">
                <tbody>
                  <tr class="row-resumo">
                    <td style="width: 600px">{{ fornecedorGerente[0].FORNECEDOR }}</td>
                    <td style="width: 100">{{ fornecedorGerente[0].REAL | formatoBr }}</td>
                  </tr>

                  <tr class="row-resumo2">
                    <td>{{ fornecedorGerente[1].FORNECEDOR }}</td>
                    <td>{{ fornecedorGerente[1].REAL | formatoBr }}</td>
                  </tr>

                </tbody>
              </table>
            </div>
            <div class="d-flex justify-content-center" v-else-if="fornecedorGerente.length == 3">
                    <table class="tabela-fornecedor">
                <tbody>
                  <tr class="row-resumo">
                    <td style="width: 600px">{{ fornecedorGerente[0].FORNECEDOR }}</td>
                    <td style="width: 100">{{ fornecedorGerente[0].REAL | formatoBr }}</td>
                  </tr>

                  <tr class="row-resumo2">
                    <td>{{ fornecedorGerente[1].FORNECEDOR }}</td>
                    <td>{{ fornecedorGerente[1].REAL | formatoBr }}</td>
                  </tr>

                  <tr class="row-resumo">
                    <td>{{ fornecedorGerente[2].FORNECEDOR }}</td>
                    <td>{{ fornecedorGerente[2].REAL | formatoBr }}</td>
                  </tr>

                </tbody>
              </table>
            </div>
            <div class="d-flex justify-content-center"  v-else-if="fornecedorGerente.length == 4">
              <table class="tabela-fornecedor">
                <tbody>
                  <tr class="row-resumo">
                    <td style="width: 600px">{{ fornecedorGerente[0].FORNECEDOR }}</td>
                    <td style="width: 100">{{ fornecedorGerente[0].REAL | formatoBr }}</td>
                  </tr>

                  <tr class="row-resumo2">
                    <td>{{ fornecedorGerente[1].FORNECEDOR }}</td>
                    <td>{{ fornecedorGerente[1].REAL | formatoBr }}</td>
                  </tr>

                  <tr class="row-resumo">
                    <td>{{ fornecedorGerente[2].FORNECEDOR }}</td>
                    <td>{{ fornecedorGerente[2].REAL | formatoBr }}</td>
                  </tr>

 
                </tbody>
              </table>
            </div>


            <div class="d-flex justify-content-center" v-else-if="fornecedorGerente.length == 5">
              <table class="tabela-fornecedor">
                <tbody>
                  <tr class="row-resumo">
                    <td style="width: 600px">{{ fornecedorGerente[0].FORNECEDOR }}</td>
                    <td style="width: 100">{{ fornecedorGerente[0].REAL | formatoBr }}</td>
                  </tr>

                  <tr class="row-resumo2">
                    <td>{{ fornecedorGerente[1].FORNECEDOR }}</td>
                    <td>{{ fornecedorGerente[1].REAL | formatoBr }}</td>
                  </tr>

                  <tr class="row-resumo">
                    <td>{{ fornecedorGerente[2].FORNECEDOR }}</td>
                    <td>{{ fornecedorGerente[2].REAL | formatoBr }}</td>
                  </tr>

                  <tr class="row-resumo2">
                    <td>{{ fornecedorGerente[3].FORNECEDOR }}</td>
                    <td>{{ fornecedorGerente[3].REAL | formatoBr }}</td>
                  </tr>

                  <tr class="row-resumo">
                    <td>{{ fornecedorGerente[4].FORNECEDOR }}</td>
                    <td>{{ fornecedorGerente[4].REAL | formatoBr }}</td>
                  </tr>

                </tbody>
              </table>
            </div>
            <div class="d-flex justify-content-center" v-else-if="fornecedorGerente.length > 5">

              <table class="tabela-fornecedor">
                <tbody>
                  <tr class="row-resumo">
                    <td style="width: 600px">{{ fornecedorGerente[0].FORNECEDOR }}</td>
                    <td style="width: 100">{{ fornecedorGerente[0].REAL | formatoBr }}</td>
                  </tr>

                  <tr class="row-resumo2">
                    <td>{{ fornecedorGerente[1].FORNECEDOR }}</td>
                    <td>{{ fornecedorGerente[1].REAL | formatoBr }}</td>
                  </tr>

                  <tr class="row-resumo">
                    <td>{{ fornecedorGerente[2].FORNECEDOR }}</td>
                    <td>{{ fornecedorGerente[2].REAL | formatoBr }}</td>
                  </tr>

                  <tr class="row-resumo2">
                    <td>{{ fornecedorGerente[3].FORNECEDOR }}</td>
                    <td>{{ fornecedorGerente[3].REAL | formatoBr }}</td>
                  </tr>

                  <tr class="row-resumo">
                    <td>{{ fornecedorGerente[4].FORNECEDOR }}</td>
                    <td>{{ fornecedorGerente[4].REAL | formatoBr }}</td>
                  </tr>

                  <tr class="row-resumo2">
                    <td>Outros</td>
                    <td>{{ somaOutros | formatoBr }}</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>
    
    
    <div class="col-lg-4 col-md-6 mt-3">
      <div class="card">
        <div class="card-body">
          <i class="fas fa-superscript fa-3x" style="color: rgb(0, 176, 90)"></i>
          <h4 class="d-inline ml-1 text-success">Main View</h4>
          <div>
            <div class="col-6">
              <div class="mt-4">
                <apexchart type="bar" width="400" :options="optionsITOrca" :series="seriesITOrca" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-4 col-md-6 mt-3">
      <div class="card" style="height: 360px;">
        <div class="card-body">
          <i class="fas fa-walking fa-3x" style="color: rgb(0, 176, 90)"></i>
          <h4 class="d-inline ml-1 text-success">Previsão Landing</h4>
          <div>
            <div class="col-6">
              <div>
                <apexchart
                  type="line"
                  width="400"
                  :options="previsaoLadingOptions"
                  :series="seriesLanding"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div class="col-lg-4 col-md-6 mt-3">
      <div class="card" style="height: 360px;">
        <div class="card-body">
          <i class="fas fa-box-open fa-3x" style="color: rgb(0, 176, 90)"></i>
          <span class="ml-3">
            <h4 class="d-inline ml-1" style="color: #0098C0 ">Opex</h4>

            <h4 class="d-inline ml-1">---</h4>

            <h4 class="d-inline ml-1" style="color: #3EAE63 ">Depreciação</h4>
          </span>

          <div>
            <div class="col-12">
              <div class="mt-4">
                <div class="row">
                  <div class="col-6">
                    <div class="depre-opex">{{ depreOpexGerente[0].OPEX | formatoBr }}</div>
                  </div>

                  <div class="col-6">
                    <div class="depre-opex2">{{ depreOpexGerente[0].DEPRE | formatoBr }}</div>
                  </div>
                </div>
                <div class="d-flex justify-content-center">
                  <apexchart
                    type="donut"                
                    :options="optionOpexDepre"
                    :series="seriesOpexDepre"
                  />
                </div>
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
      nome: "Eriton",
      selectAcao: "TI Actu I",
      classNuno: "avatar-name",
      classBruno: "avatar-name",
      classMarcel: "avatar-name",
      classFelix: "avatar-name",
      classGuedes: "avatar-name",
      classHelio: "avatar-name",
      real: [],
      budget: [],
      totalYtd: 0,
      totalMtd: 0,
      gerenteAtual: null,
      mesRef: null,
      selectIdBudget: null,
      budgetMes: 0,
      budgetAno: 0,
      fornecedores: [],
      fornecedorGerente: [],
      somaOutros: 0,
      ilon: [],
      ilonGerente: [],
      somaOutrosIlon: 0,
      previsaoLanding: [],
      previsaoLadingOptions: {
        chart: {
          width: 380,
          toolbar: {
            show: false
          }
        },
        grid: {
          show: false
        },
        legend: {
          position: "top",
          show: true,
          offsetY: 0
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                show: false
              }
            }
          }
        ],
        yaxis: {
          show: false
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [5, 5],
          curve: "straight",
          dashArray: [0, 4]
        },
        xaxis: {
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
        }
      },
      seriesLanding: [
        {
          name: "Real",
          data: [30, 33, 37, 24, 33, 26, 0, 0, 0, 0, 0, 0]
        },
        {
          name: "Previsão",
          data: [30, 33, 37, 24, 33, 26, 21, 20, 20, 20, 20, 20]
        }
      ],
      depreOpex: [],
      depreOpexGerente: [{ DEPRE: 0, OPEX: 0 }],
      seriesITOrca: [
        {
          name: "Real",
          data: [2, 3, 4, 5, 6, 6, 3, 23, 2, 3, 12, 1]
        },
        {
          name: "Negative",
          data: [12, 3, 2, 3, 12, 3, 31, 12, 2, 12, 12, 1]
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
      optionOpexDepre: {
        labels: ["Depreciação", "Opex"],
        colors: ["#3EAE63", "#0098C0"],

        chart: {
          width: 380,
          type: "donut"
        },
        dataLabels: {
          enabled: false
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                show: false
              }
            }
          }
        ],
        legend: {
          show: false
        }
      },
      seriesOpexDepre: [1, 0]
    };
  },
  methods: {
    onChangeAcao() {
      this.acaoSelect();
    },
    acaoSelect() {
      var arrayFiltradoMes = this.budget.filter(dados => {
        return (
          dados.MES == this.mesRef &&
          dados.GERENTE == this.gerenteAtual &&
          dados.ID_BUDGET == this.selectAcao
        );
      });

      var arrayFiltradoAno = this.budget.filter(dados => {
        return (
          dados.MES <= this.mesRef &&
          dados.GERENTE == this.gerenteAtual &&
          dados.ID_BUDGET == this.selectAcao
        );
      });

      var totalAno = 0;
      arrayFiltradoAno.forEach(dados => {
        totalAno += dados.BUDGET;
      });

      arrayFiltradoMes.forEach(item => (this.budgetMes = item.BUDGET));

      this.budgetAno = totalAno;
    },

    selectGerente(gerente) {
      this.classBruno = "avatar-name";
      this.classNuno = "avatar-name";
      this.classHelio = "avatar-name";
      this.classMarcel = "avatar-name";
      this.classGuedes = "avatar-name";
      this.classFelix = "avatar-name";

      if (gerente == "bruno ceccarelli") {
        this.classBruno = "avatar-selecionado";
      } else if (gerente == "nuno parente") {
        this.classNuno = "avatar-selecionado";
      } else if (gerente == "helio junji takikawa") {
        this.classHelio = "avatar-selecionado";
      } else if (gerente == "fabiano felix") {
        this.classFelix = "avatar-selecionado";
      } else if (gerente == "marcel felipe de carvalho sarmento") {
        this.classMarcel = "avatar-selecionado";
      } else if (gerente == "marcelo guedes") {
        this.classGuedes = "avatar-selecionado";
      }

      this.gerenteAtual = gerente;
      this.somaPorGerente(gerente);
      this.mdtPorGerente(gerente);
      this.fornecedoresPorGerente(gerente);
      this.ilonPorGerente(gerente);
      this.selecionarDepreOpexGerente(gerente);
      this.previsaoLandingGerente(gerente);
      this.acaoSelect();
    },
    previsaoLandingGerente(gerente) {
      const realGerente = this.previsaoLanding.resultado_real.filter(
        item => item.GERENTE == gerente
      );
      console.log(realGerente);

      const mediaGerente = this.previsaoLanding.resultado_media.filter(
        item => item.GERENTE == gerente
      );
      console.log(mediaGerente[0]);

      var jan = realGerente[0] == undefined ? 0 : realGerente[0].DEB;
      var fev = realGerente[1] == undefined ? m0 : realGerente[1].DEB;
      var mar = realGerente[2] == undefined ? 0 : realGerente[2].DEB;
      var abr = realGerente[3] == undefined ? 0 : realGerente[3].DEB;
      var mai = realGerente[4] == undefined ? 0 : realGerente[4].DEB;
      var jun = realGerente[5] == undefined ? 0 : realGerente[5].DEB;
      var jul = realGerente[6] == undefined ? 0 : realGerente[6].DEB;
      var ago = realGerente[7] == undefined ? 0 : realGerente[7].DEB;
      var set = realGerente[8] == undefined ? 0 : realGerente[8].DEB;
      var out = realGerente[9] == undefined ? 0 : realGerente[9].DEB;
      var nov = realGerente[10] == undefined ? 0 : realGerente[10].DEB;
      var dez = realGerente[11] == undefined ? 0 : realGerente[11].DEB;

      var janp =
        realGerente[0] == undefined
          ? mediaGerente[0].MEDIA
          : realGerente[0].DEB;
      var fevp =
        realGerente[1] == undefined
          ? mediaGerente[0].MEDIA
          : realGerente[1].DEB;
      var marp =
        realGerente[2] == undefined
          ? mediaGerente[0].MEDIA
          : realGerente[2].DEB;
      var abrp =
        realGerente[3] == undefined
          ? mediaGerente[0].MEDIA
          : realGerente[3].DEB;
      var maip =
        realGerente[4] == undefined
          ? mediaGerente[0].MEDIA
          : realGerente[4].DEB;
      var junp =
        realGerente[5] == undefined
          ? mediaGerente[0].MEDIA
          : realGerente[5].DEB;
      var julp =
        realGerente[6] == undefined
          ? mediaGerente[0].MEDIA
          : realGerente[6].DEB;
      var agop =
        realGerente[7] == undefined
          ? mediaGerente[0].MEDIA
          : realGerente[7].DEB;
      var setp =
        realGerente[8] == undefined
          ? mediaGerente[0].MEDIA
          : realGerente[8].DEB;
      var outp =
        realGerente[9] == undefined
          ? mediaGerente[0].MEDIA
          : realGerente[9].DEB;
      var novp =
        realGerente[10] == undefined
          ? mediaGerente[0].MEDIA
          : realGerente[10].DEB;
      var dezp =
        realGerente[11] == undefined
          ? mediaGerente[0].MEDIA
          : realGerente[11].DEB;

      this.seriesLanding = [
        {
          name: "Real",
          data: [jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez]
        },
        {
          name: "Previsão",
          data: [
            janp,
            fevp,
            marp,
            abrp,
            maip,
            junp,
            julp,
            agop,
            setp,
            outp,
            novp,
            dezp
          ]
        }
      ];

      console.log(set);
    },
    fornecedoresPorGerente(gerente) {
      const valor = this.fornecedores.filter(valor => {
        return valor.GERENTE == gerente;
      });

      this.fornecedorGerente = valor;

      this.somaOutros = 0;
      for (let i = 0; i < valor.length; i++) {
        if (i < 5) {
          continue;
        } else {
          this.somaOutros += valor[i].REAL;
        }
      }
    },
    ilonPorGerente(gerente) {
      const valor = this.ilon.filter(valor => {
        return valor.GERENTE == gerente;
      });

      this.ilonGerente = valor;

      this.somaOutrosIlon = 0;
      for (let i = 0; i < valor.length; i++) {
        if (i < 5) {
          continue;
        } else {
          this.somaOutrosIlon += valor[i].REAL;
        }
      }
    },
    selecionarDepreOpexGerente(gerente) {
      this.depreOpexGerente = this.depreOpex.filter(
        item => item.GERENTE == gerente
      );

      this.seriesOpexDepre = [
        this.depreOpexGerente[0].DEPRE,
        this.depreOpexGerente[0].OPEX
      ];
    },
    somaPorGerente(gerente) {
      this.totalYtd = 0;

      var gerenteFuncao = gerente || "nuno parente";

      this.real.forEach(item => {
        if (item.GERENTE == gerenteFuncao) {
          this.totalYtd += item.REAL;
        }
      });
    },
    mdtPorGerente(gerente) {
      var gerenteFuncao = gerente || "nuno parente";
      var arraySelecionado = [];

      for (let i = 0; i < this.real.length; i++) {
        var novoArray = this.real.filter(dados => {
          return dados.MES == this.real[i].MES;
        });

        if (novoArray.length > 5) {
          arraySelecionado = novoArray;

          break;
        }
      }

      var gerente1 = arraySelecionado.filter(dados => {
        return dados.GERENTE == gerenteFuncao;
      });

      this.totalMtd = gerente1[0].REAL;
      this.mesRef = gerente1[0].MES;
    }
  },
  created() {
    console.log("Cheguei created");
    this.$http.get("http://127.0.0.1:5000/vermaisorcamento").then(response => {
      this.real = response.data.real;
      this.selectIdBudget = response.data.select;
      this.budget = response.data.budget;
      this.somaPorGerente();
      this.mdtPorGerente();

      this.selectAcao = response.data.select[0].ID_BUDGET;
    });

    this.$http
      .get("http://127.0.0.1:5000/vermaisorcamento/fornecedores")
      .then(dados => {
        this.fornecedores = dados.data.real;
      });

    this.$http
      .get("http://127.0.0.1:5000/vermaisorcamento/ilon")
      .then(dados => {
        this.ilon = dados.data.ilon;
      });

    this.$http
      .get("http://127.0.0.1:5000/vermaisorcamento/depreopex")
      .then(dados => {
        this.depreOpex = dados.data.depre_opex;
      });

    this.$http
      .get("http://127.0.0.1:5000/vermaisorcamento/previsaolanding")
      .then(dados => {
        this.previsaoLanding = dados.data;
        console.log(this.previsaoLanding);
      });

    setTimeout(() => {
      this.selectGerente("nuno parente");
    }, 3000);
  }
};
</script>

<style lang="scss" scoped>
$verde1: rgb(0, 176, 90);
$verde1t: rgba(0, 176, 90, 0.7);
$verde2: rgb(146, 208, 80);
$verde3: #a9d18e;
$roxo: #ab5b99;
$azul: rgb(131, 205, 232);
$teste: #ffffff;

@import url("https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap");

body {
  background-color: rgb(246, 246, 246);
  height: 100%;
  font-family: "Roboto Slab", serif;
  color: rgb(80, 80, 80);
}

.avatar-container {
  height: 100px;
  width: 100px;
  background-color: rgb(236, 235, 235);
  position: relative;
  float: left;
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.avatar-img {
  width: 70px;
  height: 70px;
  border-radius: 50px;
  margin-top: 5px;
  align-self: center;
  justify-self: center;
}

.avatar-name {
  text-align: center;
  width: 100%;
  background-color: rgba(0, 176, 90, 1);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  color: white;
  transition: all 0.3s;
}
.avatar-name:hover {
  text-align: center;
  width: 100%;
  background-color: $roxo;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  color: white;
}

.avatar-selecionado {
  text-align: center;
  width: 100%;
  background-color: $roxo;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  color: white;
}

.box-capacity {
  height: 160px;
}

.text-information {
  color: rgb(93, 93, 93);
}
.resumo {
  width: 100%;
  height: 90px;
  background-color: #ffffff;
  border-left: 10px solid rgb(0, 176, 90);
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
}
.resumo2 {
  width: 100%;
  height: 90px;
  background-color: #ffffff;
  border-left: 10px solid #40e0d0;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
}

.resumo-title {
  text-align: center;
  border-bottom: 1px solid #b1b1b1;
  width: 80%;
  margin: 0px auto 10px auto;
  color: $roxo;
  font-weight: bold;
}

.resumo-real {
  width: 80%;
  margin: 3px auto 0px auto;
}

.card-body {
  padding: 10px;
}

.depre-opex {
  background-color: #0098c0;
  text-align: center;
  margin-bottom: 12px;
  color: white;
  border-radius: 30px;
}

.depre-opex2 {
  background-color: #3eae63;
  text-align: center;
  margin-bottom: 12px;
  color: white;
  border-radius: 30px;
}

.row-resumo{
 border: 1px solid rgb(192, 192, 192);
  background-color: #f6f6f6 ;
}

.row-resumo2{

  border: 1px solid rgb(192, 192, 192);
  background-color: #ffffff ;
}


.tabela-fornecedor{
  margin-top: 13px;
  height: 150px; 
  width: 700px; 
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);

}

</style>