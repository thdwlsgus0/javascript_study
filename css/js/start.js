(function(){
 const stageElem = document.querySelector('.stage');
 let currentItem = null;
 function doorHandler(e){

    function activate(elem){
      targetElem.parentNode.classList.add('door-opened');
      currentItem = targetElem.parentNode;
    }
    function inactivate(){
       currentItem.classList.remove('door-opened');
    }
    const targetElem = e.target;
    
    const currentItem = document.querySelector('.door-opened');
    if(currentItem){
      inactivate();
    }

    if(targetElem.classList.contains('door-body'))
    {
       activate();
    }
 }

 stageElem.addEventListener('click', doorHandler);
})();