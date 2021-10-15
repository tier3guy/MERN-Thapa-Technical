const rewire = require("rewire")
const practice = rewire("./practice")
const put_data = practice.__get__("put_data")
// @ponicode
describe("put_data", () => {
    test("0", async () => {
        await put_data()
    })
})
