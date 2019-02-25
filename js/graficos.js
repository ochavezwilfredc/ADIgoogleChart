// cargar la API de visualización
google.charts.load('current', {
    packages: ['corechart', 'bar', 'line']
});



function drawChartPie() {
    var data = google.visualization.arrayToDataTable([
        ['Nombre', 'Calificación'],
        ['kelvin', 5],
        ['ivan', 4],
        ['lesly', 3],
        ['florita', 2],
        ['emilia', 1]
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
        chartArea: {
            width: '50%'
        },
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
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Month');
    data.addColumn('number', 'Tokyo');
    data.addColumn('number', 'New York');
    data.addColumn('number', 'Berlin');
    data.addColumn('number', 'London');
    data.addRows([
        ['Enero', 7.0, -0.2, -0.9, 3.9],
        ['Febrero', 6.9, 0.8, 0.6, 4.2],
        ['Marzo', 9.5, 5.7, 3.5, 5.7],
        ['Abril', 14.5, 11.3, 8.4, 8.5],
        ['Mayo', 18.2, 17.0, 13.5, 11.9],
        ['Junio', 21.5, 22.0, 17.0, 15.2],
        ['Julio', 25.2, 24.8, 18.6, 17.0],
        ['Agosto', 26.5, 24.1, 17.9, 16.6],
        ['Septiembre', 23.3, 20.1, 14.3, 14.2],
        ['Octubre', 18.3, 14.1, 9.0, 10.3],
        ['Noviembre', 13.9, 8.6, 3.9, 6.6],
        ['Diciembre', 9.6, 2.5, 1.0, 4.8]
    ]);

    // Set chart options
    var options = {
        'title': 'Temperaturas Promedio de las Ciudades',
        hAxis: {
            title: 'Mes'
        },
        vAxis: {
            title: 'Temperatura'
        }
    };

    // Crea una instancia y dibuja el gráfico.
    var chart = new google.visualization.LineChart(document.getElementById('container_linea'));
    chart.draw(data, options);
}

function drawChartPieDinamico() {
    // call ajax function to get sports data
    var jsonData = $.ajax({
        url: "resources/getData.php",
        dataType: "json",
        async: false
    }).responseText;
    //The DataTable object is used to hold the data passed into a visualization.
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


// Establecer una devolución de llamada para que se ejecute cuando
// se carga el API de visualización de Google.
google.charts.setOnLoadCallback(drawChartPie); //pastel
google.charts.setOnLoadCallback(drawMultSeriesBar); // barras
google.charts.setOnLoadCallback(drawChartLine); //lineas
google.charts.setOnLoadCallback(drawChartPieDinamico); //pastel dinámico