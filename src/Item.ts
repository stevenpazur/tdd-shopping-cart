export default class Item {
    private name: string;
    private price: number;
    private onSale: boolean;

    constructor(name: string, price: number, onSale: boolean) {
        this.name = name;
        this.price = price;
        this.onSale = onSale;
    }

    public get _price(){
        return this.price;
    }

    public get _name(){
        return this.name;
    }

    public get _onSale(){
        return this.onSale;
    }
}
