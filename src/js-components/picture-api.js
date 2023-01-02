const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '32549780-8d52bdcb46ac07f381f032420';

export default class PituresApi {
  constructor() {
    this.searchPicture = '';
    this.page = 1;
    this.perPage = 10;
  }

  fethcPicturesApi() {
    return fetch(
      `${BASE_URL}?key=${API_KEY}&q=${this.searchPicture}&orientation=horizontal&page=${this.page}&per_page=${this.perPage}`
    )
      .then(resp => {
        if (!resp.ok) {
          throw new Error(this.statusText);
        }
        this.page += 1;

        return resp.json();
      })
      .catch(err => alert(`Ошибка: ${err}`));
  }

  get picture() {
    return this.searchPicture;
  }

  set picture(newSearchPicture) {
    return (this.searchPicture = newSearchPicture);
  }
  get pageNum() {
    return this.page;
  }

  set pageNum(newPageNum) {
    return (this.page = newPageNum);
  }

  resetPage() {
    this.page = 1;
  }
}
