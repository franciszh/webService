import { Then, Given } from "cucumber";
import app from "../../../src/App";
import * as request from "supertest";
import { expect } from "chai";

Given("the web service gets the request with invalid json data", () => {});

Then("the web service should return the correct error message", done => {
  request(app)
    .post("/")
    .send('{"message": test}')
    .type("json")
    .end((err, res) => {
      expect(res.status).to.equal(400);
      expect(res.body).to.deep.equal({
        error: "Could not decode request: JSON parsing failed"
      });
      done();
    });
});
