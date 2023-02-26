const { default: mongoose } = require("mongoose");
const { Schema } = mongoose;

const placeSchema = new Schema({
    name: String,
    description: String,
    images: [],
    latitude: String,
    longitude: String,
    mainImage: String,
    openDate: String,
    closeDate: String,
    category: { type: Schema.Types.ObjectId, ref: 'category' } // reference to the category model
});


const placeModel = mongoose.model('place', placeSchema);

module.exports = {
    placeModel
}