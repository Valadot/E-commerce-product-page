
import {InputWrapper, SubstractItem, AddItem, ItemAmount} from "./PurchasingAmount.styles"
import IconMinus from "../../../ecommerce-product-page-main/images/icon-minus.svg";
import IconPlus from "../../../ecommerce-product-page-main/images/icon-plus.svg";


interface PurchasingAmountProps {
    handleAddAmount: () => void;
    handleSubstractAmount: () => void;
    purchaseAmount: number
}



const PurchasingAmount: React.FC<PurchasingAmountProps> = ({handleAddAmount, handleSubstractAmount,purchaseAmount}) => {


    return(
        <InputWrapper>
        <div>
        <SubstractItem src={IconMinus} onClick={handleSubstractAmount}/>
        </div>
        <div><ItemAmount>{purchaseAmount}</ItemAmount></div>
        <div><AddItem src={IconPlus} onClick={handleAddAmount}/></div>


        </InputWrapper>
    )
}


export default PurchasingAmount