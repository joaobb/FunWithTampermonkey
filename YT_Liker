// ==UserScript==
// @name         Liker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Auto-likes videos from whom you're subscribed!
// @author       https://github.com/joaobb/
// @match        https://www.youtube.com/watch*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    const getCurrentTime = () => document.getElementsByClassName("video-stream")[0].currentTime / 60
    const getIsSubscribed = () => Boolean(document.querySelector("tp-yt-paper-button.ytd-subscribe-button-renderer[subscribed]"))
    const getLikeButton = () => document.querySelector("ytd-toggle-button-renderer.ytd-menu-renderer")
    const vidLikeEvent = new CustomEvent("triggerToaster", { detail: "=== 👍 Vídeo Likado 👍 ===" })

    let currentTime = 0
    let isSubscribed = false
    const intervalID = setInterval(() => {
        currentTime = getCurrentTime()
        isSubscribed = getIsSubscribed()
        if (currentTime > 0.5 && isSubscribed) {
            getLikeButton().click();
            clearInterval(intervalID)
            window.dispatchEvent(vidLikeEvent)
        }
    }, 1000)
    })();
