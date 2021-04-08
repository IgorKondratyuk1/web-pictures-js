const drop = () => {
    const fileInputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, (e) => preventDefaults(e), false);
        });
    });

    function preventDefaults(event) {
        event.preventDefault();
        event.stopPropagation();
    }

    function highlight(item) {
        item.closest('.file_upload').style.border = '2px solid yellow';
        item.closest('.file_upload').style.backgroundColor= 'rgba(0,0,0, 0.7)';
    }

    function unhighlight(item) {
        item.closest('.file_upload').style.border = 'none';
        console.log('un');
        if (item.closest('.calc_form')) {
            console.log('calc');
            item.closest('.file_upload').style.backgroundColor = '#fff';
        }
        else {
            item.closest('.file_upload').style.backgroundColor = '#ededed';
        }
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highlight(input), false);
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unhighlight(input), false);
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;
            let dots; 
            const nameArr = input.files[0].name.split('.');
            nameArr[0].length > 6 ? dots = "..." : dots = ".";
            const fileName = nameArr[0].substring(0, 6) + dots + nameArr[1];

            input.previousElementSibling.textContent = fileName;
        });
    });
};

export default drop;