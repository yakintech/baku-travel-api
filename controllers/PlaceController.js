const { placeModel } = require("../models/Place");
const { fileUpload } = require("../services/fileService");

const placeController = {
    getAll: (req, res) => {
        if(req.query?.category){
            let query = req.query.category;
            let categories = query.split(",");
            placeModel.find({"category" : { $in : categories}},(err,docs) =>{
                if(err){
                    res.status(500).json(err);
                } else if (docs === null){
                    res.status(404).json({});
                } else{
                    res.status(200).json(docs);
                }
            })
        } else {
            placeModel.find({}, (err, docs) => {
                if (!err) {
                    res.json(docs)
                }
                else {
                    res.status(500).json(err)
                }
            })
        }



    },
    getById: (req, res) => {

        let id = req.params.id;

        placeModel.findById(id, (err, doc) => {
            if (!err) {
                res.json(doc)
            }
            else {
                res.status(500).json(err);
            }

        })

    },
    add: async (req, res) => {
        console.log(req.body);
        console.log(req.files);

        const files = req.files;
        const body = req.body;
        const mainImageUrl = await fileUpload([files.mainImg]);
        const imagesUrl = await fileUpload(files.images);
        let place = new placeModel({
            name: body.name,
            description: body.description,
            images: imagesUrl,
            latitude: body.latitude,
            longitude: body.longitude,
            mainImage: mainImageUrl[0],
            openDate: body.openDate,
            closeDate: body.closeDate,
            category: body.category,
        });
        place.save((saveErr, doc) => {
            if (!saveErr)
                return res.json(doc)
            else
                res.status(500).json(saveErr)
        })
    },
    remove: (req, res) => {

        let id = req.params.id;

        placeModel.findByIdAndDelete(id, (err, doc) => {
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
    placeController
}