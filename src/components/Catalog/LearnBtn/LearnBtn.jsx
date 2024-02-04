import { Btn } from "./LearnBtn.styled";

const LearnBtn = ({ modal }) => {
    
    const onClick = () => {
        modal(true);
    }

    return (
        <Btn onClick={onClick}>Learn more</Btn>
    )
}

export default LearnBtn;