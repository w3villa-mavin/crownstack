const mongoose = require('mongoose');
const MONGO_URL= "mongodb+srv://mavin006:nivam9858854554@cluster0-82ezp.mongodb.net/test?retryWrites=true&w=majority"

module.exports.connect = function () {
    return new Promise(async (resolve, reject) => {
        try {
            //create cluster in mongodb atlas https//cloud.mongodb.com
            mongoose.connection.on("connected", function (ref) {
                resolve(mongoose.connection)
            });


            // If the connection throws an error
            mongoose.connection.on("error", function (err) {
                reject(err)
            });

            await mongoose.connect(MONGO_URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                family: 4
            })
        }
        catch (err) {
            reject(err)
        }

    })


}