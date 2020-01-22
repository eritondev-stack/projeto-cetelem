<template>
<body>
  <div class="container">
    <div class="row">
        <div class="col-lg-12 col-md-12 mt-3">
            <div class="card">
                <div class="card-body">
                    <div>
                        <h3>Gerencia</h3>
                        <a href="#" class="myButton">Bruno</a>
                        <a href="#" class="myButton">Guedes</a>
                        <a href="#" class="myButton">Helio</a>
                        <a href="#" class="myButton">Marcel</a>
                        <a href="#" class="myButton">Marcelo</a>
                        
                        
                        

                    </div>
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
                        <img
              style="margin-top:-20px float:left;" 
              height="100px;"
              src="@/assets/work.png"
              
                        />
                        
                        <h3>Total Staff</h3>
                        Masculino:<br>
                        Feminino:
                    </div>
                </div>
            </div>
        
       </div>
       <div class="col-lg-4 col-md-6 mt-3">
           <div class="card">
                <div class="card-body">
                    <div>
                        <img
              style="margin-top:-20px float:left;" 
              height="100px;"
              src="@/assets/location.png"
              
                        />
                        <table>
                        <tr>
                            <td>B2C: 23</td>
                            <td>ADM: 21</td>
                        </tr>
                        <tr>
                            <td>Infra: 2</td>
                            <td>IT4Business: 44</td>
                        </tr>
                        <tr>
                            <td>Arquitetura e BI: 12</td>
                            <td>Segurança: 10</td>
                        </tr>
                        </table>
                    </div>
                </div>
            </div>
       </div>    
       <div class="col-lg-4 col-md-6 mt-3">
           <div class="card">
                <div class="card-body">
                      <img
              style="margin-top:-20px float:left;" 
              height="100px;"
              src="@/assets/calendar.png"
              
                        />
                    <div>
                        <table>
                        <tr>
                            <td></td>
                            <td>Capacity</td>
                            <td>Real</td>
                            <td>Delta</td>

                        </tr>
                        <tr>
                            <td>CTB</td>
                        </tr>
                        <tr>
                            <td>RTB</td>
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
                        <i class="fas fa-cogs fa-3x" style="color: rgb(0, 176, 90)"></i>
                        <h3 class="d-inline ml-3 text-success">asdasdasd</h3>
                    </div>
                </div>
            </div>
        
       </div>
    </div>
  </div>




  <div class="container">
    <div class="row">
        <div class="col-lg-9 col-md-12 mt-3">
            <div class="card">
                <div class="card-body">
                    <div>
                        Não lançam horas:
                    </div>
                </div>
            </div>
        
       </div>
       <div class="col-lg-3 col-md-12 mt-3">
            <div class="card">
                <div class="card-body">
                    <div>
                        Procurar:<br>
                        <input
                            type="string"
                            style="width: 170px; text-align: center;"
                          />
                          <button type="button">Ver</button>
                          <br>
                          <br>
                        <button type="button">Ver Todos</button>
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
  border: 3px solid rgb(0,0,0);
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