import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import DrawAttribute from "../DrawAttribute.vue";

describe("DrawAttribute", () => {
  it("renders properly", () => {
    const wrapper = mount(DrawAttribute, {
      props: { title: "Hello World" },
      slots: {
        default: "Body",
      },
    });

    expect(wrapper.text()).toContain("Hello World");
    expect(wrapper.text()).toContain("Body");
  });
});
