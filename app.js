window.addEventListener('load', function OnWindowLoaded() {

    const numbers = [
    '1', '2', '3', '+',
    '4', '5', '6', '-',
    '7', '8', '9', '/',
    '0', '=', '.', 'c'];
    
    const calculation = document.querySelector('#calculation');    
    const screen = document.querySelector('.screen');
    
    
    for (let i = 0; i < numbers.length; i++) {
     const square = document.createElement('button');
     square.classList.add('btn');
     calculation.append(square);
     square.innerHTML = numbers[i];
    };
   

    const btns = document.querySelectorAll('.btn');

    btns.forEach( function (btns) {
        btns.addEventListener('click', onButtonClick)
       }) 

    function onButtonClick(event) {
    if (event.target.innerHTML === 'c') {
        screen.innerHTML = '0';
    }
    else if (event.target.innerHTML === '=') {
        screen.innerHTML = eval(screen.innerHTML);
    }
    else if (screen.innerHTML === '0') {
        screen.innerHTML = event.target.innerHTML;
    }
    else {
        screen.innerHTML += event.target.innerHTML; 
    }

   }
  
  
});





