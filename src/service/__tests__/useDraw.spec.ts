import { describe, it, expect, afterEach, beforeEach, vi } from "vitest";

import { provideApolloClient } from "@vue/apollo-composable";
import { createMockClient } from "mock-apollo-client";
import { GET_DRAW, useDraw } from "../useDraw";
import { flushPromises } from "@vue/test-utils";

const TEST_DRAW = {
  date: "2024-01-01",
  numbers: ["1", "2", "3", "4", "5"],
  additionalNumbers: ["1", "2"],
  jackpot: "20000",
};

let mockApolloClient = createMockClient();

describe("useDraw", () => {
  beforeEach(() => {
    mockApolloClient = createMockClient();

    mockApolloClient.setRequestHandler(GET_DRAW, () =>
      Promise.resolve({
        data: {
          draw: {
            draws: [TEST_DRAW],
          },
        },
      }),
    );

    provideApolloClient(mockApolloClient);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns data", () => {
    const { data, onResult } = useDraw("2024-01-01");

    onResult(async () => {
      await flushPromises();

      expect(data.value).toMatchObject(TEST_DRAW);
    });
  });
});
