const { MongoClient } = require('mongodb');
require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000

const uri = process.env.MONGO_CONNECTION_STRING;
const client = new MongoClient(uri);

app.post("/api/:anime/:episode/:timestamp/:firstwatching/:platform/:module_json_version", async (req, res) => {
    let anime = req.params.anime;
    let episode = req.params.episode;
    let timestamp = req.params.timestamp;
    let firstwatching = req.params.firstwatching;
    let platform = req.params.platform;
    let module_json_version = req.params.module_json_version;

    myobj = {
        "Module JSON Version": module_json_version,
        "Anime": anime,
        "Episode": episode, 
        "Timestamp": timestamp,
        "First Watching": firstwatching,
        "Platform": platform
    }

    let db = await client.db("Anime");
                db.collection("Queue")
                .insertOne(myobj, function(err, res) {
                    if (err) throw err;
                    console.log("1 document inserted");
                  });

    return res.json("Success!")
})

client.connect(err => {
    if(err){ console.error(err); return false;}
    // connection to mongo is successful, listen for requests
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
});