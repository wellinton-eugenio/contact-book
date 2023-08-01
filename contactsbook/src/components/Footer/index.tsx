import { StyledFooter, StyledFooterDiv } from "./style";

export const Footer = () => {
    return(
        <StyledFooter>
            <StyledFooterDiv>
                <p>Criado por - </p>
                <a href={`https://www.linkedin.com/in/wellington-depaula`} target="_blank"> Wellington Eugenio</a>
            </StyledFooterDiv>
        </StyledFooter>
    );
};