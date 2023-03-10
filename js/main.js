const elPack = document.querySelector('.packman');
const elPlayBoard = document.querySelector('.board');
const elHouse = document.querySelector('.house');
const elHelloText = document.querySelector('.hello');
const elEndText = document.querySelector('.gameover');

let X, Y;
let houseX, houseY;

// похідні дані, можна запропонувати їх дати обирати користувачеві 
//(тоді ще додати перевірку, щоб розмір елемента не міг бути більше, ніж розмір дошки)

//розмір дошки
elPlayBoard.style.width = `800px`;
elPlayBoard.style.height = `600px`;
//розмір ігрового елемента
elPack.style.width = `150px`;
elPack.style.height = `150px`;
//розмір конури
elHouse.style.width = `200px`;
elHouse.style.height = `200px`;

const maxX = parseInt(elPlayBoard.style.width) - parseInt(elPack.style.width);
const maxY = parseInt(elPlayBoard.style.height) - parseInt(elPack.style.height);

const maxHouseX = parseInt(elPlayBoard.style.width) - parseInt(elHouse.style.width);
const maxHouseY = parseInt(elPlayBoard.style.height) - parseInt(elHouse.style.height);

const coord = () => {
    X = parseInt(Math.random()*maxX);
    Y = parseInt(Math.random()*maxY);
}

const coordHouse = (lnkHouse) => {
    houseX = parseInt(Math.random()*maxHouseX);
    houseY = parseInt(Math.random()*maxHouseY);
    lnkHouse.style.left = `${houseX}px`;
    lnkHouse.style.top = `${houseY}px`;
}

coordHouse(elHouse);
console.log('house', houseX, houseY);

elPack.addEventListener('click', (ev) => {
    elPack.classList.remove('packman');
    coord();
    console.log('dog', X, Y);
    elPack.style.left = `${X}px`;          
    elPack.style.top = `${Y}px`;
    elPack.classList.add('packman');
        if((X>=houseX-50)&&(X<=houseX+100)&&(Y>=houseY-50)&&(Y<=houseY+120)) {
            elEndText.innerHTML = `<h2>Вітаю, цуценя вдома!</h2><h3>Якщо хочеш зіграти ще, натисни F5.</h3>`;
            elPack.removeEventListener('click', (ev));
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
