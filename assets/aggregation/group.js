db.posts.aggregate( [ {   
        $match: { 
        stock: {$exists: true},  
        price: { $exists: true } 
    } }, {   
        $group: {
        _id: { username: "$user"},
        inversion: { $sum: { $multiply: ["$price", "$stock"] } },
        count: { $sum: 1 }
    } }
] )