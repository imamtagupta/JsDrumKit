window.addEventListener("keydown", function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;//this is going to start the music all over agin if we hit button again That is , rewinf to start.
    audio.play();

    key.classList.add('playing');


    const keys = document.querySelectorAll(`.key`);

    function removeTransition(e){
        if(e.propertyName !== 'transform') return; //If its not a transform property
        key.classList.remove('playing');
    }
    keys.forEach(key => addEventListener('transitionend', removeTransition));
});
