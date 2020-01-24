<template>
<body>
  <div class="container">
    <div class="row">
        <div class="col-lg-12 col-md-12 mt-3">
            <div class="card">
                <div class="card-body">
                    <div>
                        <h3>Capacity</h3>
                        <!-- Aqui seria mostrada a query de todas as tabelas de capacity 
                        com os nomes, departamentos até as colunas de CTB e RTB -->        
                        <table>
                            <th>Login</th>
                            <th>Area</th>
                            <th>Recurso</th>
                            <th>Contrato</th>
                            <th>Ativo</th>
                            <th>CTB</th>
                            <th>RTB</th>
                            <th>Cargo</th>
                            <th>Sexo</th>
                            <th>D_P_O</th>
                            <th>Plataforma 1</th>
                            <th>Plataforma 2</th>
                            <th>Plataforma 3</th>
                            <th>CTB FY</th>
                            <th>RTB FY</th>
                            <th>CTB FY (Plataforma)</th>
                            <th>RTB FY (Plataforma)</th>
                            <th>CTB FY (Real)</th>
                            <th>RTB FY (Real)</th>

                            <tr>
                                <td>ff994</td>
                                <td>Infraestrutura</td>
                                <td>Luciana da SIlva Sauro</td>
                                <td>Internal</td>
                                <td>Ativo</td>
                                <td>50%</td>
                                <td>50%</td>
                                <td>Analista</td>
                                <td>Masculino</td>
                                <td>Development</td>
                                <td>Infraestrutura</td>
                                <td>c360</td>
                                 <td>SILL</td>
                                <td>6</td>
                                <td>6</td>
                                <td>2</td>
                                <td>2</td>
                                <td>6</td>
                                <td>6</td>
                            </tr>
                        </table>

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
  font-size: 10px
  }

td {
  background: rgb(255, 255, 255);
  color: black;
  text-align: center;
  border: 1px solid rgb(0, 0, 0);
  font-size: 9px
  }

.myButton {
	box-shadow: 0px 15px 14px -7px #3e7327;
	background:linear-gradient(to bottom, #77b55a 5%, #72b352 100%);
	background-color:#77b55a;
	border-radius:4px;
	border:1px solid #4b8f29;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Georgia;
	font-size:13px;
	font-weight:bold;
	padding:6px 12px;
	text-decoration:none;
	text-shadow:0px -1px 0px #5b8a3c;
}
.myButton:hover {
	background:linear-gradient(to bottom, #72b352 5%, #77b55a 100%);
	background-color:#72b352;
}
.myButton:active {
	position:relative;
	top:1px;
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