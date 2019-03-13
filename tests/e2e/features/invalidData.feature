Feature: Invalid JSON data
Scenario: Invalid JSON data is sent to the web service
Given the web service gets the request with invalid json data
Then the web service should return the correct error message