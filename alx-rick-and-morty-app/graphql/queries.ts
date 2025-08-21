import { gql } from "@apollo/client";

export const GET_EPISODES = gql`
  query getEpisodes($page: Int) {
    episodes(page: $page) {
      info {
        pages
        next
        prev
        count
      }
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;