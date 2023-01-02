import './css/common.css';
import PituresApi from './js-components/picture-api';

const options = {
  root: null,
  rootMargin: '300px',
  threshold: 1.0,
};

const refs = {
  form: document.querySelector('.js-search-form'),
  container: document.querySelector('.js-articles-container'),
  target: document.querySelector('.js-guard'),
};

const pituresApi = new PituresApi();
console.log(pituresApi);
const observer = new IntersectionObserver(fetch, options);

refs.form.addEventListener('submit', onSearchPictures);
observer.observe(refs.target);

function onSearchPictures(e) {
  e.preventDefault();

  pituresApi.resetPage();
  clearMarkup();
  pituresApi.picture = e.currentTarget.query.value;
  fetch();
}

function fetch() {
  pituresApi.fethcPicturesApi().then(({ totalHits, hits }) => {
    const maxElements = pituresApi.pageNum * pituresApi.perPage;
    console.log(totalHits);
    console.log(maxElements);

    if (maxElements === totalHits) {
      observer.unobserve(refs.target);
      refs.container.insertAdjacentHTML(
        'beforeend',
        '<p>Всё, закончились!!!</p>'
      );
      return;
    }
    createMarkup(hits);
  });
}

function createMarkup(arr) {
  const markup = arr.reduce((acc, { webformatURL }) => {
    return (
      acc +
      `<li>
        <img src="${webformatURL}" alt="" width="480">
    </li>`
    );
  }, '');

  refs.container.insertAdjacentHTML('beforeend', markup);
}

function clearMarkup() {
  refs.container.innerHTML = '';
}
