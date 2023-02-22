const { default: mongoose } = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({
    name: String,
    description:String,
    image: String
})


const categoryModel = mongoose.model('category', categorySchema);

module.exports = {
    categoryModel
}