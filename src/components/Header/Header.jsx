import { HeaderWrap } from "./Header.styled";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";

const Header = () => {
    return (
        <HeaderWrap>
            <Logo />
            <Navigation/>
        </HeaderWrap>
    )
}

export default Header