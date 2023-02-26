const { default: mongoose } = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({
    name: String,
    description: String,
    image: String,
    places: [{ type: Schema.Types.ObjectId, ref: 'place' }] // reference to the place model
});


const categoryModel = mongoose.model('category', categorySchema);

module.exports = {
    categoryModel
}