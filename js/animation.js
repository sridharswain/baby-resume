let excalimation=true

setInterval(() => {
    let excalimationComponent = document.getElementById("exclaimation")
    excalimationComponent.innerText = excalimation 
        ? "Hi there"
        : "Hi there!"
    excalimation = !excalimation
}, 500)