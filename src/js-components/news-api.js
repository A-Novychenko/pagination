const API_KEY = 'e5d2cb43efb04745abf19514edb10ab3';
const BASE_URL = 'https://newsapi.org/v2';
const options = {
  headers: {
    Authorization: API_KEY,
  },
};

export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchArticles() {
    const url = `${BASE_URL}/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;

    return fetch(url, options)
      .then(resp => {
        if (!resp.ok) {
          throw new Error(resp.statusText);
        }

        return resp.json();
      })
      .then(({ articles }) => {
        this.page += 1;

        return articles;
      })
      .catch(err => alert(`Что-то пошло не так! ERROR:${err}`));
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQwery) {
    return (this.searchQuery = newQwery);
  }
}
