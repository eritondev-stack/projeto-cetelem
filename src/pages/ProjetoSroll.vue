<template>
<body>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-md-12 mt-3">
        <div class="card">
          <div class="card-body">
            <div>
              <h3>Projeto 1</h3>
              <table>
                <tr>
                  <td rowspan="3" class="titulolado">IC1</td>
                  <td colspan="5" align="center" class="titulo1">Sugestão IC1</td>
                </tr>
                <tr>
                  <td colspan="3">Data Envio IC1 (Mandate)</td>
                  <td>
                    <input type="date" style="width: 170px; text-align: center;" />
                  </td>
                </tr>
                <tr>
                  <td colspan="3">Data Apresentação IC1</td>
                  <td>
                    <input type="date" style="width: 170px; text-align: center;" />
                  </td>
                </tr>

                <tr>
                  <td rowspan="12" class="titulolado">ITVC</td>
                </tr>
                <tr>
                  <td colspan="5" align="center" class="titulo1">Documentos para o Colec</td>
                </tr>
                <!-- Caso alguém fez um upload, está ok, senão , estão NOK -->
                <tr>
                  <td colspan="2">Aya</td>
                  <td colspan="2" align="center">OK</td>
                  <td>
                    <button type="button">Download</button>
                  </td>
                  <td>
                    <button type="button">Upload</button>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">Security Form</td>
                  <td colspan="2" align="center">NOK</td>
                  <td>
                    <button type="button">Download</button>
                  </td>
                  <td>
                    <button type="button">Upload</button>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">PSD</td>
                  <td colspan="2" align="center">NOK</td>
                  <td>
                    <button type="button">Download</button>
                  </td>
                  <td>
                    <button type="button">Upload</button>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">DMO</td>
                  <td colspan="2" align="center">OK</td>
                  <td>
                    <button type="button">Download</button>
                  </td>
                  <td>
                    <button type="button">Upload</button>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">CDO</td>
                  <td colspan="2" align="center">OK</td>
                  <td>
                    <button type="button">Download</button>
                  </td>
                  <td>
                    <button type="button">Upload</button>
                  </td>
                </tr>

                <tr>
                  <td colspan="3">Data COLEC (PSD Final)</td>
                  <td>
                    <input type="date" style="width: 170px; text-align: center;" />
                  </td>
                </tr>

                <tr>
                  <td colspan="5" align="center" class="titulo1">Apresentação VC</td>
                </tr>
                <tr>
                  <td colspan="3">Apresentação PSD .ppt</td>
                  <td>
                    <input type="date" style="width: 170px; text-align: center;" />
                  </td>
                  <td>
                    <button type="button">Download</button>
                  </td>
                  <td>
                    <button type="button">Upload</button>
                  </td>
                </tr>
                <tr>
                  <td colspan="3">Envio PSD .doc</td>
                  <td>
                    <input type="date" style="width: 170px; text-align: center;" />
                  </td>
                  <td>
                    <button type="button">Download</button>
                  </td>
                  <td>
                    <button type="button">Upload</button>
                  </td>
                </tr>
                <tr>
                  <td colspan="3">Envio ATA do VC</td>
                  <td>
                    <input type="date" style="width: 170px; text-align: center;" />
                  </td>
                  <td>
                    <button type="button">Download</button>
                  </td>
                  <td>
                    <button type="button">Upload</button>
                  </td>
                </tr>

                <tr>
                  <td rowspan="5" class="titulolado">IC2</td>
                </tr>
                <tr>
                  <td colspan="5" align="center" class="titulo1">Sugestão IC2</td>
                </tr>
                <tr>
                  <td colspan="3">Data Envio IC2 (Scoping Contract)</td>
                  <td>
                    <input type="date" style="width: 170px; text-align: center;" />
                  </td>
                </tr>
                <tr>
                  <td colspan="3">Confirmar que Ata foi enviada até:</td>
                  <td>
                    <input type="date" style="width: 170px; text-align: center;" />
                  </td>
                </tr>
                <tr>
                  <td colspan="3">Data Apresentação IC2:</td>
                  <td>
                    <input type="date" style="width: 170px; text-align: center;" />
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6 col-md-12 mt-3">
        <div class="card">
          <div class="card-body">
            <div>
              <h3>Projeto 2</h3>
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