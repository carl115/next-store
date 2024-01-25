import ShortUniqueId from 'short-unique-id'

export async function getShoppingCart() {
    const localShopCart = await localStorage.getItem('shopping_cart');
    return localShopCart ? JSON.parse(localShopCart) : [];
}

export async function addCartProduct(product) {
    const localShopCart = await localStorage.getItem('shopping_cart');
    const { randomUUID } = new ShortUniqueId({ length: 10 });
    let shopCart = [];

    if(localShopCart) {
        shopCart = JSON.parse(localShopCart);
    }

    shopCart = [...shopCart, {id: randomUUID(), productId: product.productId, name: product.name, img: product.img, units: product.units, price: product.price, total: product.price * product.units}];
        
    await localStorage.setItem('shopping_cart', JSON.stringify(shopCart));
}

export const updateCartProduct = async (id, product) => {
    const localShopCart = await localStorage.getItem('shopping_cart');
    let shopCart = [];

    if(localShopCart) {
        shopCart = JSON.parse(localShopCart);
    }

    shopCart = shopCart.filter(product => product.id != id);

    shopCart.push({...product, id});
    
    await localStorage.setItem('shopping_cart', JSON.stringify(shopCart));
}

export async function deleteCartProduct(id) {
    const localShopCart = await localStorage.getItem('shopping_cart');
    let shopCart = [];

    if(localShopCart) {
        shopCart = JSON.parse(localShopCart);
    }

    shopCart = shopCart.filter(product => product.id != id);

    await localStorage.setItem('shopping_cart', JSON.stringify(shopCart));
}

export async function clearShoppingCart() {
    localStorage.removeItem('shopping_cart');
}