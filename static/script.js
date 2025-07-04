let isStreaming = true;

function toggleStreaming() {
  const video = document.getElementById("video-stream");
  const button = document.getElementById("btn");
  const streamURL = video.getAttribute("data-src"); // store Flask-rendered URL

  if (isStreaming) {
    video.src = "";
    button.textContent = "Start Streaming";
  } else {
    video.src = streamURL;
    button.textContent = "Stop Streaming";
  }

  isStreaming = !isStreaming;
}
