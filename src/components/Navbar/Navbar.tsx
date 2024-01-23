import { useState } from "react"
import { useCart } from "../../utils/useCartHook/UseCart"
import "react-image-gallery/styles/css/image-gallery.css"
import hamburger from "../../../ecommerce-product-page-main/images/icon-menu.svg"
import logo from "../../../ecommerce-product-page-main/images/logo.svg"
import avatar from "../../../ecommerce-product-page-main/images/image-avatar.png"
import closeNavbar from "../../../ecommerce-product-page-main/images/icon-close.svg"
import shoppingCart from "../../../ecommerce-product-page-main/images/icon-cart.svg"
import {NavContainer,LogoWrapper, LinksMobile,UserShoppingWrapper,UserAvatar,Sidebar,LinksDesktop, BasketNotification,Hamburger,ShoppingCartImageWrapper,CloseImg,Logo} from "./Navbar.styles"
import Basket from "../Basket/Basket"





const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [showBasket, setShowBasket] = useState(false)
    

    const {cart} = useCart()
    const handleHamburgerClick = (): void => {
        setShowSidebar(!showSidebar)
    }

    const handleShowingBasket = (): void => {
        setShowBasket(!showBasket)
    }


    return(
        <>
        <NavContainer>
            <LogoWrapper>
            <Hamburger src={hamburger} onClick={handleHamburgerClick}/>
            <Logo src={logo}/>
            </LogoWrapper>
            <Sidebar show={showSidebar}>
<CloseImg src={closeNavbar} onClick={handleHamburgerClick} />
            <LinksMobile>
            <li><a href="#">Collections</a></li>
                <li><a href="#">Men</a></li>
                <li><a href="#">Women</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </LinksMobile>
            </Sidebar>
            <LinksDesktop>
            <li><a href="#">Collections</a></li>
                <li><a href="#">Men</a></li>
                <li><a href="#">Women</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </LinksDesktop>

            <UserShoppingWrapper>
                <ShoppingCartImageWrapper>
            <img src={shoppingCart} onClick={handleShowingBasket} />
            <BasketNotification>
                {cart.amount > 0 ? cart.amount : ""}
            </BasketNotification>
            <Basket showBasket={showBasket}/>
            </ShoppingCartImageWrapper>

            <UserAvatar src={avatar}/>
            </UserShoppingWrapper>
        </NavContainer>

        </>
    )
}

export default Navbar