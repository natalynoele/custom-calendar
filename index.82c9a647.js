const e=document.querySelector(".gallery__list"),t=document.querySelector(".search-field"),n=document.querySelector("#search-field__input");t.addEventListener("submit",(function(t){t.preventDefault(),e.innerHTML="",n=l,a(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${n}&api-key=pJnhjsndYoXEeiZxcLsx3UMkwINk9PiQ`).then((e=>{console.log(e.response.docs),0===e.response.docs.length&&console.log("Empty"),s(e.response.docs.map((e=>{function t(){return e.abstract.length>120?e.abstract.slice(0,119)+"...":e.abstract}const n=t(),a=new Date(e.pub_date),s=(new Intl.DateTimeFormat).format(a);function l(){return e.headline.main.length>50?e.headline.main.slice(0,49)+"...":e.headline.main}const r=l(),i=e.web_url,o=e.multimedia;function c(){return 0===o.length?"https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg":`https://static01.nyt.com/${o[0].url}`}return{descr:n,date:s,title:r,source:i,image:c(),alt:"New`s image"}})))}));var n})),n.addEventListener("input",(function(e){l=e.target.value.trim()}));async function a(e){const t=await fetch(e);if(!t.ok)throw new Error(responce.statusText);return t.json()}function s(t){const n=t.map((e=>`<li class="gallery__item">\n                    <p class="gallery__category">Job searching</p>\n                    <img class="gallery__img" src="${e.image}" alt="${e.alt}"/>\n                    <button class="gallery__favorite">Add to favorite <svg width="16" height="16">\n                    <use href="../images/sprite.svg#icon-heart"></use></svg></button>\n                    <h3 class="gallery__header">${e.title}</h3>\n                    <p class="gallery__text">${e.descr}</p>\n                    <div class="gallery__item-bottom_wrap">\n                        <span class="gallery__date">${e.date}</span>\n                        <a href="${e.source}" target="_blank" rel="noreferrer noopener" class="gallery__link">Read more</a>\n                    </div>\n                </li>`));n.splice(2,0,'<li class="gallery__item"></li>');const a=n.join("");console.log(a),e.insertAdjacentHTML("beforeend",a)}a("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=pJnhjsndYoXEeiZxcLsx3UMkwINk9PiQ").then((e=>{console.log(e.results),s(function(e){const t=e.map((e=>{const t=e.abstract.length>120?e.abstract.slice(0,119)+"...":e.abstract,n=new Date(e.published_date);return{descr:t,date:(new Intl.DateTimeFormat).format(n),title:e.title.length>50?e.title.slice(0,49)+"...":e.title,source:e.url,image:0===e.media.length?"https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg":e.media[0]["media-metadata"][2].url,alt:0===e.media.length?"Image is no avalible":e.media[0].caption}})).slice(0,8);return console.log(t),t}(e.results))}));let l="";const r=[1,2,3].join("");console.log(r);
//# sourceMappingURL=index.82c9a647.js.map
