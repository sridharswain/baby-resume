let excalimation = true



const onReady = () => {
   
}

$(document).ready(function () {

    // Add Navigation
    $('.dots li').click(function () {
        console.log("Active")
        $('.active').removeClass('active');
        $(this).addClass('active');
    });

    // Add exclaimation blink
    setInterval(() => {
        let excalimationComponent = document.getElementById("exclaimation")
        excalimationComponent.innerText = excalimation
            ? "Hi there"
            : "Hi there!"
        excalimation = !excalimation
    }, 500)


});
