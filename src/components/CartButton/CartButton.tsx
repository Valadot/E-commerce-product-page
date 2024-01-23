import {ButtonWrapper, Button} from "./CartButton.styles"


interface CartButtonProps {
    handleAddToCart: (amount: number) => void;
    purchaseAmount: number
}

const CartButton: React.FC<CartButtonProps> = ({handleAddToCart, purchaseAmount }) => {
    return (
        <ButtonWrapper>
            <Button onClick={() =>handleAddToCart(purchaseAmount)}>Add to cart</Button>
        </ButtonWrapper>
    )
}

export default CartButton