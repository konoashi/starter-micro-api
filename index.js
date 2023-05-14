const { MongoClient } = require('mongodb');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000

const uri = process.env.MONGO_CONNECTION_STRING;
const client = new MongoClient(uri);

app.post("/api/:anime/:episode/:timestamp", async (req, res) => {
    let anime = req.params.anime;
    let episode = req.params.episode;
    let timestamp = req.params.timestamp;
    console.log(anime);
    /*let item = await client.db("my_db")
                .collection("my_collection")
                .findOne({my_item: my_item})

    return res.json(item)*/
})

client.connect(err => {
    if(err){ console.error(err); return false;}
    // connection to mongo is successful, listen for requests
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
});