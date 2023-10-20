# Introduccion a MongoDB

Esto es una guia para los alumnos de la capacitacion de __Bases de datos NoSQL__ que cursan los dias _Lunes, Miercoles y Viernes de 14hs a 17hs_, donde se recapitularan los conceptos vistos en clase.

## Software
* [MongoDB Community](https://www.mongodb.com/try/download/community)
* [MongoShell](https://www.mongodb.com/try/download/shell)

## Introduccion Bases de Datos

![Interaccion FronEnd, BackEnd y DB](assets/img/network.jpg)

Estructura que se utiliza para organizar y contener datos, optimizando el espacio disponible. Pueden de diferentes tipos y su contenido se distribuye en base a uso o funcionamiento.

### Relacional

La informacion se estructura en tablas y la funcion de las mismas consiste en definir grupos de datos. Para optimizar el almacenamiento se definen restricciones y tablas que vinculan un elemento con otro, evitando asi la duplicidad de datos. Estas se componen de los siguientes elementos:

* __Campos__(Columna): Conjunto de Datos de un mismo tipo
* __Registros__(Fila): Conjunto de Datos asociados entre si
* __Datos__(Celda): Minima porcion de Informacion

```
|TABLE:SPECIES|  |TABLE:COLORS |  |TABLE: ANIMALS                 |
|id | name    |  | id | name   |  |id | name   | specie  | color  |
|---|---------|  |----|--------|  |---|--------|---------|--------|
| 1 | perro   |  | 1  | rojo   |  | 1 |clifford|    1    | 3      |
| 2 | gato    |  | 2  | verde  |  | 2 |lassie  |    1    | 4      |
| 3 | caballo |  | 3  | azul   |  | 3 |simba   |    5    | 4      |
| 4 | delfin  |  | 4  | marron |  | 4 |kimba   |    5    | 6      |
| 5 | leon    |  | 5  | violeta| 
| 6 | tigre   |  | 6  | blanco |
```

En caso que necesitaramos mostrar el nombre, la especie y el color en un formato legible, deberiamos realizar una consulta de UNION para que nuestro servidor de base de datos combine los campos de las tablas que debe mostrar. En esta situacion solamente se ocupa espacio en memoria, para cargar temporalmente el valor de los nuevos campos.

```
SELECT a.name, s.name AS especie, c.name AS color 
FROM animals
JOIN species AS s ON s.id = a.specie
JOIN colros AS c ON c.id = a.color;

| name   | specie  | color  |
|--------|---------|--------|
|clifford|  perro  | rojo   |
|lassie  |  perro  | marron |
|simba   |  leon   | marron |
|kimba   |  leon   | blanco |

```

Existen diferentes __motores de Base de datos relaciones__ y migrar la informacion de uno a otro es relativamente facil, debido a que manejan un mismo estandar, a pesar que su sintaxis sea levemente diferente. Entre los motores mas populares, podemos encontrar los siguientes.

* MySQL
* MariaDB
* PostGree
* SQL Server
* Microsoft SQL
* SQLite

### Documentos (NoSQL)