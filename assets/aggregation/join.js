db.posts.aggregate([
    { $lookup: {
        from: "users",
        localField: "user",
        foreignField: "username",
        as: "userInformation"
    } }
] )
