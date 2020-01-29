<template>
<body>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 mt-3">
          <div class="box-title-cal2">IT Governance - Subsidiary Benchmark</div>
          <div class="box2">
            <GChart
              :settings="{ packages: ['geochart'], mapsApiKey: 'AIzaSyDGPlV-Cw-p_WFVDj-CTd7QSph-lyVQIPE' }"
              type="GeoChart"
              :data="chartData"
              :options="chartOptions"
              width="300px"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 mt-5">
          <div class="card">
            <div class="card-body">
              <div>
                <i class="fas fa-chart-line fa-3x" style="color: rgb(0, 176, 90)"></i>
                <h3 class="d-inline ml-3 text-success">ITGOV Benchmark</h3>
              </div>
              <table style="width: 100%" class="mx-auto" border="2">
                <thead>
                  <tr>
                    <th colspan="7">Resumo POE</th>
                  </tr>

                  <tr>
                    <th class="title">Domain</th>
                    <th class="title">Topic</th>
                    <th class="title">POE</th>
                    <th class="title">Related Procedures</th>
                    <th class="title">Proof Uploaded</th>
                    <th class="title">Proof Reviewed</th>
                    <th class="title">Deployment</th>
                  </tr>
                </thead>

                <tbody>
                  <!-- criar uma condicional onde caso a porcentagem seja:
                      0-30 = vermelho
                      31-60 = Amarelo
                      61 - 99 = Verde claro
                  91-100 = Verde escuro-->

                  <tr>
                    <td>IT Governance</td>
                    <td>Projects</td>
                    <td>Bruno Henrique</td>
                    <td>ITG0011,ITG0012,ITG0013</td>
                    <td>100%</td>
                    <td>95%</td>
                    <td>95%</td>
                  </tr>

                  <tr>
                    <td>IT Governance</td>
                    <td>Asset Mgm</td>
                    <td>Fabiano Felix</td>
                    <td>ITG0031,ITG0032</td>
                    <td>100%</td>
                    <td>100%</td>
                    <td>100%</td>
                  </tr>
                  <tr>
                    <td>IT Governance</td>
                    <td>IT Costs</td>
                    <td>Bruno Henrique</td>
                    <td>ITG0043</td>
                    <td>90%</td>
                    <td>90%</td>
                    <td>100%</td>
                  </tr>

                  <tr>
                    <td>IT Governance</td>
                    <td>Sourcing</td>
                    <td>Felipe de Carvalho</td>
                    <td>ITG0044</td>
                    <td>80%</td>
                    <td>100%</td>
                    <td>80%</td>
                  </tr>
                  <tr>
                    <td>IT Governance</td>
                    <td>Resources</td>
                    <td>Bruno Henrique</td>
                    <td>ITG0048</td>
                    <td>80%</td>
                    <td>100%</td>
                    <td>80%</td>
                  </tr>
                  <tr>
                    <td>IT ADM</td>
                    <td>ADM</td>
                    <td>Felipe de Carvalho</td>
                    <td>ITG0047</td>
                    <td>80%</td>
                    <td>100%</td>
                    <td>80%</td>
                  </tr>
                  <tr>
                    <td>IT Risk</td>
                    <td>Risk</td>
                    <td>Helio Junji</td>
                    <td>ITG0051</td>
                    <td>80%</td>
                    <td>100%</td>
                    <td>80%</td>
                  </tr>
                  <tr>
                    <td>IT Risk</td>
                    <td>ICO</td>
                    <td>Fabiano Felix</td>
                    <td>ITG0052</td>
                    <td>50%</td>
                    <td>100%</td>
                    <td>50%</td>
                  </tr>
                  <tr>
                    <td>IT Risk</td>
                    <td>CISO</td>
                    <td>Helio Junji</td>
                    <td>ITG0053,ITG0054</td>
                    <td>93%</td>
                    <td>100%</td>
                    <td>100%</td>
                  </tr>
                  <tr>
                    <td>IT Risk</td>
                    <td>Shadow IT</td>
                    <td>Helio Junji</td>
                    <td>ITG0055</td>
                    <td>93%</td>
                    <td>100%</td>
                    <td>100%</td>
                  </tr>
                  <tr>
                    <td>IT Architecture</td>
                    <td>Architecture</td>
                    <td>Marcelo Guedes</td>
                    <td>ITG0042</td>
                    <td>93%</td>
                    <td>100%</td>
                    <td>100%</td>
                  </tr>
                  <tr>
                    <td>IT Architecture</td>
                    <td>Data</td>
                    <td>Marcelo Guedes</td>
                    <td>ITG0045</td>
                    <td>93%</td>
                    <td>100%</td>
                    <td>100%</td>
                  </tr>
                  <tr>
                    <td>IT Architecture</td>
                    <td>Techno</td>
                    <td>Marcelo Guedes</td>
                    <td>ITG0046</td>
                    <td>93%</td>
                    <td>100%</td>
                    <td>100%</td>
                  </tr>
                  <tr>
                    <td>IT Production</td>
                    <td>CTO</td>
                    <td>Fabiano Felix</td>
                    <td>ITG0021,ITG0022</td>
                    <td>93%</td>
                    <td>100%</td>
                    <td>100%</td>
                  </tr>
                </tbody>
              </table>
              <br>
              
              <button type="button">Exportar</button>
            </div>
          </div>
        </div>
        <div class="col-md-6 mt-5">
          <!-- Outra tabela -->
          
        </div>
      </div>
    </div>
  </div>
</body>
</template>

<script>
import { GChart } from "vue-google-charts";
export default {
  components: {
    GChart
  },
  data() {
    return {
      chartData: [
        ["Country", "Aprovadas"],
        ["Spain", 100],
        ["United Kingdom", 99],
        ["Portugal", 99],
        ["Mexico", 97],
        ["France", 96],
        ["Italy", 95],
        ["Brazil", 94],
        ["Belgium", 91],
        ["Bulgaria", 89],
        ["Hungary", 89],
        ["Germany", 89],
        ["Turkey", 84],
        ["Czech Republic", 82],
        ["Romania", 81],
        ["Denmark", 74],
        ["South Africa", 71],

      ],
      chartOptions: {
        displayMode: "markers",
        colorAxis: { colors: ["red", "yellow", "Blue" , "Green"] },
        backgroundColor: "#ffffff"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap");

$verde1: rgb(0, 176, 90);
$verde1t: rgba(0, 176, 90, 0.7);
$verde2: rgb(146, 208, 80);
$verde3: #a9d18e;
$roxo: #ab5b99;
$azul: rgb(131, 205, 232);
$teste: #ffffff;

body {
  background-color: rgb(246, 246, 246);
  height: 100%;
  font-family: "Roboto Slab", serif;
  color: rgb(80, 80, 80);

}

th {
  background: rgb(0, 176, 90);
  color: white;
  text-align: center;
  font-size: 14px;
}
td {
  background: rgb(255, 255, 255);
  color: black;
  text-align: center;
  font-size: 10px;
  border: 1px solid rgb(220, 220, 220);
}

.box-title-cal2 {
  font-size: 20px;
  background-color: $verde2;
  width: 98%;
  border-radius: 10px;
  top: 0px;
  position: absolute;
  text-align: center;
  -webkit-box-shadow: 0px 0px 18px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 18px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 18px -6px rgba(0, 0, 0, 0.75);
  color: white;
  z-index: 10;
}
</style>