const elPack = document.querySelector('.packman');
const elPlayBoard = document.querySelector('.board');

let X, Y;

// похідні дані, можна запропонувати їх дати обирати користувачеві 
//(тоді ще додати перевірку, щоб розмір елемента не міг бути більше, ніж розмір дошки)

//розмір дошки
elPlayBoard.style.width = `1200px`;
elPlayBoard.style.height = `800px`;
//розмір ігрового елемента
elPack.style.width = `100px`;
elPack.style.height = `100px`;

const maxX = parseInt(elPlayBoard.style.width) - parseInt(elPack.style.width);
const maxY = parseInt(elPlayBoard.style.height) - parseInt(elPack.style.height);

const coord = () => {
    X = parseInt(Math.random()*maxX);
    Y = parseInt(Math.random()*maxY);
}

elPack.addEventListener('click', () => {
    elPack.classList.remove('packman');
    coord();
    elPack.style.left = `${X}px`;          
    elPack.style.top = `${Y}px`;
    elPack.classList.add('packman');
})


//    if((X>0)&&(X<maxX)&&(Y>0)&&(Y<maxY)) {
//            elWarn.innerHTML = '';
//            elPack.style.left = `${X}px`;
//            elPack.style.top = `${Y}px`;
//            elPack.classList.add('packman');
//        }
//    else {
//        elWarn.innerHTML = 'Вийшов за поле! Спробуй ще!'
//        elPack.style.left = `${maxX/2}px`;
//        elPack.style.top = `${maxY/2}px`;
//        elPack.classList.add('packman');
//    }
