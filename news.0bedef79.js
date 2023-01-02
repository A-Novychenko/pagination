!function(){function e(e){return e&&e.__esModule?e.default:e}var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var n={};function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t,n){t&&r(e.prototype,t);n&&r(e,n);return e};var i={headers:{Authorization:"e5d2cb43efb04745abf19514edb10ab3"}},a=function(){"use strict";function r(){e(t)(this,r),this.searchQuery="",this.page=1}return e(n)(r,[{key:"fetchArticles",value:function(){var e=this,t="".concat("https://newsapi.org/v2","/everything?q=").concat(this.searchQuery,"&language=en&pageSize=5&page=").concat(this.page);return fetch(t,i).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).then((function(t){var n=t.articles;return e.page+=1,n})).catch((function(e){return alert("Что-то пошло не так! ERROR:".concat(e))}))}},{key:"resetPage",value:function(){this.page=1}},{key:"query",get:function(){return this.searchQuery},set:function(e){return this.searchQuery=e}}]),r}(),s=function(){"use strict";function r(n){var i=n.selector,a=n.hidden,s=void 0!==a&&a;e(t)(this,r),this.refs=this.getRefs(i),s&&this.hide()}return e(n)(r,[{key:"getRefs",value:function(e){var t={};return t.button=document.querySelector(e),t.label=t.button.querySelector(".label"),t.spinner=t.button.querySelector(".spinner"),t}},{key:"enable",value:function(){this.refs.button.disabled=!1,this.refs.label.textContent="Показать ещё",this.refs.spinner.classList.add("is-hidden")}},{key:"disable",value:function(){this.refs.button.disabled=!0,this.refs.label.textContent="Загружаем...",this.refs.spinner.classList.remove("is-hidden")}},{key:"show",value:function(){this.refs.button.classList.remove("is-hidden")}},{key:"hide",value:function(){this.refs.button.classList.add("is-hidden")}}]),r}(),o={searchForm:document.querySelector(".js-search-form"),articlesContainer:document.querySelector(".js-articles-container")},c=new a,u=new s({selector:'[data-action="load-more"]',hidden:!0});function l(){c.fetchArticles().then((function(e){var t;t=e.reduce((function(e,t){var n=t.url,r=t.urlToImage,i=t.title,a=t.author,s=t.description;return e+'  <li>\n            <a href="'.concat(n,'" target="_blank" rel="noopener noreferrer">\n                <article>\n                    <img src="').concat(r,'" alt="" width="480">\n                    <h2>').concat(i,"</h2>\n                    <p>Posted by: ").concat(a,"</p>\n                    <p>").concat(s,"</p>\n                </article>\n            </a>\n         </li>")}),""),o.articlesContainer.insertAdjacentHTML("beforeend",t),u.enable()})),u.show(),u.disable()}o.searchForm.addEventListener("submit",(function(e){if(e.preventDefault(),function(){o.articlesContainer.innerHTML=""}(),c.resetPage(),c.query=e.currentTarget.elements.query.value,""===c.query)return void alert("Поле поиска не должно быть пустым!");l()})),u.refs.button.addEventListener("click",l)}();
//# sourceMappingURL=news.0bedef79.js.map