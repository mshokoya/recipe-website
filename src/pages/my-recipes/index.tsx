import { MainLayout } from '../../components/MainLayout';
import styled from './node_modules/styled-components';
import * as _ from './node_modules/lodash';
import Link from './node_modules/next/link';
import { Row, Col, Button } from './node_modules/antd';
import { RecipesList, queryEnum } from '../../components/RecipesList';
import { useFetchUser } from '../../utils/user';
import { Loading } from '../../components/Loading';
import Router from './node_modules/next/router';

const StyledRow = styled(Row)`
  ${({ theme }) => `
    div {
      padding: ${theme['padding-small']} ${theme['padding-small']};
      display: flex;
      h1 {
          padding-left: ${theme['padding-small']};
          text-align: left;
      }
    }
    `}
`;

const Index = () => {
  const { user, loading: isFetchUser } = useFetchUser();
  const owner = _.get(user, 'sub');
  const options = owner ? { variables: { where: { owner } } } : {};

  if (isFetchUser) return <Loading />;

  if (!user) {
    Router.replace('/');
  }

  return (
    <MainLayout title="My Recipes">
      <StyledRow>
        <Col span={24}>
          <Link href="/create">
            <Button type="primary">Create</Button>
          </Link>
          <h1>My Recipes</h1>
        </Col>
      </StyledRow>
      <div>
        <RecipesList
          parentRoute="my-recipes"
          queryType={queryEnum.recipes}
          options={options}
        />
      </div>
    </MainLayout>
  );
};

export default Index;