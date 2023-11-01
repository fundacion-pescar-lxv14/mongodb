## CLUSTER DE DATOS

### ReplicaSet

Servidores secundarios que cumplen la funcion de respaldo a los almacenados en el servidor principal, que sincronizan su informacion periodicamente mediante _heartbeats (mensajes periodicos)_

Por ejemplo: si nuestro servidor, posee la direccion 191.186.34.56/27, y queremos habilitar un equipo, dentro de la misma red con nombre "BACKUP_SERVER" y direccion IP 191.186.34.62/27 podriamos aplicar el siguiente comando en el servidor principal, para habilitar un servidor de respaldo identificado como "rs0".

* mongod --auth --replSet `"rs0"` --bind_ip `191.186.34.62`
* mongod --auth --replSet `"rs0"` --bind_ip `backup_server.com`

```
rs.initiate({
  _id :  "rs0",
  members: [
    { _id:  0, host:  "mongodb0.191.186.34.60:27017" }, // ip address
    { _id:  1, host:  "mongodb1.backup_server.com:27017" }, // dns name
  ]
})
```

### Sharding

Servidores secundarios que permiten el almacenamiento horizontal de datos, es decir, que puede utilizarse la capacidad sumarizada de los recursos que posee cada uno.

Por ejemplo: Si tenemos 4 servidores, con una capacidad de almacenamiento de 256GB y 8GB RAM, gracias a esta caracteristica, tendriamos un servidor compartido con una capacidad total de 1024GB y 32GB de RAM.

* sh.addShard(`"191.186.34.60::27017"`)
* sh.addShard(`"shard_server.com::27017"`)
* sh.enableSharding(`"pescar_shop"`)

[Volver al inicio](./readme.md)