(function(){
   const stageElem = document.querySelector('.stage');

   let currentItem = null;
   function clickHandler(e){
     const targetElem = e.target;

     function activate(elem){
       elem.classList.add('door-opened');
       currentItem = elem;
     }
     function inactivate(elem){
        elem.classList.remove('door-opened');
     }
     if(currentItem){
       inactivate(currentItem);
     }
      
     if(targetElem.classList.contains('door-body')){
       activate(targetElem.parentNode);
     }
   }
   stageElem.addEventListener('click', clickHandler);

   
})();