## Operaciones CRUD

Cuando nos conectamos al servidor MongoDB ingresamos a la base de datos _test_, a partir de ese momento podemos realizar diferentes operacion como la creacion de una base datos, seleccion de la misma y creacion de coleccion en ella.

### Tabla de Contenidos

* [CREATE: Insercion de Documentos](#create)
* [READ: Obtencion de Documentos](#read)
* [UPDATE: Modificacion de Documentos](#update)
* [DELETE: Eliminacion de Documentos](#delete)


| comando | descripcion |
|---|---|
| __show dbs__ | muestra todas las bases de datos que posean colecciones |
| __use `<database>`__  | selecciona o crea la base de datos en caso que no exista |
| __db.createCollection(`'name'`)__ | crea una coleccion de documentos en la base de datos actual |
| __show collections__ | lista las colecciones de documentos de la base de datos actual
| __db.`<collection>`__ | objeto necesario para la ejecucion de los metodos CRUD
| __.drop()__ | elimina la coleccion de la base de datos |

### CREATE

Estas operaciones las utilizaremos en caso que necesitemos agregar elementos a la coleccion con la que estemos trabajando, una de las ventajas que tiene este motor de base de datos, es la creacion de la colleccion cuando insertamos objetos en la misma.

| comando | descripcion |
|--|--|
| __.insertOne(`{Object}`)__ | agrega un registro a la coleccion de documentos. |
| __.insertMany(`[ObjectArray]`)__ | agrega multiples registros a la coleccion. |
| __.upsert(`{filter}`,`{Object}`)__ | actualiza o agrega un nuevo documento. |

### READ

cuando hayamos agregado algunos documentos a la coleccion, podremos consultarlos utilizando el __metodo find()__, al cual deberemos pasarle como parametro un objeto con los criterios de busqueda. Luego MongoDB realizar la comparacion de nuestro objeto con los documentos de la base de datos y devolvera los resultados coincidentes.

| comando | descripcion |
|--|--|
| __.find()__| muestra todos los documentos de la coleccion |
| __.find(`{filter}`)__ | muestra todos los objetos coincidentes. |
| __.findOne(`{filter}`)__ | muestra el primer objeto que coincida con los criterios de busqueda |

### UPDATE

En ocasiones en necesario modificar algunos de los documentos creados con anterioridad, para ello podemos utilizar el __metodo update()__ que permite modificar los valores o agregar claves a los objetos previamente cargados.

| comando | descripcion |
|--|--|
| __.updateOne(`{filter}`, `{Object}`)__ | actualiza el primer elemento que coincida con los criterios del filtro.
| __.updateMany(`{filter}`,`{Object}`)__ | actualiza todos los objetos que cumplan los requisitos del filtro.
| __.replaceOne(`{filter}`,`{object}`)__ | reemplaza un documento de la coleccion por otro objeto.

### DELETE

En una base de datos de Documentos, podremos eliminar directamente aquellos objetos que no sean necesarios, ya que, normalmente, al no existir una relacion previa, no debemos preocuparnos por la integridad de las demas colecciones.

| comando | descripcion |
|--|--|
| __.deleteOne(`{filter}`)__ | elimina el primer elemento que coincida con los criterios del filtro. |
| __.deleteMany(`{filter}`)__ | elimina todos los documentos que coincidan los criterios de eliminacion. |

[Volver al inicio](./readme.md)