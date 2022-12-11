//db.restaurant.find()

//db.restaurant.find({cuisine:'chinese food'})

//db.restaurant.find({halal:true})

//db.restaurant.find({"address.city":'biet hanina'})

//db.restaurant.find({name:'alhaj'})

//db.restaurant.find({"address.coordinates":[81, 82, 16.5]})

//db.restaurant.find().sort({name: 1})

//db.restaurant.find().sort({"address.city": 1})

//db.restaurant.update({name: 'albeik'}, {$set:{name: 'megaPasta'}})

//db.restaurant.updateOne({name: 'alhaj'}, {$push:{reviews: {date: '11-2-2022', score: 4}}})

//db.restaurant.updateMany({}, { $set: {halal: true}})

//db.restaurant.remove({name: 'alhaj'})

//db.restaurant.remove({})

// ------------------

// db.restaurant.find().forEach(res => print(`restaurant name is: ${res.name}`))

//db.restaurant.find().forEach(res => print(`restaurant city is: ${res.address.city}`))

//db.restaurant.find().forEach(res => print(`restaurant cuisine is: ${res.cuisine}`))


// ------------------

//db.restaurant.find({ name: /^s/ })

//db.restaurant.find().count()

//db.restaurant.find({ reviews: {$elemMatch: {date: '09-2-2022'} } })

// -------------------

//db.restaurant.aggregate([{$unwind:"$reviews"},{$group:{_id:"$name", average:{$avg:"$reviews.score"}}}])

// db.restaurant.aggregate([{$match:{name:'seafood'}},{$unwind:"$reviews"},{$group:{_id:"$name",average:{$avg:"$reviews.score"}}}])