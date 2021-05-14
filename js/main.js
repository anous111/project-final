jQuery(function($) {
    $(window).on('scroll', function() {
		if ($(this).scrollTop() >= 200) {
			$('.navbar').addClass('fixed-top');
		} else if ($(this).scrollTop() == i) {
			$('.navbar').removeClass('fixed-top');
		}
	});
	
}); 

async function load() {
    var res = await fetch("https://forkify-api.herokuapp.com/api/search?&q=pizza");

        data = await res.json();

const a = document.querySelector(".A img");
const b =  document.querySelector(".A h3");
const c = document.querySelector(".A p");
const d = document.querySelector(".A a");

const a1 = document.querySelector(".B img");
const b1 =  document.querySelector(".B h3");
const c1 = document.querySelector(".B p");
const d1 = document.querySelector(".B a");

const a2 = document.querySelector(".C img");
const b2 =  document.querySelector(".C h3");
const c2 = document.querySelector(".C p");
const d2 = document.querySelector(".C a");

    a.src = data.recipes[0].image_url;
    b.innerHTML = data.recipes[0].title;
    c.innerHTML = data.recipes[0].publisher;
    d.innerHTML= "Read More";

    a1.src = data.recipes[1].image_url;
    b1.innerHTML = data.recipes[1].title;
    c1.innerHTML = data.recipes[1].publisher;
    d1.innerHTML= "Read More";

    a2.src = data.recipes[2].image_url;
    b2.innerHTML = data.recipes[2].title;
    c2.innerHTML = data.recipes[2].publisher;
    d2.innerHTML= "Read More";
}
        
load();