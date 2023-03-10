const elPack = document.querySelector('.packman');
const elPlayBoard = document.querySelector('.board');
const elHouse = document.querySelector('.house');
const elHelloText = document.querySelector('.hello');

let X, Y;
let houseX, houseY;

// похідні дані, можна запропонувати їх дати обирати користувачеві 
//(тоді ще додати перевірку, щоб розмір елемента не міг бути більше, ніж розмір дошки)

//розмір дошки
elPlayBoard.style.width = `800px`;
elPlayBoard.style.height = `600px`;
//розмір ігрового елемента
elPack.style.width = `200px`;
elPack.style.height = `200px`;
//розмір конури
elHouse.style.width = `200px`;
elHouse.style.height = `200px`;

const maxX = parseInt(elPlayBoard.style.width) - parseInt(elPack.style.width);
const maxY = parseInt(elPlayBoard.style.height) - parseInt(elPack.style.height);

const coord = () => {
    X = parseInt(Math.random()*maxX);
    Y = parseInt(Math.random()*maxY);
}

const coordHouse = (lnkHouse) => {
    houseX = parseInt(Math.random()*maxX);
    houseY = parseInt(Math.random()*maxY);
    lnkHouse.style.left = `${houseX}px`;
    lnkHouse.style.top = `${houseY}px`;
}

coordHouse(elHouse);
console.log('house', houseX, houseY);

elPack.addEventListener('click', () => {
    elPack.classList.remove('packman');
    coord();
    console.log('dog', X, Y);
    elPack.style.left = `${X}px`;          
    elPack.style.top = `${Y}px`;
    elPack.classList.add('packman');
        if(((X<=houseX-50)||(X>=houseX+50))&&((Y<=houseY-50)||(Y>=houseY+50))) {
            elHelloText.innerHTML = 'Вітаю, цуценя вдома!';
            return;
        }
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
