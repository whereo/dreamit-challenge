import type { Query } from "@/types";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { computed } from "vue";

export const GET_DRAW = gql`
  query GetDraw {
    draw(limit: 1, type: "eurojackpot") {
      draws {
        numbers
        additionalNumbers
        date
        jackpot
      }
    }
  }
`;

export const useDraw = () => {
  const { result, ...rest } = useQuery<Query>(GET_DRAW);

  const data = computed(() => result.value?.draw?.draws?.[0]);

  return {
    data,
    ...rest,
  };
};
