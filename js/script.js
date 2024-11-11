import { Genre } from "../components/Genre.js"
import { del } from "../components/Ad.js"
import { Movie } from "../components/Movie.js"
import { movies } from "./db.js"
import { reload } from "./utils.js"

const genres = ["Animation", "Drama"]

const moviesPlace = document.querySelector('.promo__interactive-list') 
const genresPlace = document.querySelector('.promo__menu-list ul') 

reload(genres, genresPlace, Genre)
reload(movies, moviesPlace, Movie)
reload(del, New )

