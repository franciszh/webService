import { Then, Given } from "cucumber";
import app from "../../../src/App";
import * as request from "supertest";
const sampleData = require("../scenarios/sampledata.json")

Given("the web service gets the request with sample data", function() {});

Then("the web service should return the correct output", function() {
  return request(app)
    .post("/")
    .send(sampleData)
    .expect(200)
    .then(res => {
      console.log(res.body);
    });
});
