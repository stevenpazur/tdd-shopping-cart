import Item from '../src/Item'

export default class Cart {
    items : Item[];
    totalPrice: number;

    constructor(){
        this.items = [];
        this.totalPrice = 0;
    }

    isEmpty() {
        return this.items.length == 0;
    }

    add(newItem: Item) {
        this.items.push(newItem);
        this.totalPrice += newItem._price;
    }

    quantity(newItem: Item) : number {
        let i: number = 0;
        let counter: number = 0;
        for(i = 0; i < this.items.length; i++){
            if(this.items[i]._name == newItem._name){
                counter++;
            }
        }
        return counter;
    }

    remove(newItem: Item) {
        let size: number = this.items.length;
        this.items = this.items.filter(anitem => anitem._name != newItem._name);
        let priceCounter: number = 0;
        for(let i = 0; i < this.items.length; i++){
            priceCounter += this.items[i]._price;
        }
        this.totalPrice = priceCounter;
        if(!(this.items.length == size - 1)){
            let difference: number = size - this.items.length;
            for(let k = 0; k < difference - 1; k++) {
                this.add(newItem);
            }
        }
    }
}
