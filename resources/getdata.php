<?php 
// MySQL database connection code
$connection = mysqli_connect("localhost","root","","dbgraficosadi") or die("Error " . mysqli_error($connection));

//Fetch productos data
$sql = "SELECT * FROM alumno";

$result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));

//create an array
$array = array();

$i = 0;
while($row = mysqli_fetch_assoc($result)){  
    $producto = $row['nombre'];
    $unidades_vendidas = $row['calificacion'];
    $array['cols'][] = array('type' => 'string'); 
    $array['rows'][] = array('c' => array( array('v'=> $producto), array('v'=>(int)$unidades_vendidas)) );
}

$data = json_encode($array);

echo $data;
?>