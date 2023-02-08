const express = require('express');
const { default: mongoose } = require('mongoose');
const placeRouter = require('./router/placeRouter');

const app = express();

app.use(express.json());
app.use(express.urlencoded())

mongoose.connect('mongodb+srv://cagatay:jYjpMvn5WXivq4uh@cluster0.imfaisw.mongodb.net/baku-travel-db')
    .then(res => {
        console.log('Mongodb Connected!!');
    })
    .catch(err => {
        console.log('Error', err);
    })


app.use('/api/places', placeRouter);

app.listen(8080, () => {
    console.log('Server is runnig..');
});
