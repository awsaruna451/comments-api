/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listAllComments = /* GraphQL */ `
  query ListAllComments {
    listAllComments {
      id
      type
      text
      addedBy
      dateTime
      commentId
      ideaId
      __typename
    }
  }
`;
export const listAllReplies = /* GraphQL */ `
  query ListAllReplies {
    listAllReplies {
      id
      type
      text
      addedBy
      dateTime
      commentId
      ideaId
      __typename
    }
  }
`;
export const queryCommentsByIdeaId = /* GraphQL */ `
  query QueryCommentsByIdeaId($ideaId: String!) {
    queryCommentsByIdeaId(ideaId: $ideaId) {
      id
      type
      text
      addedBy
      dateTime
      commentId
      ideaId
      __typename
    }
  }
`;
