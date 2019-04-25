// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
// Tomado de https://www.datos.gov.co/Agricultura-y-Desarrollo-Rural/Producci-n-Leche-Litros-D-a-DEPARTAMENTO-DE-BOYAC-/3urw-7985
var requestURL = 'https://www.datos.gov.co/resource/3urw-7985.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';

request.send();
request.onload = function() {
  var cantleche = request.response;
  getData(cantleche);
}
    
function getData(jsonObj) {

  var filas = jsonObj.slice(0,700);

  var pachavita = 0;
  var chinavita = 0;
  var tunja = 0;
  var garagoa = 0;
  var guateque = 0;

  for(var i = 0; i < filas.length; i++) {
    if(filas[i].municipio == "PACHAVITA") {
      if(filas[i].total_litros_d_a == null ) {
        pachavita += 0;
      } else { 
        pachavita += Number(filas[i].total_litros_d_a);
      }
    }
    if(filas[i].municipio == "CHINAVITA") {
      if(filas[i].total_litros_d_a == null ) {
        chinavita += 0;
      } else { 
        chinavita += Number(filas[i].total_litros_d_a);
      }
    }
    if(filas[i].municipio == "TUNJA") {
      if(filas[i].total_litros_d_a == null ) {
        tunja += 0;
      } else { 
        tunja += Number(filas[i].total_litros_d_a);
      }
    }
    if(filas[i].municipio == "GARAGOA") {
      if(filas[i].total_litros_d_a == null ) {
        garagoa += 0;
      } else { 
        garagoa += Number(filas[i].total_litros_d_a);
      } 
    }
    if(filas[i].municipio == "GUATEQUE") {
      console.log(guateque);
      if(filas[i].total_litros_d_a == null ) {
        guateque += 0;
      } else { 
        guateque += Number(filas[i].total_litros_d_a);
      }
    }
  }

var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Pachavita", "Chinavita", "Tunja", "Garagoa", "Guateque"],
    datasets: [{
      data: [pachavita, chinavita, tunja, garagoa, guateque],
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#FBFF17', '#FF0000'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 2,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
}