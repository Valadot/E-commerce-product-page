import { createContext, useState } from "react";

interface Product {
  picture: string
  name: string;
  price: number;
  amount: number;
  total: number;
  id: number;
}

export interface CartContextType {
  cart: Product;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Product>({picture: "",name: "", price:0, amount: 0, total: 0, id:1});

  const addToCart = (product: Product) => {
    if(product.amount <= 0){
      return
    } else {setCart(product);}
    
    
  };
  

  const removeFromCart = (productId: number) => {
    if(cart.id === productId){
      {
        setCart({picture: "",name: "", price:0, amount: 0, total: 0, id:1})
      }
      console.log(cart)
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
