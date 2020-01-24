<template>
<body>
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-6 mt-3">
        <div class="card">
          <div class="card-body">
            <div>
              <h4>Projetos por categoria</h4>
              <!-- Aqui é uma view da tabela projetos, com a quantidade de projetos pela coluna N (PMS SEGMENTS) -->
              <img
                style="margin-top:-20px float:left;"
                height="190px;"
                src="@/assets/projetos_por_categoria.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 mt-3">
        <div class="card">
          <div class="card-body">
            <div>
              <h4>Projetos por PM</h4>
              <!-- Aqui é uma view da tabela projetos, com a quantidade de projetos pela coluna K (DEMAND MANAGER) -->
              <img
                style="margin-top:-20px float:left;"
                height="190px;"
                src="@/assets/projetos_por_PM.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 mt-3">
        <div class="card">
          <div class="card-body">
            <h4>Projetos por Status</h4>
            <!-- Aqui é uma view da tabela projetos, com a quantidade de projetos pela coluna X (Status) -->
            <img
              style="margin-top:-20px float:left;"
              height="190px;"
              src="@/assets/Projetos_por_status.png"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-6 mt-3">
        <div class="card">
          <div class="card-body">
            <div>
              <h4>Projetos por Fase</h4>
              <!-- Aqui é uma view da tabela projetos, com a quantidade de projetos pela coluna Y (Phase - Level 1) -->
              <img
                style="margin-top:-20px float:left;"
                height="190px;"
                src="@/assets/projetos_por_fase.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 mt-3">
        <div class="card">
          <div class="card-body">
            <div>
              <img style="margin-top:-20px float:left;" height="100px;" src="@/assets/budget.png" />
              <h4>Budget X Real</h4>
              <table border="1">
                <tr>
                  <!-- Esse número de budget é a soma da coluna AJ (Inicial Multi-year Budget), o número de real é a soma da coluna AL(Multi Year actuals) -->
                  <td>Budget: 34.000K</td>
                  <td>Real: 53.000K</td>
                  <td>Delta: 140%</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 mt-3">
        <div class="card">
          <div class="card-body">
            <img style="margin-top:-20px float:left;" height="100px;" src="@/assets/daily_rate.png" />
            <div>
              <table border="1">
                <tr>
                  <td>Daily rate used:0,373 Euros</td>
                  <td>Latest Exchange rate: 3,35</td>
                </tr>
              </table>
            </div>
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
              <img
                style="margin-top:-20px float:left;"
                height="300px;"
                src="@/assets/projetos_linha_tempo.png"
              />
              <br />
              <br />
              <button type="button">Exportar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</template>

<script>
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap");

body {
  background-color: rgb(246, 246, 246);
  height: 100vh;
  font-family: "Roboto Slab", serif;
  color: rgb(80, 80, 80);
}

th {
  background: rgb(0, 176, 90);
  color: white;
  text-align: center;
  border: 1px solid rgb(255, 255, 255);
  padding: 0 9px;
  border: 3px solid rgb(0, 0, 0);
}
.myButton {
  box-shadow: 0px 15px 14px -7px #3e7327;
  background: linear-gradient(to bottom, #77b55a 5%, #72b352 100%);
  background-color: #77b55a;
  border-radius: 4px;
  border: 1px solid #4b8f29;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Georgia;
  font-size: 13px;
  font-weight: bold;
  padding: 6px 12px;
  text-decoration: none;
  text-shadow: 0px -1px 0px #5b8a3c;
}
.myButton:hover {
  background: linear-gradient(to bottom, #72b352 5%, #77b55a 100%);
  background-color: #72b352;
}
.myButton:active {
  position: relative;
  top: 1px;
}

// mx-auto{
//   background: rgb(0, 176, 90);
//   color: white;
//   text-align: center;
//   border: 1px solid rgb(255, 255, 255);
//   padding: 0 9px;
//   font-size: 1cm
// }
</style>