Feature: End to end Ecommerce validation

    C1~CS1~A1~F9
    
    @Regression
    Scenario: Ecommerce products delivery
    Given Actor open ECommerce Page
    When Actor add items to Cart
    And Actor Validate the total prices
    Then Actor select the country submit and verify Thankyou

    @Smoke
    Scenario: Filling the form to shop
    Given Actor open ECommerce Page
    When Actor fill the form details
    |name | gender |
    |bobz | Male   |
    Then Actor validate the forms behaviour
    And Actor select the Shop Page



