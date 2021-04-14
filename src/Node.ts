export default class Node {
    private _value: any;

    constructor(value: any = null) {
        this._value = value;
    }

    public get value() {
        return this._value;
    }

    public set value(val) {
        this._value = val;
    }
}
