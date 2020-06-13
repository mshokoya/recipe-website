import gql from 'graphql-tag';

export const userLikeGraphQL = gql`
  query userLikeGraphQL($where: UserLikeWhereUniqueInput!) {
    userLike(where: $where) {
      id
      user
      recipe {
        id
        statusId
        title
        content
        description
        ingredients
        userLikes {
          id
          user
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
  }
`;