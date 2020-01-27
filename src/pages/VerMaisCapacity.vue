<template>
<body>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 col-md-12 mt-3">
        <div class="card">
          <div class="card-body d-flex justify-content-center">
            <div class="avatar-container">
              <img class="avatar-img" src="@/assets/bruno.png" />
              <div class="avatar-name">Bruno</div>
            </div>

            <div class="avatar-container ml-3">
              <img class="avatar-img" src="@/assets/helio.png" />
              <div class="avatar-name">Helio</div>
            </div>

            <div class="avatar-container ml-3">
              <img class="avatar-img" src="@/assets/marcel.png" />
              <div class="avatar-name">Marcel</div>
            </div>

            <div class="avatar-container ml-3">
              <img class="avatar-img" src="@/assets/Felix.png" />
              <div class="avatar-name">Felix</div>
            </div>

            <div class="avatar-container ml-3">
              <img class="avatar-img" src="@/assets/guedes.png" />
              <div class="avatar-name">Guedes</div>
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
            <div class="box-capacity">
              <i class="fas fa-users fa-3x" style="color: rgb(0, 176, 90)"></i>
              <h4 class="d-inline ml-3 text-success">Total Staff</h4>
              <div class="mt-4 ml-5">
                <i class="fas fa-male fa-2x" style="color: blue;"></i>
                <span class="ml-1">Masculino:</span>
                <span class="badge badge-success ml-2">12</span>
              </div>

              <div class="mt-3 ml-5">
                <i class="fas fa-female fa-2x" style="color: pink;"></i>
                <span class="ml-1">Feminino:</span>
                <span class="badge badge-success ml-2">12</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 mt-3">
        <div class="card">
          <div class="card-body">
            <div class="box-capacity">
              <i class="fas fa-map-marker-alt fa-3x" style="color: rgb(0, 176, 90)"></i>
              <h4 class="d-inline ml-3 text-success">Staff por Area</h4>
              <div>
                <div class="container-fluid">
                  <dic class="row">
                    <div class="col-6">
                      <div class="mt-4">
                        <span class="text-information">B2C:</span>
                        <span class="badge badge-success ml-2">12</span>
                      </div>

                      <div>
                        <span class="text-information">Infra:</span>
                        <span class="badge badge-success ml-2">12</span>
                      </div>

                      <div>
                        <span class="text-information">Arquit. e BI:</span>
                        <span class="badge badge-success ml-2">12</span>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="mt-4">
                        <span class="text-information">ADM:</span>
                        <span class="badge badge-success ml-2">12</span>
                      </div>

                      <div>
                        <span class="text-information">IT4Business:</span>
                        <span class="badge badge-success ml-1">12</span>
                      </div>

                      <div>
                        <span class="text-information">Segurança:</span>
                        <span class="badge badge-success ml-1">12</span>
                      </div>
                    </div>
                  </dic>
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
              <i class="fas fa-calendar-alt fa-3x" style="color: rgb(0, 176, 90)"></i>
              <h4 class="d-inline ml-3 text-success">Capacity X Real</h4>
              <div class="mt-4 ml-5">
           
                <span class="ml-4">Capacity</span>
                <span class="ml-2">Real</span>
                <span class="ml-2">Delta</span>
                
                
              </div>
            <div class="mt-1 ml-5">
           
                <span class="ml-1">CTB:</span>
                <span class="badge badge-success ml-2">8.763</span>
                <span class="badge badge-success ml-2">8.000</span>
                <span class="badge badge-success ml-2">764</span>
              </div>

              <div class="mt-3 ml-5">
        
                <span class="ml-1">RTB:</span>
                <span class="badge badge-success ml-2">9.645</span>
                <span class="badge badge-success ml-2">9.000</span>
                <span class="badge badge-success ml-2">645</span>
              </div>
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
              <i class="fas fa-user-clock fa-3x" style="color: rgb(0, 176, 90)"></i>
              <h4 class="d-inline ml-3 text-success">Lançamento de horas</h4>
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
            <i class="fas fa-exclamation-triangle fa-3x" style="color: rgb(0, 176, 90)"></i>
              <h4 class="d-inline ml-3 text-success">Não lançam horas</h4>
                <br>
                <br>

            <table style="width: 100%" class="mx-auto" border="2">

                <thead>
                  
                  <tr>
                    <th class="title">Nome</th>
                    <th class="title">Area</th>
                    
                  </tr>
                </thead>

                <tbody>
                
                  <tr>
                    <td>Vagner Rocha</td>
                    <td class="pl-1">PMO</td>
                  </tr>
                  <tr>
                    <td class="pl-1">João Maria</td>
                    <td class="pl-1">Infraestrutura</td>
                  </tr>
                  <tr>
                    <td class="pl-1">Marcelo Gomes da Silva</td>
                    <td class="pl-1">IT Security</td>
                   </tr>

                </tbody>
                </table>

            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-12 mt-3">
        <div class="card">
          <div class="card-body">
            <div>
              <i class="fas fa-search fa-3x" style="color: rgb(0, 176, 90)"></i>
              <h4 class="d-inline ml-3 text-success">Procurar</h4>
              
              <br />
              <input type="string" style="width: 170px; text-align: center;" />
              <button type="button" onclick="window.location.href = 'http://localhost:8080/VertodosItCapacity';">Ver</button>
              <br />
              <br />
              <button type="button" onclick="window.location.href = 'http://localhost:8080/VertodosItCapacity';">Ver Todos</button>
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
  height: 100vh;
  font-family: "Roboto Slab", serif;
  color: rgb(80, 80, 80);
}

.avatar-container {
  height: 120px;
  width: 120px;
  background-color: rgb(236, 235, 235);
  position: relative;
  float: left;
  border-radius: 15px;
  cursor: pointer;
}

.avatar-img {
  width: 90px;
  height: 90px;
  border-radius: 50px;
  margin-left: 15px;
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

.box-capacity {
  height: 150px;
}

.text-information {
  color: rgb(93, 93, 93);
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
</style>