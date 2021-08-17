import styled from 'styled-components';

export const Wrapper = styled.div`
background: var(--darkGrey);
padding: 0 20px;
`;

export const Content = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
max-width: var(--maxWidth);
 
padding: 20px 0;
margin: 0px  auto;
`;

export const LogoImg = styled.img`
width: 200px;
border-radius: 30px;
@media screen and (max-width:500px) {
    width: 150px;
}
`;

export const MOVIELogoImg = styled.img`
width: 200px;
border-radius: 30px;
@media screen and (max-width:500px) {
    width: 150px;
}
`;