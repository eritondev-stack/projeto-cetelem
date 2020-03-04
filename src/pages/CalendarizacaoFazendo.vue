<template>
  <div class="d-flex justify-content-start">
    <div>
      <button @click="varrer()" class="btn btn-success">Varrer</button>
    </div>
    <table>
      <thead>
        
        <th>Data</th>
        <th>01</th>
        <th>02</th>
        <th>03</th>
        <th>04</th>
        <th>05</th>
        <th>06</th>
        <th>07</th>
        <th>08</th>
        <th>09</th>
        <th>10</th>


      </thead>
      <tbody>
        <tr class="body-work animated fadeIn faster" v-for="(value) in data" :key="value">
          <td>{{ value }}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
 

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      data: [
        "01-03-2020",
        "02-03-2020",
        "03-03-2020",
        "04-03-2020",
        "05-03-2020",
        "06-03-2020",
        "09-03-2020",
        "10-03-2020",
        "11-03-2020",
        "12-03-2020",
        "13-03-2020",
        "16-03-2020",
        "17-03-2020",
        "18-03-2020",
        "19-03-2020",
        "20-03-2020",
        "23-03-2020",
        "24-03-2020",
        "25-03-2020",
        "26-03-2020",
        "27-03-2020",
        "30-03-2020",
        "31-03-2020",
        "01-04-2020",
        "02-04-2020",
        "03-04-2020",
        "06-04-2020",
        "07-04-2020",
        "08-04-2020",
        "09-04-2020",
        "10-04-2020",
        "13-04-2020",
        "14-04-2020",
        "15-04-2020",
        "16-04-2020",
        "17-04-2020",
        "20-04-2020",
        "21-04-2020",
        "22-04-2020",
        "23-04-2020",
        "24-04-2020",
        "27-04-2020",
        "28-04-2020",
        "29-04-2020",
        "30-04-2020",
        "01-05-2020",
        "04-05-2020",
        "05-05-2020",
        "06-05-2020",
        "07-05-2020",
        "08-05-2020",
        "11-05-2020",
        "12-05-2020",
        "13-05-2020",
        "14-05-2020",
        "15-05-2020",
        "18-05-2020",
        "19-05-2020",
        "20-05-2020",
        "21-05-2020",
        "22-05-2020",
        "25-05-2020",
        "26-05-2020",
        "27-05-2020",
        "28-05-2020",
        "29-05-2020",
        "01-06-2020",
        "02-06-2020",
        "03-06-2020",
        "04-06-2020",
        "05-06-2020",
        "08-06-2020",
        "09-06-2020",
        "10-06-2020",
        "11-06-2020",
        "12-06-2020",
        "15-06-2020",
        "16-06-2020",
        "17-06-2020",
        "18-06-2020",
        "19-06-2020",
        "22-06-2020",
        "23-06-2020",
        "24-06-2020",
        "25-06-2020",
        "26-06-2020",
        "29-06-2020",
        "30-06-2020",
        "01-07-2020",
        "02-07-2020",
        "03-07-2020",
        "06-07-2020",
        "07-07-2020",
        "08-07-2020",
        "09-07-2020",
        "10-07-2020",
        "13-07-2020",
        "14-07-2020",
        "15-07-2020",
        "16-07-2020",
        "17-07-2020",
        "20-07-2020",
        "21-07-2020",
        "22-07-2020",
        "23-07-2020",
        "24-07-2020",
        "27-07-2020",
        "28-07-2020",
        "29-07-2020",
        "30-07-2020",
        "31-07-2020",
        "03-08-2020",
        "04-08-2020",
        "05-08-2020",
        "06-08-2020",
        "07-08-2020",
        "10-08-2020",
        "11-08-2020",
        "12-08-2020",
        "13-08-2020",
        "14-08-2020",
        "17-08-2020",
        "18-08-2020",
        "19-08-2020",
        "20-08-2020",
        "21-08-2020",
        "24-08-2020",
        "25-08-2020",
        "26-08-2020",
        "27-08-2020",
        "28-08-2020",
        "31-08-2020",
        "01-09-2020",
        "02-09-2020",
        "03-09-2020",
        "04-09-2020",
        "07-09-2020",
        "08-09-2020",
        "09-09-2020",
        "10-09-2020",
        "11-09-2020",
        "14-09-2020",
        "15-09-2020",
        "16-09-2020",
        "17-09-2020",
        "18-09-2020",
        "21-09-2020",
        "22-09-2020",
        "23-09-2020",
        "24-09-2020",
        "25-09-2020",
        "28-09-2020",
        "29-09-2020",
        "30-09-2020",
        "01-10-2020",
        "02-10-2020",
        "05-10-2020",
        "06-10-2020",
        "07-10-2020",
        "08-10-2020",
        "09-10-2020",
        "12-10-2020",
        "13-10-2020",
        "14-10-2020",
        "15-10-2020",
        "16-10-2020",
        "19-10-2020",
        "20-10-2020",
        "21-10-2020",
        "22-10-2020",
        "23-10-2020",
        "26-10-2020",
        "27-10-2020",
        "28-10-2020",
        "29-10-2020",
        "30-10-2020",
        "02-11-2020",
        "03-11-2020",
        "04-11-2020",
        "05-11-2020",
        "06-11-2020",
        "09-11-2020",
        "10-11-2020",
        "11-11-2020",
        "12-11-2020",
        "13-11-2020",
        "16-11-2020",
        "17-11-2020",
        "18-11-2020",
        "19-11-2020",
        "20-11-2020",
        "23-11-2020",
        "24-11-2020",
        "25-11-2020",
        "26-11-2020",
        "27-11-2020",
        "30-11-2020",
        "01-12-2020",
        "02-12-2020",
        "03-12-2020",
        "04-12-2020",
        "07-12-2020",
        "08-12-2020",
        "09-12-2020",
        "10-12-2020",
        "11-12-2020",
        "14-12-2020",
        "15-12-2020",
        "16-12-2020",
        "17-12-2020",
        "18-12-2020",
        "21-12-2020",
        "22-12-2020",
        "23-12-2020",
        "24-12-2020",
        "25-12-2020",
        "28-12-2020",
        "29-12-2020",
        "30-12-2020",
        "31-12-2020",
        "01-01-2021",
        "04-01-2021",
        "05-01-2021",
        "06-01-2021",
        "07-01-2021",
        "08-01-2021",
        "11-01-2021",
        "12-01-2021",
        "13-01-2021",
        "14-01-2021",
        "15-01-2021",
        "18-01-2021",
        "19-01-2021",
        "20-01-2021",
        "21-01-2021",
        "22-01-2021",
        "25-01-2021",
        "26-01-2021",
        "27-01-2021",
        "28-01-2021",
        "29-01-2021",
        "01-02-2021",
        "02-02-2021",
        "03-02-2021",
        "04-02-2021",
        "05-02-2021",
        "08-02-2021",
        "09-02-2021",
        "10-02-2021",
        "11-02-2021",
        "12-02-2021",
        "15-02-2021",
        "16-02-2021",
        "17-02-2021",
        "18-02-2021",
        "19-02-2021",
        "22-02-2021",
        "23-02-2021",
        "24-02-2021",
        "25-02-2021",
        "26-02-2021",
        "01-03-2021",
        "02-03-2021",
        "03-03-2021",
        "04-03-2021",
        "05-03-2021",
        "08-03-2021",
        "09-03-2021",
        "10-03-2021",
        "11-03-2021",
        "12-03-2021",
        "15-03-2021",
        "16-03-2021",
        "17-03-2021",
        "18-03-2021",
        "19-03-2021",
        "22-03-2021",
        "23-03-2021",
        "24-03-2021",
        "25-03-2021",
        "26-03-2021",
        "29-03-2021",
        "30-03-2021",
        "31-03-2021",
        "01-04-2021",
        "02-04-2021",
        "05-04-2021",
        "06-04-2021",
        "07-04-2021",
        "08-04-2021",
        "09-04-2021",
        "12-04-2021",
        "13-04-2021",
        "14-04-2021",
        "15-04-2021",
        "16-04-2021",
        "19-04-2021",
        "20-04-2021",
        "21-04-2021",
        "22-04-2021",
        "23-04-2021",
        "26-04-2021",
        "27-04-2021",
        "28-04-2021",
        "29-04-2021",
        "30-04-2021",
        "03-05-2021",
        "04-05-2021",
        "05-05-2021",
        "06-05-2021",
        "07-05-2021",
        "10-05-2021",
        "11-05-2021",
        "12-05-2021",
        "13-05-2021",
        "14-05-2021",
        "17-05-2021",
        "18-05-2021",
        "19-05-2021",
        "20-05-2021",
        "21-05-2021",
        "24-05-2021",
        "25-05-2021",
        "26-05-2021",
        "27-05-2021",
        "28-05-2021",
        "31-05-2021",
        "01-06-2021",
        "02-06-2021",
        "03-06-2021",
        "04-06-2021",
        "07-06-2021",
        "08-06-2021",
        "09-06-2021",
        "10-06-2021",
        "11-06-2021",
        "14-06-2021",
        "15-06-2021",
        "16-06-2021",
        "17-06-2021",
        "18-06-2021",
        "21-06-2021",
        "22-06-2021",
        "23-06-2021",
        "24-06-2021",
        "25-06-2021",
        "28-06-2021",
        "29-06-2021",
        "30-06-2021",
        "01-07-2021",
        "02-07-2021",
        "05-07-2021",
        "06-07-2021",
        "07-07-2021",
        "08-07-2021",
        "09-07-2021",
        "12-07-2021",
        "13-07-2021",
        "14-07-2021",
        "15-07-2021",
        "16-07-2021"
      ],

      bacen: {
        dev: 320,
        req: 420
      }
    };
  },
  methods: {
    varrer() {

      console.log(Date())

      const total = document.querySelectorAll("tr").length;

      for (let index = 0; index < total; index++) {
        var before = 0;
        if (index == 0) {
          before = 0;
        } else {
          before = index - 1;
        }

        let data = document
          .querySelectorAll(".body-work")
          [index].querySelectorAll("td")[0].innerText;

        let columnOneCurrent = document
          .querySelectorAll(".body-work")
          [index].querySelectorAll("td")[1];

        let columnOneBefore = document
          .querySelectorAll(".body-work")
          [before].querySelectorAll("td")[1];

        let columnTwoCurrent = document
          .querySelectorAll(".body-work")
          [index].querySelectorAll("td")[2];

        let columnTwoBefore = document
          .querySelectorAll(".body-work")
          [before].querySelectorAll("td")[2];

        let columnThreeCurrent = document
          .querySelectorAll(".body-work")
          [index].querySelectorAll("td")[3];

        let columnThreeBefore = document
          .querySelectorAll(".body-work")
          [before].querySelectorAll("td")[3];

        let columnFourCurrent = document
          .querySelectorAll(".body-work")
          [index].querySelectorAll("td")[4];

        let columnFourBefore = document
          .querySelectorAll(".body-work")
          [before].querySelectorAll("td")[4];

        let columnFiveCurrent = document
          .querySelectorAll(".body-work")
          [index].querySelectorAll("td")[5];

        let columnFiveBefore = document
          .querySelectorAll(".body-work")
          [before].querySelectorAll("td")[5];

        let columnSixCurrent = document
          .querySelectorAll(".body-work")
          [index].querySelectorAll("td")[6];

        let columnSixBefore = document
          .querySelectorAll(".body-work")
          [before].querySelectorAll("td")[6];

        let columnSevenCurrent = document
          .querySelectorAll(".body-work")
          [index].querySelectorAll("td")[7];

        let columnSevenBefore = document
          .querySelectorAll(".body-work")
          [before].querySelectorAll("td")[7];

        let columnEightCurrent = document
          .querySelectorAll(".body-work")
          [index].querySelectorAll("td")[8];

        let columnEightBefore = document
          .querySelectorAll(".body-work")
          [before].querySelectorAll("td")[8];

        let columnNineCurrent = document
          .querySelectorAll(".body-work")
          [index].querySelectorAll("td")[9];

        let columnNineBefore = document
          .querySelectorAll(".body-work")
          [before].querySelectorAll("td")[9];

        let columnTenCurrent = document
          .querySelectorAll(".body-work")
          [index].querySelectorAll("td")[10];

        let columnTenBefore = document
          .querySelectorAll(".body-work")
          [before].querySelectorAll("td")[10];

        //Primeira condição
        if (data == "03-03-2020") {
          columnOneCurrent.innerText = 100;
        } else if (parseInt(columnOneBefore.innerText) > 0) {
          let sub = parseInt(columnOneBefore.innerText) - 16;

          if (sub <= 0) {
            columnOneCurrent.innerText = "C";
          } else {
            columnOneCurrent.innerText = sub;
          }
        }

        //Segunda condição
        if (columnOneCurrent.innerText == "C") {
          columnTwoCurrent.innerText = 100;
        } else if (parseInt(columnTwoBefore.innerText) > 0) {
          let sub = parseInt(columnTwoBefore.innerText) - 16;

          if (sub <= 0) {
            columnTwoCurrent.innerText = "C";
          } else {
            columnTwoCurrent.innerText = sub;
          }
        }

        //Terceira condição
        if (columnTwoCurrent.innerText == "C") {
          columnThreeCurrent.innerText = 100;
        } else if (parseInt(columnThreeBefore.innerText) > 0) {
          let sub = parseInt(columnThreeBefore.innerText) - 16;

          if (sub <= 0) {
            columnThreeCurrent.innerText = "C";
          } else {
            columnThreeCurrent.innerText = sub;
          }
        }

        //Terceira condição
        if (columnTwoCurrent.innerText == "C") {
          columnThreeCurrent.innerText = 100;
        } else if (parseInt(columnThreeBefore.innerText) > 0) {
          let sub = parseInt(columnThreeBefore.innerText) - 16;

          if (sub <= 0) {
            columnThreeCurrent.innerText = "C";
          } else {
            columnThreeCurrent.innerText = sub;
          }
        }

        //Quarta condição
        if (columnThreeCurrent.innerText == "C") {
          columnFourCurrent.innerText = 100;
        } else if (parseInt(columnFourBefore.innerText) > 0) {
          let sub = parseInt(columnFourBefore.innerText) - 16;

          if (sub <= 0) {
            columnFourCurrent.innerText = "C";
          } else {
            columnFourCurrent.innerText = sub;
          }
        }

        //Quinta condição
        if (columnFourCurrent.innerText == "C") {
          columnFiveCurrent.innerText = 100;
        } else if (parseInt(columnFiveBefore.innerText) > 0) {
          let sub = parseInt(columnFiveBefore.innerText) - 16;

          if (sub <= 0) {
            columnFiveCurrent.innerText = "C";
          } else {
            columnFiveCurrent.innerText = sub;
          }
        }

        //Sexta condição
        if (columnFiveCurrent.innerText == "C") {
          columnSixCurrent.innerText = 100;
        } else if (parseInt(columnSixBefore.innerText) > 0) {
          let sub = parseInt(columnSixBefore.innerText) - 16;

          if (sub <= 0) {
            columnSixCurrent.innerText = "C";
          } else {
            columnSixCurrent.innerText = sub;
          }
        }

        //Setima condição
        if (columnSixCurrent.innerText == "C") {
          columnSevenCurrent.innerText = 100;
        } else if (parseInt(columnSevenBefore.innerText) > 0) {
          let sub = parseInt(columnSevenBefore.innerText) - 16;

          if (sub <= 0) {
            columnSevenCurrent.innerText = "C";
          } else {
            columnSevenCurrent.innerText = sub;
          }
        }

        //Oitava condição
        if (columnSevenCurrent.innerText == "C") {
          columnEightCurrent.innerText = 100;
        } else if (parseInt(columnEightBefore.innerText) > 0) {
          let sub = parseInt(columnEightBefore.innerText) - 16;

          if (sub <= 0) {
            columnEightCurrent.innerText = "C";
          } else {
            columnEightCurrent.innerText = sub;
          }
        }

        //Nona condição
        if (columnEightCurrent.innerText == "C") {
          columnNineCurrent.innerText = 100;
        } else if (parseInt(columnNineBefore.innerText) > 0) {
          let sub = parseInt(columnNineBefore.innerText) - 16;

          if (sub <= 0) {
            columnNineCurrent.innerText = "C";
          } else {
            columnNineCurrent.innerText = sub;
          }
        }

        //dez condição
        if (columnNineCurrent.innerText == "C") {
          columnTenCurrent.innerText = 100;
        } else if (parseInt(columnTenBefore.innerText) > 0) {
          let sub = parseInt(columnTenBefore.innerText) - 16;

          if (sub <= 0) {
            columnTenCurrent.innerText = "C";
          } else {
            columnTenCurrent.innerText = sub;
          }
        }

      }

       
      console.log(Date())
    }
  },


  mounted(){
    this.varrer()
  }
};
</script>

<style scoped>
table {
  font-size: 14px;
}

td,
th {
  border: 1px solid blueviolet;
  padding: 0px 14px;
  text-align: center;
  cursor: pointer;
}
</style>>

