function clicktoPlay(){
   const image = document.querySelector('img');
   image.src = 'https://image.freepik.com/free-icon/x-symbol_318-1407.jpg';
   image.removeEventListener('click',clicktoPlay);
}

const image = document.querySelector('img');
image.addEventListener('click',clicktoPlay);