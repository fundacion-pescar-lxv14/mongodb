db.createCollection( "users", {
    validator: { $jsonSchema: {
        bsonType: "object",
        required: ["username", "email", "password"],
        properties: {
            _id: {},
            username:{
                bsonType: ["string"],
                minLength: 3,
                maxLength: 20,
                description: "El nombre de usuario debe ser un texto entre 3 y 20 caracteres"
            },
            email:{
                bsonType: ["string"],
                minLength: 8,
                description: "El correo debe tener al menos 8 caracteres y un arroba"
            },
            password:{
                bsonType: ["string"],
                minLength: 8,
                description: "La contraseña debe poseer por lo menos 8 caracteres"
            },
            userData:{
                bsonType: ["object"],
                description: "Datos del usuario",
                properties: {
                    firstName: {
                        bsonType: ["string"],
                        minLength: 2,
                        description: "El nombre debe tener al menos 3 caracteres"
                    },
                    lastName: {
                        bsonType: ["string"],
                        minLength: 3,
                        description: "El apellido debe tener al menos 2 caracteres"
                    },
                    birthDate: {
                        bsonType: ["date"],
                        description: "debe ingresar una fecha de nacimiento valida"
                    },
                    contact: {
                        bsonType: ["array"],
                        description: "Datos de contacto",
                        properties: {
                            name: {
                                bsonType: ["string"],
                                minLength: 3,
                                description: "El nombre debe tener al menos 3 caracteres"
                            },
                            phone:{
                                bsonType: ["string"],
                                minLength: 6,
                            },
                            email:{
                                bsonType: ["string"],
                                minLength: 8
                            }
                        }
                    }
                }
            }
        }
    } }
} );
db.users.createIndex({username: 1}, {unique: true});
db.users.createIndex({email: 1}, {unique: true});