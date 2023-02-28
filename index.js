const express = require('express');
const { default: mongoose } = require('mongoose');
const placeRouter = require('./router/placeRouter');
const categoryRouter = require('./router/CategoryRouter');
var cors = require('cors')
const fileUpload = require('express-fileupload')
let distance = require("google-distance-matrix");


const app = express();
app.use(cors());

app.use(express.json());
app.use(fileUpload());
app.use(express.urlencoded())

mongoose.connect('mongodb+srv://cagatay:jYjpMvn5WXivq4uh@cluster0.imfaisw.mongodb.net/baku-travel-db')
    .then(res => {
        console.log('Mongodb Connected!!');
    })
    .catch(err => {
        console.log('Error', err);
    })


app.use('/api/places', placeRouter);
app.use('/api/categories', categoryRouter);

// app.get("/test",(req,res)=>{
//     var origins = ['40.342817117185426, 49.967030998099794'];
//     var destinations = ["40.377300230712365, 49.85386185392336", "40.41129250589684, 49.897724340430706"];
//
//     distance.key("AIzaSyBOr8iEaw-JrUGTdOZ5KpuWEmltI0L4GgU");
//
//     distance.matrix(origins, destinations, function (err, distances) {
//         if (!err)
//             if (distances.status == 'OK') {
//                 for (var i=0; i < origins.length; i++) {
//                     for (var j = 0; j < destinations.length; j++) {
//                         var origin = distances.origin_addresses[i];
//                         var destination = distances.destination_addresses[j];
//                         if (distances.rows[0].elements[j].status == 'OK') {
//                             var distance = distances.rows[i].elements[j].distance.text;
//                             console.log('Distance from ' + origin + ' to ' + destination + ' is ' + distance);
//                         } else {
//                             console.log(destination + ' is not reachable by land from ' + origin);
//                         }
//                     }
//                 }
//             }
//             // console.log("asdfa", distances);
//             // res.json(distances.rows);
//     })
//
//     res.send("agillidi");
// })


app.listen(8080, () => {
    console.log('Server is runnig..');
});