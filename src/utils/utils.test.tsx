import { describe, it, expect } from "vitest";
import { getTitleFromHierarchy } from "./util-functions";

describe("Utils", () => {
  it("should return title from hierarchy", () => {
    expect(getTitleFromHierarchy("category/title")).toEqual("title");
  });

  it("should ignore too many titles", () => {
    expect(getTitleFromHierarchy("category/doNotReturnThisOne/title")).toEqual(
      "title"
    );
  });
});
