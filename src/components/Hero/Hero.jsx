import { HeroWrap, HeroTitle, HeroImg, TopWrap, CallBtn } from "./Hero.styled";
import heroIMG from '../../icons/Luxury_cars_8730452408.jpeg';

const Hero = () => {
    return (
        <HeroWrap>
            <TopWrap>
            <HeroTitle>
                New Car Rental in Ukraine with Address Delivery within an Hour!
                </HeroTitle>
            <CallBtn href="tel:+74951111111">Call us now</CallBtn>
            </TopWrap>
            <HeroImg src={heroIMG}
                alt="cars" width='1002' />
        </HeroWrap>
    )
};

export default Hero;