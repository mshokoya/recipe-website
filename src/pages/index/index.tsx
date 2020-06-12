import styled from 'styled-components';
import {MainLayout} from '../../components/MainLayout';
import {GlobalStyle} from '../../utils/globalStyle';
import {RecipesList, queryEnum} from '../../components/RecipesList';

const StyledHeader = styled.h1`
  ${({theme}) => `
    font-size: 2em;
    text-align: left;
    padding: ${theme['padding-small']} ${theme['padding-small']};
  `}
`;

const Index = () => {
  return (
    <MainLayout title="Recipes">
      <GlobalStyle/>
        <StyledHeader>Index Page</StyledHeader>
        <RecipesList parentRoute='recipe' queryType={queryEnum.recipes} />
    </MainLayout>
  );
};

export default Index;