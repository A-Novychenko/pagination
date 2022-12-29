// import articlesTpl from './templates/articles.hbs';
import './css/common.css';

import NewsApiService from './js-components/news-api';
// import LoadMoreBtn from './js/components/load-more-btn';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles-container'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  newsApiService.query = e.currentTarget.elements.query.value;
  newsApiService.fetchArticles(searchQuery);
}

function onLoadMore() {
  newsApiService.fetchArticles(searchQuery);
}

//39min
