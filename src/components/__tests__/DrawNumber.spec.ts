import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import DrawNumber from "../DrawNumber.vue";

describe("DrawNumber", () => {
  it("renders properly", () => {
    const wrapper = mount(DrawNumber, { props: { number: "1" } });

    expect(wrapper.text()).toContain("1");
  });
});
