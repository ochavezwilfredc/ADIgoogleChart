CREATE DATABASE dbgraficosadi;
USE dbgraficosadi;

CREATE TABLE `alumno` (
  `idalumno` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `calificacion` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO `alumno` (`idalumno`, `nombre`, `apellido`, `edad`, `calificacion`) VALUES
(1, 'kelvin', 'olano', 24, 5),
(2, 'lesly', 'pintado', 24, 4),
(3, 'cristobal', 'olano', 27, 3),
(4, 'ivan', 'olano', 19, 3.5),
(5, 'milagros', 'pintado', 17, 2),
(6, 'emilia', 'chávez', 30, 5),
(7, 'walter', 'olano', 20, 1);


ALTER TABLE `alumno`
  ADD PRIMARY KEY (`idalumno`);

ALTER TABLE `alumno`
  MODIFY `idalumno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;COMMIT;


