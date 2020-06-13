import _ from 'lodash';
import {QueryHookOptions, useQuery} from '@apollo/react-hooks';
import {recipesGraphQL} from '../../graphql/queries/recipies';
import {userLikesGraphQL} from '../../graphql/queries/userLikes';
import {RecipeListItem} from '../RecipeListItem';
import {Row} from 'antd';
import {Recipe} from '../../../generated/apollo-components';
import {Error} from '../Error';
import {Loading} from '../Loading';
import {Warning} from '../Warning';


export enum queryEnum {
  userLikes = 'userLikes',
  recipes = 'recipes'
}

type RecipesListProps = {
  options?: QueryHookOptions;
  parentRoute: string;
  queryType: queryEnum;
}

export const RecipesList = ({
  options,
  parentRoute,
  queryType
}: RecipesListProps) => {
  const query = 
    queryType === queryEnum.recipes 
      ? recipesGraphQL 
      : userLikesGraphQL;

  const {data, loading, error} = useQuery(query, options);

  const parentArray = _.get(data, queryType);
  const recipesList = _.map(parentArray, value => _.get(value, 'recipe', value));

  if (loading) return <Loading />
  if (recipesList.length === 0 ) {
    return <Warning 
      warningHeader='No Recipes' 
      warningText='No recipes are present why not add one ?' 
    />
  }
  if (error || !recipesList) return <Error errorText={`${error}`}/>



  return (
    <Row>
      {recipesList.map((recipe: Recipe) => (
        <RecipeListItem 
          key={`${recipe.id}-${queryType}`} 
          recipe={recipe} 
          parentRoute={parentRoute}
        />
      ))}
    </Row>
  )
}