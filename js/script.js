const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
// Здесь я задал неизменную переменную в виде const (константа), ибо не знаю, будет ли она меняться в будущем. Имя переменной numberOfFlims. Команда prompt задаёт вопрос посетителю страницы. '' - это поле ответа. 

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false, 
};

const a = prompt('Последний просмотренный фильм?', ''),
        b = prompt('Ваша оценка?'),
        c = prompt('Последний просмотренный фильм?', ''),
        d = prompt('Ваша оценка?');
        
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
        
console.log(personalMovieDB);






