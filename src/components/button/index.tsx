import { ReactNode } from 'react';
import { ButtonRoundStyle } from './styled';

interface ButtonRoundProps{
    children: ReactNode;
    onClick: () => void; 
}

export function ButtonRound({children, onClick}: ButtonRoundProps) {
    return(
        <ButtonRoundStyle onClick={onClick}>
            {children}
        </ButtonRoundStyle>
    )
}