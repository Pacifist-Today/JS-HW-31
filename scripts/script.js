"use strict";

(function () {
    const arrStr = []
    const bodyElem = document.body
    const bodyChilds = bodyElem.childNodes
    const ulList = bodyChilds[1]
    const ulNodes = ulList.childNodes
    for (let ulChilds of ulNodes) {
        if (ulChilds instanceof HTMLElement) {
            console.log(ulChilds)
            let liText = ulChilds.innerText
            arrStr.push(liText)
        }
    }
    console.log(arrStr)
})()