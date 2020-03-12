function Ball(color, start){
            this.color = color;
            this.init();
        }
        var array= new Array(0,0,0,0);
        function go(){
               const btn = document.querySelector('.btn');
               btn.addEventListener('click', function(){
                    setInterval(sample,2000);
               });
        }
        function sample(){
            ball = document.querySelectorAll('.ball');
            for(var i=0; i<ball.length; i++)
            {
                nx = parseInt(Math.random()*500);
                array[i]+=nx;
                if(array[i]>=1000)
                {
                    ball[i].style.color='white';
                    ball[i].classList.remove('ball');
                }
                ball[i].style="transform:translate("+array[i]+"px, 0)";
            }
        }
        Ball.prototype = {
            constructor: Ball,
            init(){
                ball_contents = document.querySelector('.ball_contents');
                mainElem = document.createElement('div');
                mainElem.style.color = this.color;
                mainElem.classList.add('ball');
                ball_contents.appendChild(mainElem);
            }  
        }
        const ball1 = new Ball('red');
        const ball2 = new Ball('green');
        const ball3 = new Ball('blue');
        const ball4 = new Ball('yellow');
        go();