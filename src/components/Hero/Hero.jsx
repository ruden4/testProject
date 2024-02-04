import { HeroWrap, HeroTitle, HeroImg } from "./Hero.styled";
import heroIMG from '../../icons/Luxury_cars_8730452408.jpeg';

const Hero = () => {
    return (
        <HeroWrap>
            <HeroTitle>
                New Car Rental in Ukraine with Address Delivery within an Hour!
            </HeroTitle>
            <HeroImg src={heroIMG}
                alt="cars" width='1002' />
        </HeroWrap>
    )
};

export default Hero;