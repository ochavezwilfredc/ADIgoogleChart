// cargar la api de visualización
google.charts.load('current', {packages: ['corechart', 'bar', 'line']});

// Establecer una devolución de llamada para que se ejecute cuando se carga la API de visualización de Google.
google.charts.setOnLoadCallback(drawChartPie);
google.charts.setOnLoadCallback(drawMultSeriesBar);
google.charts.setOnLoadCallback(drawChartLine);


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
    var chart = new google.visualization.PieChart(document.getElementById('chart_container_pastel'));

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

    var chart = new google.visualization.BarChart(document.getElementById('chart_container_barras'));
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

    var chart = new google.visualization.LineChart(document.getElementById('chart_container_linea'));

    chart.draw(data, options);
}



