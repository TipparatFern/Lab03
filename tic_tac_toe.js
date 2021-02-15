const class_x ='x'
const class_o ='o'



/*Start game from class x by click */
function clicktoPlay(){
    const image = document.querySelector('img');
    image.src = 'https://www.shareicon.net/data/256x256/2016/03/19/736268_error_512x512.png';
    image.removeEventListener('click',clicktoPlay);
 }
 
 const image = document.querySelector('img');
 image.addEventListener('click',clicktoPlay);

 /*class o random
 function randomtoPlay(){
    const image = document.querySelector('img');
    image.src = 'https://i.dlpng.com/static/png/1185263-open-o-png-2000_2000_preview.png';
    image.removeEventListener('random',randomtoPlay);
 }
 
 const image = document.querySelector('img');
 image.addEventListener('random',randomtoPlay);*/

 
 