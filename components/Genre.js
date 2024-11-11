function Genre(genre) {
    const li = document.createElement('li')
    const link = document.createElement('a')

    link.classList.add('promo__menu-item')
    link.innerHTML = genre
    link.href = "#"

    li.append(link)
    return li
}

export { Genre }