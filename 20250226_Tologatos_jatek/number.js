export class Number{
    constructor(value, table){
        this.value = value;
        this.x = undefined;
        this.y = undefined;
        this.table = table
    }

    setPosition(x, y){
        this.x = x;
        this.y = y;
    }

    freeNeighbor(){
        let free = null;
        
    }
}