/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addNewComment = /* GraphQL */ `
  mutation AddNewComment($input: CreateCommentInput!) {
    addNewComment(input: $input) {
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
export const addNewReply = /* GraphQL */ `
  mutation AddNewReply($input: CreateReplyInput!) {
    addNewReply(input: $input) {
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
