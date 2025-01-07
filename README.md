# YouTube Ad Skipper Chrome Extension  

**YouTube Ad Skipper** is a lightweight Chrome extension designed to improve your YouTube viewing experience by automatically handling ads. It detects ads on YouTube, mutes them, and speeds up playback during unskippable ads, ensuring minimal interruptions while watching your favorite videos.

---

## **Features**
- Automatically detects ads on YouTube.
- Skips skippable ads by clicking the "Skip Ad" button.
- Handles unskippable ads by:
  - Muting the video during ads.
  - Fast-forwarding playback to minimize ad duration.
- Restores normal playback settings after ads end.

---

## **Installation**
1. Clone or download this repository to your computer.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer Mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the folder containing the project files.
5. The extension will be installed and ready to use.

---

## **How It Works**
1. The extension uses a `content.js` script to monitor YouTube's video player.
2. When an ad is detected, it either:
   - Clicks the "Skip Ad" button (if available).
   - Mutes and fast-forwards the video for unskippable ads.
3. After the ad ends, normal playback is restored.

---

## **Files**
- `manifest.json`: Defines the extension's metadata and permissions.
- `content.js`: Contains the logic to detect and handle YouTube ads.

---

## **Usage**
1. Open YouTube and play a video.
2. The extension will automatically handle ads in the background.
3. Enjoy a smoother viewing experience!

---

## **Limitations**
- This extension works based on YouTube's current DOM structure. If YouTube updates its website, the extension may need modifications.
- It does not entirely block ads but minimizes their annoyance by muting and skipping them.

---

## **Disclaimer**
- Use this extension at your own discretion.
- YouTube relies on ads for revenue. Bypassing ads may violate YouTube's terms of service.

---

Contributions, suggestions, and improvements are welcome! Feel free to submit an issue or create a pull request. 😊
