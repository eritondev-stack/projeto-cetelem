<template>
<body>
  <div class="container">
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
                        {{ totalMtd | arred }}
                      </div>
                      <div v-if="(totalMtd - budgetMes) < 0" class="resumo-real text-primary">
                        <strong>Delta:</strong>
                        {{ totalMtd - budgetMes | arred }}
                      </div>
                      <div v-else class="resumo-real text-danger">
                        <strong>Delta:</strong>
                        {{ totalMtd - budgetMes | arred }}
                      </div>
                    </div>
                  </div>

                  <div class="col-6">
                    <div class="resumo2">
                      <div class="resumo-title">YTD</div>
                      <div class="resumo-real">
                        <strong>Real:</strong>
                        {{ totalYtd | arred }}
                      </div>
                      <div v-if="(totalYtd - budgetAno) < 0" class="resumo-real text-primary">
                        <strong>Delta:</strong>
                        {{ totalYtd - budgetAno | arred }}
                      </div>
                      <div v-else class="resumo-real text-danger">
                        <strong>Delta:</strong>
                        {{ totalYtd - budgetAno | arred }}
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
    </div>
  </div>

  <div class="container">
    <div class="row">
      
      <div class="col-lg-6 col-md-12 mt-3">
        <div class="card">
          <div class="card-body">
            <div>
              <i class="fas fa-heart fa-3x" style="color: rgb(0, 176, 90)"></i>
              <h4 class="d-inline ml-1 text-success">Ilon</h4>
            </div>

            <div v-if="ilonGerente.length == 0"></div>

            <div v-else-if="ilonGerente.length == 1">
              <span>FORNECEDOR: {{ ilonGerente[0].ILON }} VALOR: {{ ilonGerente[0].REAL | arred }}</span>
              <br />
            </div>

            <div v-else-if="ilonGerente.length == 2">
              <span>FORNECEDOR: {{ ilonGerente[0].ILON }} VALOR: {{ ilonGerente[0].REAL | arred }}</span>
              <br />
              <span>FORNECEDOR: {{ ilonGerente[1].ILON }} VALOR: {{ ilonGerente[1].REAL | arred }}</span>
              <br />
            </div>
            <div v-else-if="ilonGerente.length == 3">
              <span>FORNECEDOR: {{ ilonGerente[0].ILON }} VALOR: {{ ilonGerente[0].REAL | arred }}</span>
              <br />
              <span>FORNECEDOR: {{ ilonGerente[1].ILON }} VALOR: {{ ilonGerente[1].REAL | arred }}</span>
              <br />
              <span>FORNECEDOR: {{ ilonGerente[2].ILON }} VALOR: {{ ilonGerente[2].REAL | arred }}</span>
              <br />
            </div>
            <div v-else-if="ilonGerente.length == 4">
              <span>FORNECEDOR: {{ ilonGerente[0].ILON }} VALOR: {{ ilonGerente[0].REAL | arred }}</span>
              <br />
              <span>FORNECEDOR: {{ ilonGerente[1].ILON }} VALOR: {{ ilonGerente[1].REAL | arred }}</span>
              <br />
              <span>FORNECEDOR: {{ ilonGerente[2].ILON }} VALOR: {{ ilonGerente[2].REAL | arred }}</span>
              <br />
              <span>FORNECEDOR: {{ ilonGerente[3].ILON }} VALOR: {{ ilonGerente[3].REAL | arred }}</span>
              <br />
            </div>
            <div v-else-if="ilonGerente.length == 5">
              <span>FORNECEDOR: {{ ilonGerente[0].ILON }} VALOR: {{ ilonGerente[0].REAL | arred }}</span>
              <br />
              <span>FORNECEDOR: {{ ilonGerente[1].ILON }} VALOR: {{ ilonGerente[1].REAL | arred }}</span>
              <br />
              <span>FORNECEDOR: {{ ilonGerente[2].ILON }} VALOR: {{ ilonGerente[2].REAL | arred }}</span>
              <br />
              <span>FORNECEDOR: {{ ilonGerente[3].ILON }} VALOR: {{ ilonGerente[3].REAL | arred }}</span>
              <br />
              <span>FORNECEDOR: {{ ilonGerente[4].ILON }} VALOR: {{ ilonGerente[4].REAL | arred }}</span>
              <br />
            </div>
            <div v-else-if="ilonGerente.length > 5">
              <span>FORNECEDOR: {{ ilonGerente[0].ILON }} VALOR: {{ ilonGerente[0].REAL | arred }}</span>
              <br />
              <span>FORNECEDOR: {{ ilonGerente[1].ILON }} VALOR: {{ ilonGerente[1].REAL | arred }}</span>
              <br />
              <span>FORNECEDOR: {{ ilonGerente[2].ILON }} VALOR: {{ ilonGerente[2].REAL | arred }}</span>
              <br />
              <span>FORNECEDOR: {{ ilonGerente[3].ILON }} VALOR: {{ ilonGerente[3].REAL | arred }}</span>
              <br />
              <span>FORNECEDOR: {{ ilonGerente[4].ILON }} VALOR: {{ ilonGerente[4].REAL | arred }}</span>
              <br />

              <div>Outros: {{ somaOutrosIlon }}</div>
            </div>
          </div>
        </div>
      </div>

            
      <div class="col-lg-6 col-md-12 mt-3">
        <div class="card">
          <div class="card-body">
            <div>
              <i class="fas fa-search-plus fa-3x" style="color: rgb(0, 176, 90)"></i>
              <h4 class="d-inline ml-1 text-success">Maiores Fornecedores</h4>
            </div>

            <div v-if="fornecedorGerente.length == 0"></div>

            <div v-else-if="fornecedorGerente.length == 1">
              <span>FORNECEDOR: {{ fornecedorGerente[0].FORNECEDOR }} VALOR: {{ fornecedorGerente[0].REAL | arred }}</span>
              <br />
            </div>

            <div v-else-if="fornecedorGerente.length == 2">
              <span>FORNECEDOR: {{ fornecedorGerente[0].FORNECEDOR }} VALOR: {{ fornecedorGerente[0].REAL | arred }}</span>
              <br />
              <span>FORNECEDOR: {{ fornecedorGerente[1].FORNECEDOR }} VALOR: {{ fornecedorGerente[1].REAL | arred }}</span>
              <br />
            </div>
            <div v-else-if="fornecedorGerente.length == 3">
              <span>FORNECEDOR: {{ fornecedorGerente[0].FORNECEDOR }} VALOR: {{ fornecedorGerente[0].REAL | arred }}</span>
              <br />
              <span>FORNECEDOR: {{ fornecedorGerente[1].FORNECEDOR }} VALOR: {{ fornecedorGerente[1].REAL | arred }}</span>
              <br />
              <span>FORNECEDOR: {{ fornecedorGerente[2].FORNECEDOR }} VALOR: {{ fornecedorGerente[2].REAL | arred }}</span>
              <br />
            </div>
            <div v-else-if="fornecedorGerente.length == 4">
              <span>FORNECEDOR: {{ fornecedorGerente[0].FORNECEDOR }} VALOR: {{ fornecedorGerente[0].REAL | arred }}</span>
              <br />
              <span>FORNECEDOR: {{ fornecedorGerente[1].FORNECEDOR }} VALOR: {{ fornecedorGerente[1].REAL | arred }}</span>
              <br />
              <span>FORNECEDOR: {{ fornecedorGerente[2].FORNECEDOR }} VALOR: {{ fornecedorGerente[2].REAL | arred }}</span>
              <br />
              <span>FORNECEDOR: {{ fornecedorGerente[3].FORNECEDOR }} VALOR: {{ fornecedorGerente[3].REAL | arred }}</span>
              <br />
            </div>
            <div v-else-if="fornecedorGerente.length == 5">
              <span>FORNECEDOR: {{ fornecedorGerente[0].FORNECEDOR }} VALOR: {{ fornecedorGerente[0].REAL | arred }}</span>
              <br />
              <span>FORNECEDOR: {{ fornecedorGerente[1].FORNECEDOR }} VALOR: {{ fornecedorGerente[1].REAL | arred }}</span>
              <br />
              <span>FORNECEDOR: {{ fornecedorGerente[2].FORNECEDOR }} VALOR: {{ fornecedorGerente[2].REAL | arred }}</span>
              <br />
              <span>FORNECEDOR: {{ fornecedorGerente[3].FORNECEDOR }} VALOR: {{ fornecedorGerente[3].REAL | arred }}</span>
              <br />
              <span>FORNECEDOR: {{ fornecedorGerente[4].FORNECEDOR }} VALOR: {{ fornecedorGerente[4].REAL | arred }}</span>
              <br />
            </div>
            <div v-else-if="fornecedorGerente.length > 5">
              <span>FORNECEDOR: {{ fornecedorGerente[0].FORNECEDOR }} VALOR: {{ fornecedorGerente[0].REAL | arred }}</span>
              <br />
              <span>FORNECEDOR: {{ fornecedorGerente[1].FORNECEDOR }} VALOR: {{ fornecedorGerente[1].REAL | arred }}</span>
              <br />
              <span>FORNECEDOR: {{ fornecedorGerente[2].FORNECEDOR }} VALOR: {{ fornecedorGerente[2].REAL | arred }}</span>
              <br />
              <span>FORNECEDOR: {{ fornecedorGerente[3].FORNECEDOR }} VALOR: {{ fornecedorGerente[3].REAL | arred }}</span>
              <br />
              <span>FORNECEDOR: {{ fornecedorGerente[4].FORNECEDOR }} VALOR: {{ fornecedorGerente[4].REAL | arred }}</span>
              <br />

              <div>Outros: {{ somaOutros }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 mt-3">
        <div class="card">
          <div class="card-body">
            <div class="box-capacity">
              <i class="fas fa-superscript fa-3x" style="color: rgb(0, 176, 90)"></i>
              <h4 class="d-inline ml-1 text-success">Main View</h4>
              <div>
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-6">
                      <div class="mt-4">
                        <img
                          style="margin-top:-10px float:left;"
                          height="100px;"
                          src="@/assets/Budget1.png"
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

      <div class="col-lg-4 col-md-6 mt-3">
        <div class="card">
          <div class="card-body">
            <div class="box-capacity">
              <i class="fas fa-walking fa-3x" style="color: rgb(0, 176, 90)"></i>
              <h4 class="d-inline ml-1 text-success">Previsão Landing</h4>
              <div>
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-6">
                      <div class="mt-4">
                        <img
                          style="margin-top:-10px float:left;"
                          height="100px;"
                          src="@/assets/Budget1.png"
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
    </div>
  </div>

  <div class="container">
    <div class="row">


      <div class="col-lg-4 col-md-12 mt-3">
        <div class="card">
          <div class="card-body">
            <div>
              <i class="fas fa-box-open fa-3x" style="color: rgb(0, 176, 90)"></i>
              <h4 class="d-inline ml-1 text-success">Opex X Depreciação</h4>
            </div>

            <img style="margin-top:-10px float:left;" height="100px;" src="@/assets/Budget1.png" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-lg-12 col-md-12 mt-3">
        <div class="card">
          <div class="card-body">
            <div>
              <i class="fas fa-project-diagram fa-3x" style="color: rgb(0, 176, 90)"></i>
              <h4 class="d-inline ml-1 text-success">DSC e Visir</h4>

              <!-- Aqui entram 2 gráficos, 1 abaixo do outro:
              DSC e Visir Opex total
              DSC e visir Depreciação-->
              <br />
              <br />

              <button @click="somaGerente()">Exportar</button>
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
      somaOutrosIlon: 0
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
      this.acaoSelect();
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
          console.log(valor[i].REAL);
          console.log("SOMA:" + this.somaOutrosIlon);
        }
      }
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

      console.log('Cheguei created')
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

      setTimeout(() => {
           this.selectGerente("nuno parente");
      }, 1000);
  },

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
}

.avatar-img {
  width: 70px;
  height: 70px;
  border-radius: 50px;
  margin-left: 9px;
  margin-top: 5px;
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
</style>