function Movie(data) {
    const li = document.createElement('li');
    const del = document.createElement('div');

    li.classList.add('promo__interactive-item');
    del.classList.add('delete');

    li.innerHTML = data.title;

    li.append(del);

    li.onclick = () => {
        const promo__genre = document.querySelector('.promo__genre');
        const promo__bg = document.querySelector('.promo__bg');
        const promo__title = document.querySelector('.promo__title')
        const promo__descr = document.querySelector('.promo__descr')
        const promo__ratings = document.querySelector('.promo__ratings span')
        promo__ratings.innerHTML = data.year;
        promo__descr.innerHTML = data.director;
        promo__title.innerHTML = data.title;
        promo__genre.innerHTML = data.genre;
        promo__bg.style.backgroundImage = `url(${data.poster})`;
    };
    return li;
}

export { Movie };
