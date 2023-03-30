var homePage = `<div class="homePage">
<div class="hero">
    <h1>SeaSide Coffee</h1>
</div>
<div class="homeText">
<h1>Take a sip of the sea.</h1>
<div class="homeBox">
    <div class="boxPic"></div>
    <div class="boxText">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, expedita ratione quasi consequatur dignissimos, harum doloribus sint aspernatur numquam ipsa atque assumenda voluptas laboriosam accusantium ex recusandae possimus nobis perspiciatis iure minima minus dolorem explicabo! Illum, reiciendis asperiores rerum dolore accusantium maiores velit, eaque, laboriosam doloribus consequatur neque corrupti aut.
    </div>
</div>
</div>
</div>`

var menuPage = ``

var aboutPage = `<div class="aboutPage">
<div class="hero">
    <h1>About</h1>
</div>
<h1>Our misson</h1>
</div>`

var contactPage = `<div class="contactPage">
<div class="hero">
    <h1>Contact</h1>
</div>
<h1>Get in touch!</h1>
</div>`

function initListeners() {
    $("nav a").on("click", function (e) {
        let btnID = e.currentTarget.id;
        let pageID = btnID + "Page";
        changePage(pageID);
    });
}

function changePage(pageContent){
    $("#app").html(eval(pageContent));
}

$(document).ready(function () {
    // changePage("homePage");
    initListeners();
});