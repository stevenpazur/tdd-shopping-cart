import Cart from '../src/Cart';
import Item from '../src/Item';

describe('Cart', () => {
    test('should initialize as empty', () => {
        const cart = new Cart();
        expect(cart.items).toEqual([]);
        expect(cart.totalPrice).toEqual(0);
    })

    test('1. Given that I a new shopper, when I begin shopping, then I expect my cart to be empty.', () => {
        const cart = new Cart();
        expect(cart.isEmpty()).toBeTruthy();
    })

    test('1. Given I have an empty cart, when I add an Item, then I expect the price to reflect the sum of all the Items in my cart.', () => {
        const cart = new Cart();
        const item = new Item('butterfinger', 2, false);
        cart.add(item);
        expect(cart.totalPrice).toEqual(2);
    })

    test('1. Given I have an empty cart, when I add items, then I expect it to see an itemized list of the items along with their price and quantity.', () => {
        const cart = new Cart();
        const item1 = new Item('snickers', 1, false);
        const item2 = new Item('reeses', 1.5, false);
        cart.add(item1);
        cart.add(item1);
        cart.add(item2);
        expect(cart.quantity(item1)).toEqual(2);
        expect(cart.totalPrice).toEqual(3.5);
    })

    test('1. Given I have cart with one item, when I add more of that item, then I expect to see its quantity updated on the itemized list.', () => {
        const cart = new Cart();
        const item1 = new Item("xbox", 450, false);
        cart.add(item1);
        expect(cart.quantity(item1)).toEqual(1);
        cart.add(item1);
        expect(cart.quantity(item1)).toEqual(2);
    })

    test('1. Given I have a cart with items, when I remove an item, then I expect the cart to display the updated itemized list.', () => {
        const cart = new Cart();
        const item1 = new Item("ps5", 750, false);
        cart.add(item1);
        const item2 = new Item("pizza", 7.50, false);
        cart.add(item2);
        cart.remove(item1);
        expect(cart.items.length).toEqual(1);
        expect(cart.items[0]).toEqual(item2);
        expect(cart.totalPrice).toEqual(7.50);
    })

    test('1. Given I have one item in my cart with a quantity of 3, when I remove one, then I expect the cart to have 2 of that item.', () => {
        const cart = new Cart();
        const item1 = new Item('exotic butters', 0.99, false);
        cart.add(item1);
        cart.add(item1);
        cart.add(item1);
        cart.remove(item1);
        expect(cart.items.length).toEqual(2);
        expect(cart.totalPrice).toEqual(1.98);
        expect(cart.quantity(item1)).toEqual(2);
    })
});
