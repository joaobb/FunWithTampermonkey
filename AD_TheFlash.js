// ==UserScript==
// @name         AD: The Flash
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       Me
// @match        https://www.youtube.com/*
// @icon         https://www.youtube.com/s/desktop/bb401db8/img/favicon.ico
// @grant        none
// ==/UserScript==

(async function() {
    const getVideoPlayer = () => document.getElementById("player-container");
    const getAdOverlay = () => document.getElementsByClassName("ytp-ad-player-overlay")[0];
    const getVideo = () => document.getElementsByClassName("video-stream")[0]

    const getSkipButton = () => document.getElementsByClassName("ytp-ad-skip-button")[0]
    const getOverlayBt = () => document.getElementsByClassName("ytp-ad-overlay-close-button")[0]

    const getIsWatchPage = () => window.location.pathname.includes("watch")

    const MAX_PLAYBACK_RATE = 16

    const adCloseEvent = new CustomEvent("triggerToaster", { detail: "=== 🙅‍♂️🙅‍♂️ ANÚNCIO EXECUTADO 🙅‍♂️🙅‍♂️ ===" })
    const startEvent = new CustomEvent("triggerToaster", { detail: "👺 RUNNING MID ROLL AD KILLER 👺" })

    function adSkipper() {
        new Promise((res)=> {
            const btInterval = setTimeout(() => {

                const skipButton = getSkipButton()
                if (skipButton) {
                    skipButton.click()
                    window.dispatchEvent(adCloseEvent)
                    clearInterval(btInterval)
                    res()
                }
            }, 1000)
            })
    }

    async function adKiller() {
        if (getIsWatchPage) {
            if (getAdOverlay()) {
                const video = getVideo()
                video.playbackRate = MAX_PLAYBACK_RATE
                video.muted = true

                await adSkipper()
            }

            const overlayAdBt = getOverlayBt()
            if (overlayAdBt) {
                overlayAdBt.click()
                window.dispatchEvent(adCloseEvent)
            }
        }
        setTimeout(adKiller, 1000)
    }

    await (new Promise((res) => {
        const intervalID = setInterval(() => {
            if (getVideoPlayer()) {
                res();
                window.dispatchEvent(startEvent);
                clearInterval(intervalID)
            }}, 1000)}))

    adKiller()
})();
