export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchArticles() {
    const options = {
      headers: {
        Authorization: 'e5d2cb43efb04745abf19514edb10ab3',
      },
    };

    const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&language=ru&pageSize=5&page=${this.page}`;

    fetch(url, options)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        this.page += 1;
      });
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQwery) {
    return (this.searchQuery = newQwery);
  }
}
