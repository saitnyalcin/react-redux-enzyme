import { ACTION_TYPES } from "../../actions/actionTypes";
import postsReducer from "./reducer";

describe("Post Reducer", () => {
  test("should return some default state", () => {
    const newState = postsReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  test("should return new state if receiving type", () => {
    const posts = [
      { title: "Test 1" },
      { title: "Test 1" },
      { title: "Test 1" }
    ];
    const newState = postsReducer(undefined, {
      type: ACTION_TYPES.GET_POSTS,
      payload: posts
    });
    expect(newState).toEqual(posts);
  });
});
