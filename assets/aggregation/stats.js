db.posts.aggregate( [
    { $group: {
        _id: "$user",
        avg: { $avg: "$price" },
        min: {$min: "$price"},
        max: {$max: "$price"},
    }}
])