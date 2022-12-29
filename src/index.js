// import articlesTpl from './templates/articles.hbs';
import './css/common.css';

// import NewsApiService from './js/news-service';
// import LoadMoreBtn from './js/components/load-more-btn';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles-container'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  const searchQuery = e.currentTarget.elements.query.value;

  const options = {
    headers: {
      Authorization: 'e5d2cb43efb04745abf19514edb10ab3',
    },
  };

  const url = `https://newsapi.org/v2/everything?q=${searchQuery}&language=ru&pageSize=5&page=1`;

  fetch(url, options).then(resp => resp.json().then(console.log));
}

function onLoadMore() {}
