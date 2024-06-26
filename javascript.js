document.addEventListener("DOMContentLoaded", () => {

    const usernameText = document.querySelector("#username_text")
    const username = document.querySelector(".username")
    const continueWithout = document.querySelector("#continue_without")

    usernameText.addEventListener("focus", () => {
        continueWithout.style.visibility = "visible";

    })

    usernameText.addEventListener("blur", () => {
        continueWithout.style.visibility = "hidden";

    })



    usernameText.addEventListener("change", () => {
        username.style.borderColor = "red";

    })

    const continueButton = document.querySelector(".continue_button")

    continueButton.addEventListener("mouseover", () => {
        continueButton.style.backgroundColor = "blue";
    })
    continueButton.addEventListener("mouseout", () => {
        continueButton.style.backgroundColor = "#2D81FF";
    })

    $(".facebook_button").hover(
        function () {
            $(".facebook_button").fadeTo("slow", 0.5, function () { });
        },
        function () {
            $(".facebook_button").fadeTo("slow", 1, function () { });
        }
    )

    $(".google_button").on("click", function () {
        $(".google_button").animate({
            opacity: 0.5
        }, 1000, function () {

        });
    });




})   