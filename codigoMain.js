const btnYes= document.querySelector('#yesBtn');

btnYes.addEventListener('click', function(){
    alert("¡Sabía que dirías que sí!")
})

const btnNo= document.querySelector('#noBtn');

btnNo.addEventListener('mouseover', function(){
    const randomX = parseInt(Math.random() * 100);
    const randomY = parseInt(Math.random() * 100);
    btnNo.style.setProperty('top', randomX + '%');
    btnNo.style.setProperty('left', randomY + '%');
    btnNo.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
})