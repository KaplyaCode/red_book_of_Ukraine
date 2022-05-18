document.querySelector('.search__input').oninput = function() {
    let val = this.value.trim();
    let items = [];
    let elasticItemsList = $('.elastic__items');
    let counter = 0;

    for (let category of allCategoies) {
        for (let species of category) {
            items[counter] = species.title;
            counter++;
        }
    }

    let output = "";
    let maxResults = 10;

    if (val != '') {
        counter = 0;
        items.forEach(function(elem) {
            if (elem.search(val) != -1 && counter <= maxResults) {
                elasticItemsList.css('visibility', 'visible');
                output += '<li>' + elem + '</li>';
                counter++;
            }
        })
        elasticItemsList.html(output);

        let elasticItems = document.querySelectorAll('.elastic__items li');

        for (let item of elasticItems) {
            item.onclick = function() {
                document.querySelector('.search__input').value = this.innerText;
                elasticItemsList.css('visibility', 'hidden');
            };
        }
    } else {
        elasticItemsList.css('visibility', 'hidden');
    }
}

document.querySelector('.search__label img').onclick = function() {
    let val = document.querySelector('.search__input').value.trim();

    for (let category of allCategoies) {
        for (let species of category) {
            if (val == species.title) {
                showSpecies(species);

            }
        }
    }

}