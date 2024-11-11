const del = document.querySelectorAll('.promo__adv img')
del.forEach((block) => {
        block.remove();
});

function New() {
    const img = document.createElement('img')
    img.src = "../img/Без названия.jpg"
    
}
New()

export {del, New}
