function clicktoPlay(){
    const image = document.querySelectorAll('img');
    image.src = 'https://www.shareicon.net/data/256x256/2016/03/19/736268_error_512x512.png';
    image.removeEventListener('click',clicktoPlay);
 }
 
 const image = document.querySelectorAll('img');
 image.addEventListener('click',clicktoPlay);

 
 