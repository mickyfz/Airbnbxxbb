/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPostifybb = /* GraphQL */ `
  query GetPostifybb($id: ID!) {
    getPostifybb(id: $id) {
      id
      image
      type
      title
      description
      bed
      bedroom
      maxGuests
      oldPrice
      newPrice
      latitude
      longitude
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPostifybbs = /* GraphQL */ `
  query ListPostifybbs(
    $filter: ModelPostifybbFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostifybbs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        image
        type
        title
        description
        bed
        bedroom
        maxGuests
        oldPrice
        newPrice
        latitude
        longitude
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
