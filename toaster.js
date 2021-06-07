// ==UserScript==
// @name         Toaster
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Best event 2 toast script on the block!
// @author       https://github.com/joaobb/
// @match        *://*/*
// @icon         https://fkhadra.github.io/react-toastify/img/favicon.ico
// @grant        none
// ==/UserScript==

// Usage: Send an event like this: window.dispatchEvent(new CustomEvent("triggerToaster", { detail: "=== 👋 Hello World 🌎 ===" }))

const toaster = (event, cont) => {
    const content = event.detail

    const el = document.createElement('div')
    el.style = "background: #252525; padding: 22px 30px; border-radius: 8px; font-family: monospace; font-size: 15px; color: white; box-shadow:0 2px 7px 1px black; margin: 8px 0;"
    el.innerText = content
    cont.appendChild(el)
    setTimeout(() => cont.removeChild(el), 5000)

}

(function() {
    const container = document.createElement('div')
    container.id= "tampermonkey-toasts-container"
    container.style= "z-index: 9999; position: fixed; top: 20px; right: 20px;"
    document.body.appendChild(container)

    window.addEventListener("triggerToaster", (ev) => toaster(ev, container))
})();
