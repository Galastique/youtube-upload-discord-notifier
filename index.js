const axios = require("axios");
require("dotenv").config();

// Fetches last video uploaded by specific YouTube channel
async function getLatestVideo() {
    const video = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${process.env.GOOGLE_API_KEY}&channelId=${process.env.CHANNEL_ID}&order=date&part=snippet&maxResults=1`);
    return video.data.items[0];
}

// Checks if video was uploaded within the past hour
async function checkIfNew() {
    const latestVideo = await getLatestVideo();
    const now = Date.now();
    const uploadDate = new Date(latestVideo.snippet.publishedAt).getTime();
    const minutes = Math.round((now - uploadDate) / (60 * 1000));
 
    if (uploadDate + 60 * 60 * 1000 > now) {
        console.log("A video was uploaded within the past hour");
        await notify(latestVideo, minutes);
    }
}

// Notifies Discord server
async function notify(video, minutes) {
    const content = `**${video.snippet.channelTitle}** uploaded **[${video.snippet.title}](https://youtu.be/${video.id.videoId})** ${minutes} minute${minutes == 1 ? "" : "s"} ago`;
    await axios.post(process.env.WEBHOOK_URL, {content});
}

console.log("Successfully started script!");
setInterval(checkIfNew, 60 * 60 * 1000);