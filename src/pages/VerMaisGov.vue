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
                    <td class="pl-2">Projects</td>
                    <td class="pl-3">Bruno Henrique</td>
                    <td class="pl-4">ITG0011,ITG0012,ITG0013</td>
                    <td class="pl-5">100%</td>
                    <td class="pl-6">95%</td>
                    <td class="pl-7">95%</td>
                  </tr>

                  <tr>
                    <td>IT Governance</td>
                    <td class="pl-2">Asset Mgm</td>
                    <td class="pl-3">Fabiano Felix</td>
                    <td class="pl-4">ITG0031,ITG0032</td>
                    <td class="pl-5">100%</td>
                    <td class="pl-6">100%</td>
                    <td class="pl-7">100%</td>
                  </tr>
                  <tr>
                    <td>IT Governance</td>
                    <td class="pl-2">IT Costs</td>
                    <td class="pl-3">Bruno Henrique</td>
                    <td class="pl-4">ITG0043</td>
                    <td class="pl-5">90%</td>
                    <td class="pl-6">90%</td>
                    <td class="pl-7">100%</td>
                  </tr>

                  <tr>
                    <td>IT Governance</td>
                    <td class="pl-2">Sourcing</td>
                    <td class="pl-3">Felipe de Carvalho</td>
                    <td class="pl-4">ITG0044</td>
                    <td class="pl-5">80%</td>
                    <td class="pl-6">100%</td>
                    <td class="pl-7">80%</td>
                  </tr>
                  <tr>
                    <td>IT Governance</td>
                    <td class="pl-2">Resources</td>
                    <td class="pl-3">Bruno Henrique</td>
                    <td class="pl-4">ITG0048</td>
                    <td class="pl-5">80%</td>
                    <td class="pl-6">100%</td>
                    <td class="pl-7">80%</td>
                  </tr>
                  <tr>
                    <td>IT ADM</td>
                    <td class="pl-2">ADM</td>
                    <td class="pl-3">Felipe de Carvalho</td>
                    <td class="pl-4">ITG0047</td>
                    <td class="pl-5">80%</td>
                    <td class="pl-6">100%</td>
                    <td class="pl-7">80%</td>
                  </tr>
                  <tr>
                    <td>IT Risk</td>
                    <td class="pl-2">Risk</td>
                    <td class="pl-3">Helio Junji</td>
                    <td class="pl-4">ITG0051</td>
                    <td class="pl-5">80%</td>
                    <td class="pl-6">100%</td>
                    <td class="pl-7">80%</td>
                  </tr>
                  <tr>
                    <td>IT Risk</td>
                    <td class="pl-2">ICO</td>
                    <td class="pl-3">Fabiano Felix</td>
                    <td class="pl-4">ITG0052</td>
                    <td class="pl-5">50%</td>
                    <td class="pl-6">100%</td>
                    <td class="pl-7">50%</td>
                  </tr>
                  <tr>
                    <td>IT Risk</td>
                    <td class="pl-2">CISO</td>
                    <td class="pl-3">Helio Junji</td>
                    <td class="pl-4">ITG0053,ITG0054</td>
                    <td class="pl-5">93%</td>
                    <td class="pl-6">100%</td>
                    <td class="pl-7">100%</td>
                  </tr>
                  <tr>
                    <td>IT Risk</td>
                    <td class="pl-2">Shadow IT</td>
                    <td class="pl-3">Helio Junji</td>
                    <td class="pl-4">ITG0055</td>
                    <td class="pl-5">93%</td>
                    <td class="pl-6">100%</td>
                    <td class="pl-7">100%</td>
                  </tr>
                  <tr>
                    <td>IT Architecture</td>
                    <td class="pl-2">Architecture</td>
                    <td class="pl-3">Marcelo Guedes</td>
                    <td class="pl-4">ITG0042</td>
                    <td class="pl-5">93%</td>
                    <td class="pl-6">100%</td>
                    <td class="pl-7">100%</td>
                  </tr>
                  <tr>
                    <td>IT Architecture</td>
                    <td class="pl-2">Data</td>
                    <td class="pl-3">Marcelo Guedes</td>
                    <td class="pl-4">ITG0045</td>
                    <td class="pl-5">93%</td>
                    <td class="pl-6">100%</td>
                    <td class="pl-7">100%</td>
                  </tr>
                  <tr>
                    <td>IT Architecture</td>
                    <td class="pl-2">Techno</td>
                    <td class="pl-3">Marcelo Guedes</td>
                    <td class="pl-4">ITG0046</td>
                    <td class="pl-5">93%</td>
                    <td class="pl-6">100%</td>
                    <td class="pl-7">100%</td>
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
        ["Germany", 1],
        ["United States", 3],
        ["Brazil", 4],
        ["Canada", 5],
        ["France", 6]
      ],
      chartOptions: {
        displayMode: "markers",
        colorAxis: { colors: ["blue", "yellow", "red"] },
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