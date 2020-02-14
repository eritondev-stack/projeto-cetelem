<template>
<body>
  <div class="container">
    <div class="row">
      <div class="col-lg-5 col-md-12 mt-3">
        <div class="card">
          <div class="card-body">
            <div>
              <i class="fas fa-cogs fa-3x" style="color: rgb(0, 176, 90)"></i>
              <h4 class="d-inline ml-3 text-success">Opções</h4>
            </div>

            <table>
              <th colspan="5">Contratação</th>
              <tr>
                <td>Qtde.</td>
                <td>Plataforma</td>
                <td>Nível</td>
                <td>Início</td>
                <td>Fim</td>
              </tr>
              <tr>
                <td>
                  <input v-model="jul" type="number" style="width: 60px; text-align: center;" />
                </td>
                <td>
                  <select>
                    <!-- Isso será dinamico baseado no  IT capacity -->
                    <option value="c360">C360</option>
                    <option value="sill">Sill</option>
                    <option value="hb">HB</option>
                    <option value="Matera">Matera</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option value="escolha">Escolha</option>
                    <option value="junior">Junior</option>
                    <option value="Pleno">Pleno</option>
                    <option value="senior">Senior</option>
                  </select>
                </td>
                <td>
                  <input type="date" style="width: 80px; text-align: center;" />
                </td>
                <td>
                  <input type="date" style="width: 80px; text-align: center;" />
                </td>
              </tr>
            </table>
            <br />
            <button type="button">Adicionar</button>
          </div>
        </div>
      </div>

      <!-- <div class="col-lg-4 col-md-6 mt-3">
          <div class="box2 d-flex justify-content-center">
            <div class="box-title-cal" style="background-color: rgb(0, 176, 90);">Calendarização</div>
      <div class="mt-4" style="width:100%; height:90%; overflow: auto;">-->

      <div class="col-lg-5 col-md-12 mt-3">
        <div class="card">
          <div class="card-body">
            <!--O Certo aqui é como no dashboard, com uma barra de rolagem-->
            <div>
              <i class="fas fa-thermometer-half fa-3x" style="color: rgb(0, 176, 90)"></i>
              <h4 class="d-inline ml-3 text-success">Status</h4>
            </div>

            <table>
              <thead>
                <th style="background-color: rgb(171, 91, 153);">Plataforma</th>
                <th style="background-color: rgb(171, 91, 153);">Capacity</th>
                <th style="background-color: rgb(171, 91, 153);">Requerido</th>
                <th style="background-color: rgb(171, 91, 153);" colspan="2">Delta</th>
              </thead>

              <tbody>
                <tr>
                  <td>C360</td>
                  <td>500</td>
                  <td>600</td>
                  <td>-100</td>
                  <td class="retirar">
                    <i class="fas fa-check-circle text-success"></i>
                  </td>
                </tr>
                <tr>
                  <td>Sill</td>
                  <td>500</td>
                  <td>600</td>
                  <td>-100</td>
                  <td class="retirar">
                    <i class="fas fa-times text-danger"></i>
                  </td>
                </tr>
                <tr>
                  <td>HB</td>
                  <td>500</td>
                  <td>600</td>
                  <td>-100</td>
                  <td class="retirar">
                    <i class="fas fa-times text-danger"></i>
                  </td>
                </tr>
                <tr>
                  <td>URA</td>
                  <td>500</td>
                  <td>600</td>
                  <td>-100</td>
                  <td class="retirar">
                    <i class="fas fa-times text-danger"></i>
                  </td>
                </tr>
                <tr>
                  <td>Sof.Corp.</td>
                  <td>500</td>
                  <td>600</td>
                  <td>-100</td>
                  <td class="retirar">
                    <i class="fas fa-times text-danger"></i>
                  </td>
                </tr>
                <tr>
                  <td>Siclid</td>
                  <td>500</td>
                  <td>600</td>
                  <td>-100</td>
                  <td class="retirar">
                    <i class="fas fa-times text-danger"></i>
                  </td>
                </tr>
                <tr>
                  <td>BI</td>
                  <td>500</td>
                  <td>600</td>
                  <td>-100</td>
                  <td class="retirar">
                    <i class="fas fa-times text-danger"></i>
                  </td>
                </tr>
                <tr>
                  <td>Arquitetura</td>
                  <td>500</td>
                  <td>600</td>
                  <td>-100</td>
                  <td class="retirar">
                    <i class="fas fa-times text-danger"></i>
                  </td>
                </tr>
                <tr>
                  <td>Infraestrutura</td>
                  <td>500</td>
                  <td>600</td>
                  <td>-100</td>
                  <td class="retirar">
                    <i class="fas fa-times text-danger"></i>
                  </td>
                </tr>
                <tr>
                  <td>IT Risk</td>
                  <td>500</td>
                  <td>600</td>
                  <td>-100</td>
                  <td class="retirar">
                    <i class="fas fa-times text-danger"></i>
                  </td>
                </tr>
                <tr>
                  <td>Cyber Security</td>
                  <td>500</td>
                  <td>600</td>
                  <td>-100</td>
                  <td class="retirar">
                    <i class="fas fa-times text-danger"></i>
                  </td>
                </tr>
                <tr>
                  <td>PMO</td>
                  <td>500</td>
                  <td>600</td>
                  <td>-100</td>
                  <td class="retirar">
                    <i class="fas fa-times text-danger"></i>
                  </td>
                </tr>
                <tr>
                  <td>API</td>
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

      <div class="col-lg-2 col-md-12 mt-3">
        <div class="card">
          <div class="card-body">
            <div>
              <i class="fas fa-info fa-3x" style="color: rgb(0, 176, 90)"></i>
              <h4 class="d-inline ml-3 text-success">Resumo:</h4>
            </div>
            <table>
              <th colspan="2">R$ Externo</th>
              <tr>
                <td>R$ Externo:</td>
                <td>45K</td>
              </tr>
              <tr>
                <td>R$ Contratação:</td>
                <td>22K</td>
              </tr>
            </table>
            <br />
            <table>
              <th colspan="2">Staff Adicional</th>
              <tr>
                <td>Qtde:</td>
                <td>Plataforma</td>
              </tr>
              <tr>
                <!-- Aqui irá aparecer todos os recursos que foram adicionados na sessão contratação -->
                <td>2:</td>
                <td>Java</td>
              </tr>
            </table>
          </div>
        </div>
        <!-- </div> -->
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12 col-md-12 mt-3">
        <div class="card">
          <div class="card-body">
            <div>
              <i class="fas fa-list-ol fa-3x" style="color: rgb(0, 176, 90)"></i>
              <h4 class="d-inline ml-3 text-success">Cenários</h4>
            </div>

            <img style="margin-top:-20px float:left;" height="300px;" src="@/assets/gantt.png" />
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
.titulolado {
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
  -webkit-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  transform: rotate(270deg);
}

.titulo1 {
  background: rgb(0, 176, 90);
  color: white;
  text-align: center;
  border: 1px solid rgb(255, 255, 255);
  padding: 0 9px;
  border: 3px solid rgb(0, 0, 0);
}
td {
  border: 1px solid rgb(0, 0, 0);
}
</style>