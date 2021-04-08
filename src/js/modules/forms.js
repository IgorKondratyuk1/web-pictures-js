import {postData} from '../services/request';

const forms = (state) => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          textarea = document.querySelectorAll('textarea'),
          upload = document.querySelectorAll('[name="upload"]'),
          select = document.querySelectorAll('select');


    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро с вами свяжемся',
        failure: 'Что-то пошло не так...',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    };

    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
    };


    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
        textarea.forEach(item => {
            item.value = '';
        });
        upload.forEach(item => {
            item.previousElementSibling.textContent = 'Файл не выбран';
        });
        select.forEach(item => {
            if (item.id == 'options') {
                item.value = '0';
            }
            else {
                item.value = '';
            }
        });
    };

    upload.forEach(item => {
        item.addEventListener('input', () => {
            let dots; 
            const nameArr = item.files[0].name.split('.');
            nameArr[0].length > 6 ? dots = "..." : dots = ".";
            const fileName = nameArr[0].substring(0, 6) + dots + nameArr[1];

            item.previousElementSibling.textContent = fileName;
        });
    });

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            const loadInput = item.querySelector('[name="upload"'),
                  priceBlock = item.querySelector('.calc-price');

            if (loadInput.value) {
                let statusMessage = document.createElement('div');
                statusMessage.classList.add('status');
                item.parentNode.appendChild(statusMessage);
                item.classList.add('animated', 'fadeOutUp');
                setTimeout(() => {
                    item.style.display = 'none';
                },400);

                let statusImg = document.createElement('img');
                statusImg.setAttribute('src', message.spinner);
                statusImg.classList.add('animated', 'fadeinUp');
                statusMessage.appendChild(statusImg);

                let textMessage = document.createElement('div');
                textMessage.textContent = message.loading;
                statusMessage.appendChild(textMessage);

                const formData = new FormData(item);
                try {
                    formData.append('price', priceBlock.textContent);
                } catch {};

                let api;
                item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;
                console.log(formData);

                postData(api, formData)
                    .then(res => {
                        console.log(res);
                        statusImg.setAttribute('src', message.ok);
                        textMessage.textContent = message.success;
                    })
                    .catch(() => {
                        statusImg.setAttribute('src', message.fail);
                        textMessage.textContent = message.failure;
                    })
                    .finally(() => {
                        clearInputs();
                        try {
                            priceBlock.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
                        } catch{};
                        setTimeout(() => {
                            statusMessage.remove();
                            item.classList.remove('fadeOutUp');
                            item.classList.add('fadeInUp');
                            item.style.display = 'block';
                        }, 5000);
                    });
            }
            else {
                const btn = item.querySelector('.button-order');
                let title = btn.textContent;

                btn.textContent = 'Добавьте файл';
                btn.style.color = 'red';

                setTimeout(() => {
                    btn.textContent = title;
                    btn.style.color = '#fff';
                }, 3000);
            }
        });
    });
};

export default forms;