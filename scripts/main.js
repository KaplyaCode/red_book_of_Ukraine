function setSlider() {
    $('.slider__inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>'
    });
}

setSlider();

$('.sidebar__logo').click(function() {
    $('.slider__inner').slick('unslick').html(
        '<div class="slider__item"><div class="slider__item-content"><div class="slider__title">"Коли висохне останнє дерево і помре остання тварина, ви зрозумієте, що у Всевишнього для вас немає іншої Землі"</div><div class="slider__author">Б.Д. Орлі</div></div></div><div class="slider__item"><div class="slider__item-content"><div class="slider__title">"Набувши надлюдської сили, ми самі стали нелюдяними"</div><div class="slider__author">Альберт Швейцер</div></div></div><div class="slider__item"><div class="slider__item-content"><div class="slider__title">"За час мого життя ми нанесли природі більше шкоди, ніж за всю історію людства"</div><div class="slider__author">Девід Аттенборо</div></div></div>'
    );
    setSlider();

    $('.active').removeClass('active').hide(300).show(300);
});