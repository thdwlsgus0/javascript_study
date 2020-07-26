class Queue {
    constructor(){
        this.arr = [];
        this.prev_index=0;
        this.next_index = 0;
    }
    enqueue(item){
        this.arr[this.next_index++] = item;
    }
    dequeue(){
        this.arr[this.prev_index++]=9999;
    }
    now_position(){
        return this.next_index;
    }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
console.log(queue.prev_index, queue.next_index);
console.log(queue.now_position());


