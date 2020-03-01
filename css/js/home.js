(function(){
  const ilbuniGroup = document.querySelectorAll('.ilbuni');
  const stage = document.querySelector('.stage');
  function clickHandler(e){
     stage.removeChild(this);
  }
  for(let i=0; i<ilbuniGroup.length; i++)
  {
      ilbuniGroup[i].addEventListener('click', clickHandler);
  }
})();