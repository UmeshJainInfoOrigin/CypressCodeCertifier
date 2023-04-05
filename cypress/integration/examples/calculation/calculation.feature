Feature: End to end Ecommerce validation


    C1~CS1~A1~F9
    application Regression
    @Regression
    Scenario: Ecommerce products delivery
    Given I open ECommerce Page
    When II add items to Cart
    And II Validate the total prices
    Then II select the country submit and verify Thankyou

    @Smoke
    Scenario: Filling the form to shop
    Given I open ECommerce Page
    When II fill the form details
    |name | gender |
    |bobz | Male   |
    Then II validate the forms behaviour
    And II select the Shop Page




