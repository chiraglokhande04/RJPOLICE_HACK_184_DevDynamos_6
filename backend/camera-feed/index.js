const express = require("express");
const Stream = require("node-rtsp-stream");
const cors = require("cors");

const app = express();
const port = 3002;
let stream = null;
let currentRtspStreamUrl = "rtsp://172.20.10.6:8080/h264_ulaw.sdp";

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
    credentials: true,
  })
);

app.get("/stream", (req, res) => {
  const newRtspStreamUrl = req.query.rtsp;

  currentRtspStreamUrl = newRtspStreamUrl;

  if (!stream || currentRtspStreamUrl !== newRtspStreamUrl) {
    if (stream || newRtspStreamUrl === "stop") {
      stream.stop();
    }

    const ffmpegPath = "/opt/homebrew/opt/ffmpeg";

    stream = new Stream({
      name: "Camera Stream",
      streamUrl: newRtspStreamUrl,
      wsPort: 9999,
      ffmpegOptions: {
        ffmpegPath: ffmpegPath,
      },
    });
  }

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  res.status(200).json({ url: `ws://${req.headers.host}` });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
