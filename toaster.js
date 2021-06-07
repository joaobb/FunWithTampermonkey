// ==UserScript==
// @name         Toaster
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       https://github.com/joaobb/
// @match        *://*/*
// @icon         https://fkhadra.github.io/react-toastify/img/favicon.ico
// @grant        none
// ==/UserScript==

// Usage: Send an event like this: new CustomEvent("triggerToaster", { detail: "=== 👋 Hello World 🌎 ===" })

(function() {
    const toaster = (event) => {
        const content = event.detail

        const el = document.createElement('div')
        el.style = "z-index: 9999; position: fixed; top: 20px; right: 20px; background: #252525; padding: 22px 30px; border-radius: 8px; font-family: monospace; font-size: 15px; color: white; box-shadow:0 2px 7px 1px black;"
        el.innerText = content
        document.body.appendChild(el)
        setTimeout(() => document.body.removeChild(el), 5000)

    }

    window.addEventListener("triggerToaster", toaster)
})();
