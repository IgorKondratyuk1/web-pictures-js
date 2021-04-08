const accordion = (triggersSelector, contentSelector) => {
    const btns = document.querySelectorAll(triggersSelector),
          content = document.querySelectorAll(contentSelector);


    content.forEach(item => {
        item.classList.add('animated', 'fadeInDown');
    });

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (!this.classList.contains('active')) {
                btns.forEach(item => {
                    item.classList.remove('active', 'active-style');
                });
                this.classList.add('active', 'active-style');
            }
        });
    });
};

export default accordion;