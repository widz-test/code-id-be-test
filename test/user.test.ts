import request from "supertest";
jest.useFakeTimers()

const url = "http://localhost:3030";
let userPayload = {
    id: "",
    email: "john1@test.xxx",
    username: "john_1",
    identity_number: "XXX01",
    account_number: "001"
}
let token: string = "";

describe("POST /v1/user", () => {
    it("create user", async () => {
        return await request(url)
            .post("/v1/user")
            .send(userPayload)
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                const response = res.body;
                const data = response.data;
                userPayload.id = data.id;
                expect(res.statusCode).toBe(200);
                expect(data.email).toBe(userPayload.email);
                expect(data.username).toBe(userPayload.username);
                expect(data.identity_number).toBe(userPayload.identity_number);
                expect(data.account_number).toBe(userPayload.account_number);
            })
    });
});

describe("POST /v1/token", () => {
    it("generate token", async () => {
        return request(url)
            .post("/v1/token")
            .send({id: userPayload.identity_number})
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                const response = res.body;
                const data = response.data;
                token = data.token;
                expect(res.statusCode).toBe(200);
            })
    });
});

describe("GET /v1/user", () => {
    it("should return all users", async () => {
        return request(url)
            .get(`/v1/user`)
            .set({ Authorization: `Bearer ${token}` })
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                const response = res.body;
                const data = response.data;
                expect(res.statusCode).toBe(200);
                expect(Array.isArray(data)).toBe(true);
            })
    });
});

describe("PUT /v1/user", () => {
    it("Update user", async () => {
        return request(url)
            .put("/v1/user")
            .set({ Authorization: `Bearer ${token}` })
            .send(userPayload)
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                const response = res.body;
                const data = response.data;
                expect(res.statusCode).toBe(200);
                expect(data.id).toBe(userPayload.id);
                expect(data.email).toBe(userPayload.email);
                expect(data.username).toBe(userPayload.username);
                expect(data.identity_number).toBe(userPayload.identity_number);
                expect(data.account_number).toBe(userPayload.account_number);
            })
    });
});

describe("DELETE /v1/user", () => {
    it("Delete user", async () => {
        return request(url)
            .delete("/v1/user")
            .set({ Authorization: `Bearer ${token}` })
            .send({id: userPayload.id})
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                const response = res.body;
                const data = response.data;
                expect(res.statusCode).toBe(200);
                expect(data.id).toBe(userPayload.id);
            })
    });
});