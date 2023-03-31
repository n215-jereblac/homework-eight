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

var menuPage = `<div class="menuPage">
<div class="hero">
    <h1>Menu</h1>
</div>
<div class="menuText">
<h1>Check out our refreshing treats!</h1>
<div class="menuBox">
    <div class="drinks">
        <h1>DRINKS</h1>
        <h2>Coffee(s)</h2>
        <p>Latte</p>
        <p>Mocha</p>
        <p>Americano</p>
        <p>Frappechino</p>
        <p>Cappuccino</p>
        <h2>Hot drinks(s)</h2>
        <p>Hot chocolate</p>
        <h2>Tea(s)</h2>
        <p>Green</p>
        <p>Black</p>
        <p>Earl gray</p>
        <p>Chamomile</p>
        <p>Oolong</p>
    </div>
    <div class="treats">
        <h1>TREATS</h1>
        <h2>Bakery</h2>
        <p>Bagel</p>
        <p>Blueberry muffin</p>
        <p>Chocolate chip muffin</p>
        <p>Blueberry scone</p>
        <h2>Dessert(s)</h2>
        <p>Glazed donut</p>
        <p>Brownie</p>
        <p>Sugar cookie</p>
        <p>Frosted cookie</p>
        <p>Chocolate chip cookie</p>
    </div>
</div>
</div>
</div>`

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
    changePage("homePage");
    initListeners();
});