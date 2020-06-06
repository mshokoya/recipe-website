import styled from 'styled-components';
import {MainLayout} from '../../components/MainLayout';
import {GlobalStyle} from '../../utils/globalStyle';

const StyledHeader = styled.h1`
  ${({theme}) => `
    font-size: 2em;
    text-align: left;
    padding: ${theme['padding-small']} ${theme['padding-small']};
  `}
`;

const Index = () => {
  return (
    <MainLayout>
      <GlobalStyle/>
        <StyledHeader>Index Page</StyledHeader>
    </MainLayout>
  );
};

export default Index;