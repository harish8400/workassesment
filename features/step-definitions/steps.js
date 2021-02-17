

const { Given, When, Then } = require('@cucumber/cucumber');

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const HomePage = require('../pageobjects/home.page');
const RegistrationPage=require('../pageobjects/registeration.page');
const LandingPage=require('../pageobjects/landing.page');
const OrderPage=require('../pageobjects/order.page');
const { addFeature  } = require('@wdio/allure-reporter').default



Given('I am on the automation practice webpage', () => {
 //   addFeature(' Automation Practive')
  //  startStep('I am on the automation practice webpage') 
    HomePage.open()
   
    expect(browser).toHaveTitle('My Store')
    
    browser.waitUntil(
        () => HomePage.searchBox.isDisplayed(),
        {
            timeout: 10000,
            timeoutMsg: 'Search Box is Expected'
        }
    );
    
    expect(HomePage.searchBox).toBeDisplayed()
});

When('I should see and click on the Sign button', () => {
 //   startStep('I should see and click on the Sign button') 
   
    browser.waitUntil(
        () => HomePage.sign_in_link.isDisplayed(),
        {
            timeout: 5000,
            timeoutMsg: 'Sign in link should expected'
        }
    );
    HomePage.sign_in_link.click()
    expect(browser).toHaveTitle('Login - My Store')
    expect(HomePage.searchBox).toBeDisplayed()
    

});

Then('I can create account by entering emailid', () => {
 //   startStep('I can create account by entering emailid')
    browser.waitUntil(
        () => RegistrationPage.btnCreate.isDisplayed(),
        {
            timeout: 5000,
            timeoutMsg: 'Create Button is expected'
        }
    );
    RegistrationPage.inputEmailId.waitForEnabled({ timeout: 100000 });
    RegistrationPage.enter_emailId()
    RegistrationPage.btnCreate.waitForClickable({ timeout: 30000 });
    RegistrationPage.btnCreate.click()
  
});

Then('Enter personal information and should click on Register button', () => {
  //  startStep('Enter personal information and should click on Register button')
    console.log('Enter personal information and should click on Register button')
    browser.waitUntil(
        () => RegistrationPage.radioBtnMr.isDisplayed(),
        {
            timeout: 10000,
            timeoutMsg: 'Button missing '
        }
    );
    RegistrationPage.radioBtnMr.click()
    RegistrationPage.inputCustomer_FirstName.setValue('automationfirstname')
    RegistrationPage.inputCustomer_lastName.setValue("lastnameautomation")
    RegistrationPage.inputPassword.setValue("Westlaw123")
    RegistrationPage.inputCompany.setValue("automationcompany")
    RegistrationPage.inputAddress1.setValue("street,automaiton,box 23")
    RegistrationPage.inputAddress2.setValue("street,testing,box 23")
    RegistrationPage.inputCity.setValue("New york")
    RegistrationPage.inputPostCode.setValue("40056")
   console.log(' after city')
   // 
   // browser.pause(30000)
   RegistrationPage.selectState.moveTo();
   RegistrationPage.selectState.scrollIntoView();
  // RegistrationPage.selectState.waitForClickable({ timeout: 30000 });
   
    RegistrationPage.selectState.selectByVisibleText('Alabama');
    //RegistrationPage.selectCountry.selectByVisibleText('cuatro');
    RegistrationPage.inputMobilePhone.scrollIntoView();
    RegistrationPage.inputMobilePhone.moveTo();
    console.log(' phone  scrioll ')
    RegistrationPage.inputMobilePhone.setValue('+12128973')
    console.log(' enter phone  scrioll ')
    RegistrationPage.inputAddressAliasName.scrollIntoView();
    RegistrationPage.inputAddressAliasName.moveTo();
    
    RegistrationPage.inputAddressAliasName.setValue("automaitontest")
    browser.pause(3000)
    RegistrationPage.btnSubmit.click()
    console.log('clicked on the reb button ')
    browser.pause(3000)
    browser.waitUntil(
        () => LandingPage.linktoSignOut.isDisplayed(),
        {
            timeout: 10000,
            timeoutMsg: 'Sign out button missing seems Reg failed '
        }
    );
   
});

Then('Validate Landing page', () => {
  //  startStep('Validate Landing page')
    console.log('Enter personal information and should click on Register button')
    browser.waitUntil(
        () => LandingPage.linktoSignOut.isDisplayed(),
        {
            timeout: 5000,
            timeoutMsg: 'Sign out button missing seems Reg failed '
        }
    );
   
    expect(LandingPage.linktoSignOut).toBeDisplayed()
    expect(LandingPage.labelMyAccount).toBeDisplayed()
    expect(LandingPage.get_userName).toBeDisplayed()
    LandingPage.returnToHome.click()

});

Then('Add product to cart and Proceed to checkout', () => {
//    startStep('Add product to cart and Proceed to checkout')
    console.log('Enter personal information and should click on Register button')
    LandingPage.menuTShirts.moveTo()
    LandingPage.menuTShirts.click()
    browser.pause(3000)
    LandingPage.productT_shirt.scrollIntoView()
    LandingPage.productT_shirt.click()
    LandingPage.addTo_cart.click()
    browser.waitUntil(
        () => LandingPage.btnProceedToCheckOut.isDisplayed(),
        {
            timeout: 30000,
            timeoutMsg: 'Search Box is Expected'
        }
    );

    LandingPage.btnProceedToCheckOut.click()
    
});

Then('Validate the product on Payment page', () => {
  //  startStep('Validate the product on Payment page')
    browser.pause(3000)
   
    console.log('Enter personal information and should click on Register button')
    OrderPage.btnProceedToCheckOut.scrollIntoView()
    OrderPage.btnProceedToCheckOut.moveTo()
    browser.pause(3000)
    OrderPage.btnProceedToCheckOut.waitForClickable({ timeout: 30000 });

    OrderPage.btnProceedToCheckOut.click()
 //Addresss
    browser.waitUntil(
        () => OrderPage.selectOrderDelivery.isDisplayed(),
        {
            timeout: 30000,
            timeoutMsg: 'Address box expected'
        }
    );
    OrderPage.getOrdermsg.scrollIntoView()
    OrderPage.getOrdermsg.moveTo()
  //  OrderPage.getOrdermsg.setValue(' Test Automation')
    OrderPage.btnProcedcheckout_address.scrollIntoView()
    OrderPage.btnProcedcheckout_address.moveTo()
    browser.pause(3000)
    OrderPage.btnProcedcheckout_address.waitForClickable({ timeout: 30000 });
//Shipping

    OrderPage.btnProcedcheckout_address.click()
   
    browser.pause(3000)
   // OrderPage.checkBoxAgree.waitForClickable({ timeout: 30000 });
    OrderPage.checkBoxAgree.click()
    OrderPage.btnCheckout_Shipping.scrollIntoView()
    OrderPage.btnCheckout_Shipping.moveTo()
    browser.pause(3000)
    OrderPage.btnCheckout_Shipping.waitForClickable({ timeout: 30000 });

    OrderPage.btnCheckout_Shipping.click()
    //payment
    browser.pause(3000)
    expect(OrderPage.headerPaymentPage).toHaveText('Please choose your payment method', {ignoreCase: true, asString: true});
    expect(OrderPage.productName).toHaveText('Faded Short Sleeve T-shirts')
    expect(OrderPage.unitPrice).toHaveText('$16.51')


});




