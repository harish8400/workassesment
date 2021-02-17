Feature: Register,login and check-out the product

  Scenario: As a user, I can open automation webpage 

    Given I am on the automation practice webpage
    When I should see and click on the Sign button
    Then I can create account by entering emailid
    Then Enter personal information and should click on Register button
    Then Validate Landing page
    Then Add product to cart and Proceed to checkout
    Then Validate the product on Payment page 

