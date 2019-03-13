import { Then, Given } from "cucumber";
import app from "../../../src/App";
import * as request from "supertest";
import { expect } from "chai";
const sampleData = require("../scenarios/sampledata.json");
const sampleOutput = require("../data/sampleOutput.json");

Given("the web service gets the request with sample data", () => {});

Then("the web service should return the correct output", () => {
  return request(app)
    .post("/")
    .send(sampleData)
    .expect(200)
    .then(res => {
      expect(res.body).to.deep.equal(sampleOutput);
    });
});
