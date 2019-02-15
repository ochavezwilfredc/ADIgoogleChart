<?php
/**
 * Created by PhpStorm.
 * User: crist
 * Date: 14/02/2019
 * Time: 14:57
 */

// MySQL database connection code
$connection = mysqli_connect("localhost", "root", "", "dbslim") or die("Error " . mysqli_error($connection));
//Fetch productos data
$sql = "SELECT * FROM alumno";
$result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));
//create an array
$array = array();
//$i = 0;
while ($row = mysqli_fetch_assoc($result)) {
    $nombre = $row['nombre'];
    $calificacion = $row['calificacion'];
    $array['cols'][] = array('type' => 'string');
    $array['rows'][] = array('c' => array(array('v' => $nombre), array('v' => (float)$calificacion)));
}
$data = json_encode($array);
echo $data;