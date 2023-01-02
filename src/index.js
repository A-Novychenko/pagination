// import articlesTpl from './templates/articles.hbs';
import './css/common.css';

import NewsApiService from './js-components/news-api';
import LoadMoreBtn from './js-components/load-more-btn';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles-container'),
};

const newsApiService = new NewsApiService();
const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', fetchArticles);

function onSearch(e) {
  e.preventDefault();

  clearArticlesContainer();
  newsApiService.resetPage();
  newsApiService.query = e.currentTarget.elements.query.value;
  if (newsApiService.query === '') {
    alert('Поле поиска не должно быть пустым!');
    return;
  }
  fetchArticles();
}

function fetchArticles() {
  newsApiService.fetchArticles().then(articles => {
    createMarkup(articles);
    loadMoreBtn.enable();
  });
  loadMoreBtn.show();
  loadMoreBtn.disable();
}

function createMarkup(arr) {
  const markup = arr.reduce(
    (acc, { url, urlToImage, title, author, description }) => {
      return (
        acc +
        `  <li>
            <a href="${url}" target="_blank" rel="noopener noreferrer">
                <article>
                    <img src="${urlToImage}" alt="" width="480">
                    <h2>${title}</h2>
                    <p>Posted by: ${author}</p>
                    <p>${description}</p>
                </article>
            </a>
         </li>`
      );
    },
    ''
  );
  refs.articlesContainer.insertAdjacentHTML('beforeend', markup);
}

function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}
