const { categoryModel } = require("../models/categoryModel");
const { fileUpload } = require("../services/fileService");

const CategoryController = {
    getAll: (req, res) => {

        categoryModel.find({}, (err, docs) => {
            if (!err) {
                res.json(docs)
            }
            else {
                res.status(500).json(err)
            }
        })

    },
    getById: (req, res) => {

        let id = req.params.id;

        categoryModel.findById(id, (err, doc) => {
            if (!err) {
                res.json(doc)
            }
            else {
                res.status(500).json(err);
            }
        })

    },
    add: async (req, res) => {
        const files = req.files;
        const body = req.body;
        const mainImageUrl = await fileUpload([files.image]);
        console.log(mainImageUrl);
        let category = new categoryModel({
            name: body.name,
            description: body.description,
            image: mainImageUrl[0]
        });
        category.save((saveErr, doc) => {
            if (!saveErr)
                return res.json(doc)
            else
                res.status(500).json(saveErr)
        })
    },
    remove: (req, res) => {

        let id = req.params.id;

        categoryModel.findByIdAndDelete(id, (err, doc) => {
            if (!err) {
                res.json(doc)
            }
            else {
                res.status(500).json(err);
            }
        })

    }
}


module.exports = {
    CategoryController
}