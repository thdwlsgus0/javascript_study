(function(){
 
    const houseElem = document.querySelector('.house');
    const stageElem = document.querySelector('.stage');
    const barElem = document.querySelector('.progress-bar');
    const mousePos = {x:0, y:0};
    let maxScrollValue = null;

    function resizeHandler(){
        maxScrollValue = document.body.offsetHeight - window.innerHeight;
    }
    window.addEventListener('scroll', function(){
        const scrollPer = pageYOffset / maxScrollValue ;
        const zMove = scrollPer* 1000 - 490; 
        houseElem.style.transform = "translateZ("+ zMove + 'vw)';

        // progress bar
        barElem.style.width = scrollPer*100+ '%';

    });
    window.addEventListener('resize', resizeHandler);
    window.addEventListener('mousemove', function(e){
         this.console.log(e.clientX, e.clientY); 
         mousePos.x = -1 + (e.clientX/window.innerWidth)*2;
         mousePos.y = 1 - (e.clientY/window.innerHeight)*2;
         stageElem.style.transform = 'rotateX('+(mousePos.y*5)+'deg) rotateY(' +(mousePos.x*5)+'deg)'; 
    });
    resizeHandler();

    
})();