const { placeModel } = require("../models/Place");

const placeController = {
    getAll: (req, res) => {

        placeModel.find({}, (err, docs) => {
            if (!err) {
                res.json(docs)
            }
            else {
                res.status(500).json(err)
            }
        })

    },
    getById: (req,res) => {

        let id = req.params.id;

        placeModel.findById(id, (err,doc) => {
            if(!err){
                res.json(doc)
            }
            else{
                res.status(500).json(err);
            }

        })

    },
    add: (req, res) => {

        let place = new placeModel({
            name: req.body.name,
            description: req.body.description,
            images: req.body.images,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            mainImage: req.body.mainImage,
            openDate: req.body.openDate,
            closeDate: req.body.closeDate,
            category: req.body.category,
        });

        place.save((saveErr, doc) => {
            if (!saveErr)
                res.json(doc)
            else
                res.status(500).json(saveErr)
        })
    }
}


module.exports = {
    placeController
}