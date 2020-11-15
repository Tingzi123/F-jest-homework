import axios from "axios";
import { register } from "../user";
import { verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    axios.post.mockResolvedValue({data:{username:"username",password:"password"}});
    await expect(register("username", "password")).resolves.toEqual({
      username: "username",
      password: "password",
    });
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    verifyUsername.mockReturnValue(false);
    await expect(register("username", "password")).rejects.toThrow("wrong username or password");
  });
});