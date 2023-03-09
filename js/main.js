const elPack = document.querySelector('.packman');
const elPlayBoard = document.querySelector('.board');
const elWarn = document.querySelector('.warn');

let X, Y;

elPlayBoard.style.width = `1200px`;
elPlayBoard.style.height = `800px`;

const coord = () => {
    X = parseInt(Math.random(10000)*1000);
    Y = parseInt(Math.random(10000)*1000);
    return (X, Y);
}

const maxX = parseInt(elPlayBoard.style.width) - 100;
const maxY = parseInt(elPlayBoard.style.height) - 100;

elPack.addEventListener('click', () => {
    elPack.classList.remove('packman');
    coord();
    //console.log (X, Y);
    if((X>0)&&(X<maxX)&&(Y>0)&&(Y<maxY)) {
            elPack.style.left = `${X}px`;
            elPack.style.top = `${Y}px`;
            elPack.classList.add('packman');
        }
    else {
        elWarn.innerHTML = 'Вийшов за поле! Спробуй ще!'
        elPack.style.left = `${maxX/2}px`;
        elPack.style.top = `${maxY/2}px`;
        elPack.classList.add('packman');
    }
})