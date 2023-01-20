const express = require('express');
const fs = require('fs');
const ytdl = require("ytdl-core");
const app = express();
app.listen(8080, () => {
    console.log('Server Works !!! At port 3000');
});

const BASE_PATH = `https://www.youtube.com/watch?v=`;

function videoDownload(url, youtubeId) {
    ytdl(url).pipe(fs.createWriteStream(`${youtubeId}.mp4`));
}

app.get("/download", (req, res) => {
    const youtubeId = req.query.urlId;
    const url = BASE_PATH + youtubeId;
    videoDownload(url, youtubeId);
    res.status(200);
});
