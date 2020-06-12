import gql from 'graphql-tag';

export const createRecipeGraphQL = gql`
  mutation createRecipeGraphQL($data: RecipeCreateInput!) {
    createRecipe(data: $data) {
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