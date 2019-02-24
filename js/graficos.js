// cargar la API de visualización
google.charts.load('current', {packages: ['corechart', 'bar', 'line']});

// Establecer una devolución de llamada para que se ejecute cuando
// se carga el API de visualización de Google.
google.charts.setOnLoadCallback(drawChartPie);//pastel
google.charts.setOnLoadCallback(drawMultSeriesBar);// barras
google.charts.setOnLoadCallback(drawChartLine); //lineas
google.charts.setOnLoadCallback(drawChartPieDinamico); //pastel dinámico


function drawChartPie() {
    var data = google.visualization.arrayToDataTable([
        ['Nombre', 'Calificación'],
        ['kelvin',   5],
        ['ivan',     4],
        ['lesly',    3],
        ['florita',  2],
        ['emilia',   1]
    ]);
    // Configuración JSON para personalizar el gráfico
    var options = {
        title: 'Calificaciones',
        is3D: true,

      };

    // Intancia para visualizalizar el gráfico
    var chart = new google.visualization.PieChart(document.getElementById('container_pastel'));
    chart.draw(data, options);
}

function drawMultSeriesBar() {
    var data = google.visualization.arrayToDataTable([
        ['Nombre', 'Edad', 'Calificación'],
        ['kelvin', 24, 5],
        ['ivan', 19, 2],
        ['lesly', 22, 3],
        ['walter', 35, 4.5],
        ['nancy', 40, 5],
        ['alex', 18, 2.5]
    ]);

    // Configuración JSON para personalizar el gráfico
    var options = {
        title: 'Ejemplo de gráficos de barras',
        chartArea: {width: '50%'},
        hAxis: {
            // title: 'Calificaciones barras',
            minValue: 0
        },
        vAxis: {
            title: 'Calificaciones'
        }
    };

    // Intancia para visualizalizar el gráfico
    var chart = new google.visualization.BarChart(document.getElementById('container_barras'));
    chart.draw(data, options);
}

function drawChartLine() {
    var data = google.visualization.arrayToDataTable([
        ['Año', 'Ventas', 'Gastos'],
        ['2010',  500,       300],
        ['2011',  600,       450],
        ['2012',  700,       500],
        ['2013',  900,       800],
        ['2014',  1000,      400],
        ['2015',  1170,      460],
        ['2016',  660,       1120],
        ['2017',  1030,      540],
        ['2018',  2022,      1200],
    ]);

    // Configuración JSON para personalizar el gráfico
    var options = {
        title: 'Desempeño de la compañía',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    // Intancia para visualizalizar el gráfico
    var chart = new google.visualization.LineChart(document.getElementById('container_linea'));
    chart.draw(data, options);
}

function drawChartPieDinamico() {
    // llamar a la función ajax para obtener datos de los alumnos
    var jsonData = $.ajax({
        url: "getData.php",
        dataType: "json",
        async: false
    }).responseText;

    // El objeto DataTable se utiliza para mantener los datos pasados
    // en una visualización y dibujar el gráfico
    var data = new google.visualization.DataTable(jsonData);

    // Configuración JSON para personalizar el gráfico
    var options = {
        title: 'Calificaciones (PHP&MySQL)',
        is3D: true,

    };

    // Intancia para visualizalizar el gráfico
    var chart = new google.visualization.PieChart(document.getElementById('container_pasteldim'));

    chart.draw(data, options);
}
