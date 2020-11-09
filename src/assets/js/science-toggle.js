var img1;
var img2;

function initScienceInfoContent(image1, image2) {
    img1 = image1
    img2 = image2
    img1.style.cursor = "pointer";
    img2.style.cursor = "pointer";
    img1.addEventListener("click", imgHandler1);
    img2.addEventListener("click", imgHandler2);
}


function imgHandler1(event) {

    img1.style.display = "none";
    img2.style.display = "block"

}

function imgHandler2(event) {
    img1.style.display = "block";
    img2.style.display = "none";

}