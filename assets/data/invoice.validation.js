db.createCollection ( "invoice", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [ "number", "seller", "customer", "date", "saleDetail", "total" ],
            properties: {
                _id: {},
                number: {
                    bsonType: ["string"],
                    description: "la factura consta de letras y numeros, por eso debe ser string y ademas es obligatoria, en caso que se necesite realizar algun reclamo"
                },
                date: {
                    bsonType: "date",
                    description: "fecha de la factura"
                },
                saleDetail: {
                    bsonType: ["array"],
                    description: "array de objetos adquiridos por el cliente",
                    minItems: 1
                },
                total: {
                    bsonType: ["double"],
                    description: "total de la factura"
                },
                status: {
                    enum: ["pendiente","cancelado","entregado", "devuelto","rechazado"]
                }
            }
        }
    }
} )