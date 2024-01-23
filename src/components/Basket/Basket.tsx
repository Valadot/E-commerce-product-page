import {BasketContainer,HorizontalLine,CartItemWrapper,CartItem, ProductImage,ProductDetails,ProductWrapper,DeleteItem,CheckoutWrapper,CheckoutButton} from "./Basket.styles" 
import { useCart } from "../../utils/useCartHook/UseCart"
import trashcan from "../../../ecommerce-product-page-main/images/icon-delete.svg"

interface BasketProps{
    showBasket: boolean
}

const Basket: React.FC<BasketProps> = ({showBasket}) => {


    const {cart, removeFromCart} = useCart()

    return(
        <BasketContainer showBasket={showBasket}>
            <p>Cart</p>
            <HorizontalLine></HorizontalLine>
            <CartItemWrapper>
                   {cart.name ?
                   <div>
                    <ProductDetails>
                        <ProductImage src={cart.picture} />
                        
                        <ProductWrapper>
                            <div>{cart.name}</div>
                        <div>
                       <p>${cart.price} x {cart.amount } <span>${cart.total.toFixed(2)}</span></p> 
                        </div>
                        
                        </ProductWrapper>
                        <DeleteItem onClick={() =>removeFromCart(cart.id)}>
                            <img src={trashcan} />
                        </DeleteItem>


                    </ProductDetails>
                    <CheckoutWrapper>
                        <CheckoutButton>Checkout</CheckoutButton>
                    </CheckoutWrapper>
                    </div>
                    
                    : 
                    <CartItem>Your cart is empty.</CartItem>}

            </CartItemWrapper>
        </BasketContainer>
    )
}

export default Basket




