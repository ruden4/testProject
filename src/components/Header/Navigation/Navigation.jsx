import { Nav, NavigationList, NavigationItem, StyledLink } from "./Navigation.styled"

const Navigation = () => {
    return (
        <Nav>
            <NavigationList>
                <NavigationItem>
                    <StyledLink to="/"end>Home</StyledLink>
                </NavigationItem>
                <NavigationItem>
                    <StyledLink to="/catalog"end>Catalog</StyledLink>
                </NavigationItem>
                <NavigationItem>
                    <StyledLink to="/favorites"end>Favorites</StyledLink>
                </NavigationItem>
            </NavigationList>
        </Nav>
    )
}

export default Navigation
