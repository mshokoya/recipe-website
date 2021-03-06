import gql from 'graphql-tag';

export const updateRecipeGraphQL = gql`
  mutation updateRecipeGraphQL($data: RecipeUpdateInput!, $where: RecipeWhereUniqueInput!) {
    updateRecipe(data: $data, where: $where) {
      id
      statusId
      title
      content
      description
      ingredients
      userLikes {
        id
      }
      owner
      images {
        id
        fileName
        height
        width
        size
        handle
      }
    }
  }
`;