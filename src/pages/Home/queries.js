import { gql } from "@apollo/client";

export const ALL_BOOKS = gql`
  query GetAllBooks {
    books {
      id
      created_at
      updated_at
      title
      subtitle
      publisher
      release_date
      number_of_purchases
      likes
      rating
      price
      currency
      available_copies
      full_description
      featured
      image_url
      published_at
      authors {
        id
        created_at
        updated_at
        name
        published_at
      }
      tags {
        id
        created_at
        updated_at
        name
        published_at
      }
      genres {
        id
        created_at
        updated_at
        name
        published_at
      }
    }
  }
`;
