# YouTube Upload Notifier for Discord

This project sends a Discord notification using webhooks when a specific YouTube channel uploads a new video.

Every hour, the script checks if the channel's latest video is a new one and notifies the channel with a custom message if it is.

## Notification
Here's what the default notification looks like:

![Example of what the notification looks like](https://i.imgur.com/IrwXjvB.png)

## Prerequisites
- [YouTube channel ID](#fetching-your-youtube-channel-id)
- [Discord webhook](#creating-your-discord-webhook)
- [Google API](#creating-your-youtube-api-key)
- [.env file](#creating-your-env-file)

## Fetching Your YouTube Channel ID
In order to fetch the latest video from your channel, you will first need to get your unique channel ID. Please note that <ins>your custom channel URL will not work</ins>. Be sure to copy it, we will need it for the .env file.

Here's where you can find it:

![Screenshot of where your channel ID can be found](https://i.imgur.com/nhQ031g.png)

## Creating Your Discord Webhook
The next step is an easy one. You will need to create a Discord webhook on the channel you would like to receive the notifications. 

To do so, you can start by clicking on the gear icon on the text channel to access the channel settings and then head to the integrations tab. You can then press the "create webhook" button and customize it as needed by adding a name and profile picture. <ins>Don't forget to copy the webhook URL</ins>, as we will need it later. 

![Step by step screenshot of how to create a webhook](https://i.imgur.com/H3xmTGj.png)

## Creating Your YouTube API Key
The next and trickiest step will be to create your API key. This will allow you to fetch data from Google's servers directly without needing to go through their website. You can access the API console here: https://console.cloud.google.com/apis/credentials

Creating a key is actually quite simple:

![Screenshot of how to create an API key on the Google console](https://imgur.com/2boGZYG.png)

Be sure to keep that in your clipboard, it's the final thing we will need for this. 

## Creating Your .ENV File
The final step will be creating the .env file at the root of the project's directory. You will have to include the 3 things you have copied thus far as follows:

![Screenshot of contents of .env file](https://imgur.com/LQPxR2H.png)

## Running the Script
There you have it! Everything is ready to go! All you have to do to execute the script is run `npm start` in the console. The first verification will happen 60 minutes after the script is started. 