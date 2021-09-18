let cEvent = document.querySelector('.btn-alert');

cEvent.addEventListener('click', function (e) {
    alert('button clicked');
});

let changeBackgroundButton = document.querySelector('.btn-change');

// let changeColorBG = () => {
//     document.body.classList.add('red-background');
// };
// changeBackgroundButton.addEventListener('click', changeColorBG);

let toggleColorBG = () => {
    document.body.classList.toggle('red-background');
};
changeBackgroundButton.addEventListener('click', toggleColorBG);
