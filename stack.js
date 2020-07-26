class Stack{
    constructor(){
        this.arr = [];
        this.index = 0;
    }
    enStack(item){
        this.arr[this.index++] = item;
    }
    deStack(){
        this.arr[this.index--] = 9999;
    }
    nowPosition(){
        let cnt=0;
        for(let i=0; i<this.index; i++){
            if(this.arr[i]!=9999)cnt++;
        }
        return cnt;
    }
}
const stack = new Stack();
stack.enStack(1);
stack.enStack(2);
stack.enStack(3);
for(let i=0; i<stack.index; i++){
    console.log(stack.arr[i]);
}
stack.deStack();
console.log(stack.nowPosition());
