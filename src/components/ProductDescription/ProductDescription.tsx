
import { useState } from "react";
import {ProductWrapper, ProductManufacturer,ProductHeadline,ProductText,Pricing,Discount,OldPrice,ButtonWrapper  } from "./ProductDescription.styles"
import PurchasingAmount from "../PurchasingAmount/PurchasingAmount"
import CartButton from "../CartButton/CartButton"
import { useCart } from "../../utils/useCartHook/UseCart";
import SneakerImage from "../../../ecommerce-product-page-main/images/image-product-1-thumbnail.jpg";



const ProductDescription = () => {

 

    const [purchaseAmount, setPurchaseAmount] = useState(0)


    const {addToCart} = useCart()

    const handleAddAmount = () => {
        setPurchaseAmount(purchaseAmount + 1)
    }

    const handleSubstractAmount = () => {
        console.log("test")
        if(purchaseAmount === 0){
            return
        } else {
            setPurchaseAmount(purchaseAmount - 1)
        }
        
    }


    return(
        <ProductWrapper>
            <ProductManufacturer>
                <p>SNEAKER COMPANY</p>
            </ProductManufacturer>
            <ProductHeadline>
                <h1>Fall Limited Edition Sneakers</h1>
            </ProductHeadline>
            <ProductText>
            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            </ProductText>
            <Pricing>
                <div>
                <h2>$125.00</h2>
                <Discount><span>50%</span>
                </Discount>
                
                </div>
                <OldPrice>
                    <p>$250.00</p>
                </OldPrice>
            </Pricing>
        <ButtonWrapper>
            <PurchasingAmount handleAddAmount={handleAddAmount} handleSubstractAmount={handleSubstractAmount} purchaseAmount={purchaseAmount}/>
  <CartButton  handleAddToCart={() => addToCart({picture: SneakerImage, name: "Fall Limited Edition Sneakers", price: 125, amount: purchaseAmount, total: 125 * purchaseAmount, id:1})} purchaseAmount={purchaseAmount}/>
  </ButtonWrapper>
        </ProductWrapper>
    )
}

export default ProductDescription