const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegistrationPage extends Page {
    /**
     * define selectors using getter methods
     */
    
    get btnCreate() { return $('#SubmitCreate')}
    get inputEmailId() { return $('#email_create')}
    get radioBtnMr(){return $('#id_gender1')}
    get radioBtnMrs(){return $('#id_gender1')}
    get inputCustomer_FirstName(){return $('#customer_firstname')}
    get inputCustomer_lastName(){return $('#customer_lastname')}
    get inputCustomer_lastName(){return $('#customer_lastname')}
    get inputEmail() { return $('#email')}
    get inputPassword() { return $('#passwd')}
    get inputCompany() { return $('#company')}
    get inputAddress1() { return $('#address1')}
    get inputAddress2() { return $('#address2')}
    get inputCity() { return $('#city')}
    get selectState() { return $('select[name="id_state"]')}
    get inputPostCode() { return $('#postcode')}
    get selectCountry() { return $('#id_country')}
    get inputHomePhone() {return $('#phone')}
    get inputMobilePhone () { return $('#phone_mobile')}
    get inputAddressAliasName() { return $('#alias')}
    get btnSubmit() { return $('#submitAccount')}
    
   enter_emailId(){
    var x = new Date()
    var UTCseconds = (x.getTime() + x.getTimezoneOffset()*60*1000)/1000;
    var emailtext = "automationap"+UTCseconds+"@gmail.com"
    console.log(emailtext)
       this.inputEmailId.setValue(emailtext);
   }
    
}

module.exports = new RegistrationPage();
