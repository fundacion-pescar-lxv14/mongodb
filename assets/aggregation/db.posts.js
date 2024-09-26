db.posts.aggregate([ { 
    $group: {
        _id: "$user",
        average_price: { $round: [ { $avg: "$price" }, 2]},
        most_cheapest: { $min: "$price" },
        most_expensive: { $max: "$price" },
} } ] )


db.posts.aggregate([ 
    { $group: {
        _id: "$user",
        first_post: { $first: "$postTitle" },
        average_price: { $avg: "$price"},
        lowest_price: { $min: "$price"},
        highest_price: { $max: "$price"},        
        last_post: { $last: "$postTitle" },
        total: {}
    }}
])

db.posts.aggregate([{
    $lookup: {
        from: "users",
        localField: "user",
        foreignField: "username",
        as: "user_info"
    }}
])

db.users.aggregate([
    { $lookup: {
        from: "posts",
        localField: "username",
        foreignField: "user",
        as: "posts"
    } }
])

    db.posts.aggregate([
        {
            $project: {
                postTitle: 1,
                price: 1,
            }
        }
    ])

db.users.aggregate([ 
    { 
        $project: {
            id: { $type: "$id" },
            username: { $type: "$username"},
            userData: { $type: "$userData" }
        }
    }
])