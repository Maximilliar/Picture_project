const drop = () => {
    const fileInputs = document.querySelectorAll('[name="upload"]');
    const fileUpload = document.querySelector('.file_upload');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight(item) {
        item.closest('.file_upload').style.border = "5px dashed #c51abb";
        item.closest('.file_upload').style.backgroundColor = "rgba(161,42,177, 0.3)";
    }

    function unhighlight(item) {
        item.closest('.file_upload').style.border = "none";

        if (item.closest('.calc_form')) {
            item.closest('.file_upload').style.backgroundColor = "#fff";
        } else {
            item.closest('.file_upload').style.backgroundColor = "#ededed";
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
            const arr = input.files[0].name.split('.');

            if (arr[0].lenght > 5) {
                dots = "...";
            } else {
                dots = ".";
            }

            const name = arr[0].split('.')[0].substring(0, 6) + dots + arr[1];
            input.previousElementSibling.textContent = name;
        });
    });
};

export default drop;