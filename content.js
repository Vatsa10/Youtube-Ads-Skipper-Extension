// Monitor the video player for ads and handle them
const handleAds = () => {
    const videoPlayer = document.querySelector('video');
    const adContainer = document.querySelector('.ad-showing');
    const adText = document.querySelector('.ytp-ad-text');
  
    if (adContainer || adText) {
      console.log("Ad detected!");
  
      // Mute the video
      if (videoPlayer && !videoPlayer.muted) {
        videoPlayer.muted = true;
        console.log("Ad muted.");
      }
  
      // Fast-forward the video to the end of the ad
      if (videoPlayer && videoPlayer.currentTime < videoPlayer.duration) {
        videoPlayer.playbackRate = 16; // Maximize speed
        console.log("Ad fast-forwarding.");
      }
    } else {
      // Restore normal playback settings after ad ends
      if (videoPlayer && videoPlayer.muted) {
        videoPlayer.muted = false;
        videoPlayer.playbackRate = 1; // Normal speed
        console.log("Ad ended. Restoring playback.");
      }
    }
  };
  
  // Periodically check for ads
  setInterval(handleAds, 1000);
  