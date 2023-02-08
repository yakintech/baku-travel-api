const { default: mongoose } = require("mongoose");
const { Schema } = mongoose;

const placeSchema = new Schema({
    name: String,
    description:String,
    images:[],
    latitude: String,
    longitude: String,
    mainImage: String,
    openDate: Date,
    closeDate: Date,
    category:String //Museum, Hotels, Restoran
})


const placeModel = mongoose.model('place', placeSchema);

module.exports = {
    placeModel
}