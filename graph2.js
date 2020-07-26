class Directgraph{
    constructor(){
        this.edges = {};
        this.visit = {};
    }
    addVertex(vertex){
        this.edges[vertex] = {};
    }
    addEdge(fromVertex, toVertex, weight){
        this.edges[fromVertex][toVertex] = weight;
    }
    BFS(root){
        const queue = new Queue();
        this.visit[root] = true;
        queue.enqueue(root);
        while(queue.prev_index <= queue.next_index){
           let next_value = queue.arr[queue.prev_index++];
           this.next_index++;
           for(let i in this.edges[next_value]){
              let next = i;
              if(!this.visit[next]){
                  this.visit[next] = true;
                  queue.enqueue(next);
              }
           }
        }
    }
}
class Queue{
    constructor(){
        this.arr = [];
        this.prev_index = 0;
        this.next_index = 0;
    }
    enqueue(item){
        this.arr[this.next_index++]=item;
    }
    dequeue(){
        this.arr[this.prev_index++]=9999;
    }
}
const graph = new Directgraph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('E');
graph.addVertex('F');
graph.addVertex('G');
graph.addEdge('A','B',1);
graph.addEdge('A','C',2);
graph.addEdge('A','D',3);
graph.addEdge('E','F',1);
graph.addEdge('E','G',2);

graph.BFS('A');

for(property in graph.edges){
    if(!graph.visit[property])console.log('가비지컬렉터에 의해서 삭제될 노드입니다.', property);
}