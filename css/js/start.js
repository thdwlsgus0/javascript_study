(function(){
 const stageElem = document.querySelector('.stage');
 let currentItem = null;
 function doorHandler(e){
    const targetElem = e.target;
    
    const currentItem = document.querySelector('.door-opened');
    if(currentItem){
      currentItem.classList.remove('door-opened');
    }

    if(targetElem.classList.contains('door-body'))
    {
       targetElem.parentNode.classList.add('door-opened');
       currentItem = targetElem.parentNode;
    }
 }

 stageElem.addEventListener('click', doorHandler);
})();