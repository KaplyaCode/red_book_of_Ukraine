//navigation///////////////////////////////////
for (let li of tree.querySelectorAll('li')) {
    let span = document.createElement('span');
    span.classList.add('show');
    li.prepend(span);
    span.append(span.nextSibling);
}

tree.onclick = function(event) {
    if (event.target.tagName != 'SPAN') return;
    let childrenContainer = event.target.parentNode.querySelector('ul');

    // have no children
    if (!childrenContainer) return;

    childrenContainer.hidden = !childrenContainer.hidden;
}

function showCategory(category) {
    let output = "";
    for (let item of category) {
        output += '<div class="slider__item"><div class="slider__item-content"><img class="slider_img" src="' + item.img + '"><div class="slider__title">' + item.title + '</div><div class="slider__text">Таксономічна належність: ' + item.taxonomic + '<br>Природоохоронний статус виду: ' + item.status + '<br>Чисельність і причини її зміни: ' + item.count + '<br>Діяльність людини: ' + item.danger + '</div></div></div>';
    }

    $('.slider__inner').slick('unslick').html(output);
    setSlider();
}

function showSpecies(item) {
    let output = "";
    output += '<div class="slider__item"><div class="slider__item-content"><img class="slider_img" src="' + item.img + '"><div class="slider__title">' + item.title + '</div><div class="slider__text">Таксономічна належність: ' + item.taxonomic + '<br>Природоохоронний статус виду: ' + item.status + '<br>Чисельність і причини її зміни: ' + item.count + '<br>Діяльність людини: ' + item.danger + '</div></div></div>';

    $('.slider__inner').slick('unslick').html(output);
    setSlider();
}

//change category/////////////////////////////////////////
$('.coral').click(function() {
    $('.active').removeClass('active');
    $('.coral').addClass('active').hide(300).show(300);
    showCategory(corals);
});
$('.parasite').click(function() {
    $('.active').removeClass('active');
    $('.parasite').addClass('active').hide(300).show(300);
    showCategory(parasite);
});
$('.ring_worm').click(function() {
    $('.active').removeClass('active');
    $('.ring_worm').addClass('active').hide(300).show(300);
    showCategory(ring_worm);
});
$('.tarantula').click(function() {
    $('.active').removeClass('active');
    $('.tarantula').addClass('active').hide(300).show(300);
    showCategory(tarantula);
});
$('.shellfish').click(function() {
    $('.active').removeClass('active');
    $('.shellfish').addClass('active').hide(300).show(300);
    showCategory(shellfish);
});
$('.cat').click(function() {
    $('.active').removeClass('active');
    $('.cat').addClass('active').hide(300).show(300);
    showCategory(cat);
});
$('.cactus').click(function() {
    $('.active').removeClass('active');
    $('.cactus').addClass('active').hide(300).show(300);
    showCategory(cactus);
});
$('.mashroom').click(function() {
    $('.active').removeClass('active');
    $('.mashroom').addClass('active').hide(300).show(300);
    showCategory(mashroom);
});
$('.seaweed').click(function() {
    $('.active').removeClass('active');
    $('.seaweed').addClass('active').hide(300).show(300);
    showCategory(seaweed);
});
$('.moss').click(function() {
    $('.active').removeClass('active');
    $('.moss').addClass('active').hide(300).show(300);
    showCategory(moss);
});
$('.lichens').click(function() {
    $('.active').removeClass('active');
    $('.lichens').addClass('active').hide(300).show(300);
    showCategory(lichens);
});