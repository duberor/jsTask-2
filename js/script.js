'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const movieDB = {
      movies: [
          "Лог",
          "Лига справедливости",
          "Ла-ла лэнд",
          "Одержимость",
          "Скотт Пилигрим против..."
  ]};

  const promoAdv = document.querySelectorAll('.promo__adv img');
  const promoGenre = document.querySelector('.promo__genre');
  const pageBg = document.querySelector('.promo__bg');
  const movList = document.querySelector('.promo__interactive-list');
  const addForm = document.querySelector('.add');
  const addInp = addForm.querySelector('.adding__input');
  const addCheck = addForm.querySelector('[type="checkbox"]');

  function createList (film, parent){
  parent.innerHTML = "";
  film.sort();

  film.forEach((movie, i) => {
      parent.innerHTML += `<li class="promo__interactive-item">${i+1}. ${movie}
                              <div class="delete"></div>
                           </li>`;
  });

  document.querySelectorAll('.delete').forEach((btn, i) => {
   btn.addEventListener('click', () => {
     btn.parentElement.remove();
     film.splice(i, 1);

     createList(film, movList);
   });
  });
  }

  promoAdv.forEach(item => {
    item.remove();
  });

  promoGenre.textContent = 'ДРАМА';
  pageBg.style.backgroundImage = 'url("img/bg.jpg")';

  createList(movieDB.movies, movList);

      addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let addedMovie = addInp.value;
        let favorite = addCheck.checked;
        let lengFilmTitle = addedMovie.length;

        if (addedMovie) {
          if (lengFilmTitle > 21){
            addedMovie = `${addedMovie.substring(0,22)}...`;
          }
          if (favorite){
            console.log("Зробити улюбленим.");
          }
          movieDB.movies.push(addedMovie);
          movieDB.movies.sort();
          createList(movieDB.movies, movList);
        }
        addForm.reset();
  });
});
