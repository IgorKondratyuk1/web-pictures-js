import {getData} from '../services/request';

const loadPictures = (wrapperSelector, selectorBtn) => {
    const loadMoreBtn = document.querySelector(selectorBtn),
          wrapper = document.querySelector(wrapperSelector);

    loadMoreBtn.addEventListener('click', function (){
        getData('http://localhost:3000/styles')
        .then(data => {
            this.remove();
            createCards(data);
        })
        .catch(err => {
            console.error(err);
            alert('Что-то пошло не так');
        });
    });

    const createCards = (data) => {
        data.forEach(({src, title, link}) => {
            let card = document.createElement('div');
            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeInUp');

            card.innerHTML = `
                <div class=styles-block>
                    <img src='${src}' alt="style">
                    <h4>${title}</h4>
                    <a href="${link}">Подробнее</a>
                </div>
            `;

            wrapper.appendChild(card);
        });
    };
};

export default loadPictures;