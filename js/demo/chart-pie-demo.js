// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
// Tomado de https://www.datos.gov.co/Agricultura-y-Desarrollo-Rural/Producci-n-Leche-Litros-D-a-DEPARTAMENTO-DE-BOYAC-/3urw-7985
var requestpieURL = 'https://www.datos.gov.co/resource/3urw-7985.json';
var requestpie = new XMLHttpRequest();
requestpie.open('GET', requestpieURL);
requestpie.responseType = 'json';

requestpie.send();
requestpie.onload = function() {
  var cantleche = requestpie.response;
  getDataLE(cantleche);
}
    
function getDataLE(jsonObj) {

  var leche = jsonObj.slice(0,500);

  var pachavita = 0;
  var chinavita = 0;
  var tunja = 0;
  var garagoa = 0;1
  var guateque = 0;

  for(var i = 0; i < leche.length; i++) {
    if(leche[i].municipio == "PACHAVITA") {
      if(leche[i].total_litros_d_a == null ) {
        pachavita += 0;
      } else { 
        pachavita += Number(leche[i].total_litros_d_a);
      }
    }
    if(leche[i].municipio == "CHINAVITA") {
      if(leche[i].total_litros_d_a == null ) {
        chinavita += 0;
      } else { 
        chinavita += Number(leche[i].total_litros_d_a);
      }
    }
    if(leche[i].municipio == "TUNJA") {
      if(leche[i].total_litros_d_a == null ) {
        tunja += 0;
      } else { 
        tunja += Number(leche[i].total_litros_d_a);
      }
    }
    if(leche[i].municipio == "GARAGOA") {
      if(leche[i].total_litros_d_a == null ) {
        garagoa += 0;
      } else { 
        garagoa += Number(leche[i].total_litros_d_a);
      } 
    }
    if(leche[i].municipio == "GUATEQUE") {
      if(leche[i].total_litros_d_a == null ) {
        guateque += 0;
      } else { 
        guateque += Number(leche[i].total_litros_d_a);
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
      backgroundColor: ['#17F420', '#CF0A0A', '#F2EE24', '#24F2D9', '#E423BA'],
      hoverBackgroundColor: ['#000000', '#000000', '#000000', '#000000', '#000000'],
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