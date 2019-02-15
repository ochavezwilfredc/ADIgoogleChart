// var alumnos = [];
// axios({
//     url: 'http://api-graficos/api/alumnos', //Endpoint
//     method: 'GET',  //Método
//     timeout: 3000,  //Tiempo máximo de espera
//     responseType: 'json',  //Tipo de respuesta (Por defecto es JSON)
// }).then(function (response) {
//     Si todo OK te imprime la respuesta
//     alumnos = response.data;
//     console.log(response.data); //Datos de la respuesta
//     console.log(response.status); //Estatus
//     console.log(response.statusText); //Mensaje del estatus
//     console.log(response.headers); // Encabezados
// }).catch(function (error) {
//     //Si hay error el catch lo imprime
//     console.log(error.response); //Objeto respuesta
//     console.log(error.response.data); // Respuesta del servidor
//     console.log(error.response.status); //Código de error
//     console.log(error.response.statusText); //Mensaje del error
//
// });
// console.log(alumnos)



// cargar la api de visualización
google.charts.load('current', {packages: ['corechart', 'bar', 'line']});
// Establecer una devolución de llamada para que se ejecute cuando se carga la API de visualización de Google.
google.charts.setOnLoadCallback(drawChartPie);
google.charts.setOnLoadCallback(drawMultSeriesBar);
google.charts.setOnLoadCallback(drawChartLine);



// function drawChart() {
// var alumnos = [];
// var url = 'http://api-graficos/api/alumnos';
// fetch(url)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         alumnos = data;
//         // console.log('data = ', alumnos);
//     })
//     .catch(function (err) {
//         console.error(err);
//     });
// console.log('data = ', alumnos);

function drawChartPie() {
// llamar a la función ajax para obtener datos de los alumnos
//     var jsonData = $.ajax({
//         url: "getdata.php",
//         // url: "http://api-graficos/api/alumnos",
//         dataType: "json",
//         async: false
//     }).responseText;
//    // El objeto DataTable se utiliza para mantener los datos pasados en una visualización.
//     var data = new google.visualization.DataTable(jsonData);
    var data = google.visualization.arrayToDataTable([
        ['Nombre', 'Calificación'],
        ['kelvin',   5],
        ['ivan',     4],
        ['lesly',    3],
        ['florita',  2],
        ['emilia',   1]
    ]);
    // Configuración del gráfico
    var options = {
        title: 'Calificaciones',
        is3D: true,

      };
    // Para hacer el gráfico circular.
    var chart = new google.visualization.PieChart(document.getElementById('idpastel'));

    chart.draw(data, options);
}


function drawMultSeriesBar() {
    var data = google.visualization.arrayToDataTable([
        ['Nombre', 'Edad', 'Calificación'],
        ['kelvin', 24, 5],
        ['maria', 19, 2],
        ['lesly', 22, 3]
    ]);

    var options = {
        title: 'Ejemplo de gráficos de barras',
        chartArea: {width: '50%'},
        hAxis: {
            // title: 'Calificaciones barras',
            minValue: 0
        },
        vAxis: {
            title: 'Calificaciones',
            is3D: true,
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('idbarras'));
    chart.draw(data, options);
}

function drawChartLine() {
    var data = google.visualization.arrayToDataTable([
        ['Año', 'Ventas', 'Gastos'],
        ['2014',  1000,      400],
        ['2015',  1170,      460],
        ['2016',  660,       1120],
        ['2017',  1030,      540],
        ['2018',  2022,      1200],
    ]);

    var options = {
        title: 'Desempeño de la compañía',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('idlinea'));

    chart.draw(data, options);
}



