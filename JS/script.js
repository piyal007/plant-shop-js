document.getElementById("product-container").addEventListener("click", function (event) {
    if (event.target.tagName == "BUTTON") {
        const button = event.target
        // console.log(button.parentNode.parentNode.children[0].innerText)
        console.log(button.parentNode.parentNode.children[1].children[1].innerText)
    }
})