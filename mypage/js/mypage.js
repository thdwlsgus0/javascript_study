(function(){
 
    houseElem = document.querySelector('.house');
    let pageElem = document.querySelector('.progress-bar');
    let stageElem = document.querySelector('.stage');
    const mousePos = {x:0, y:0};
    let maxScrollValue = null;
    function resizeHandler(){
        maxScrollValue = document.body.offsetWidth - window.innerWidth;
    }
    window.addEventListener('scroll', function(){
        const scrollPer = window.pageXOffset/ maxScrollValue;
        pageElem.style.width = scrollPer*67+ '%';
    });
    window.addEventListener('mouseover', function(e){
        mousePos.x = -1 + (e.clientX/window.innerWidth)*2;
        mousePos.y = 1 - (e.clientY/window.innerHeight)*2;
        stageElem.style.transform = "rotateX("+(mousePos.y*5)+")deg" + "rotateY("+(mousePos.x*5)+")deg";
    }); 
    window.addEventListener('resize', resizeHandler);
    resizeHandler();

})();