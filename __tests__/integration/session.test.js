const request = require("supertest");

const app = require("../../src/app");
const { User } = require("../../src/app/models");
const truncate = require("../utils/truncate");

describe("Authentication", () => {
  beforeEach(async () => {
    await truncate;
  });

  it("should authenticate with valid credentials", async () => {
    const user = await User.create({
      name: "Diego",
      email: "diego@rocketseat.com.br",
      password_hash: "123123"
    });

    const resp = await request(app)
      .post("/sessions")
      .send({
        email: user.email,
        password_hash: "123456"
      });

    expect(resp.status).toBe(200);
  });
});
