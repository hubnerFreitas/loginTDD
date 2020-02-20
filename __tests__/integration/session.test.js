const { User } = require("../../src/app/models");

describe("Authentication", () => {
  it("should create a user", async () => {
    const user = await User.create({
      name: "Diego",
      email: "diego@rocketseat.com.br",
      password_hash: "123123"
    });

    console.log(process.env.NODE_ENV);

    expect(user.email).toBe("diego@rocketseat.com.br");
  });
});
