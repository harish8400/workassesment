//#order_step > li.step_current.first
// #cgv shpping page

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class OrderPage extends Page {
    /**
     * define selectors using getter methods
     */
    
    get getcartTitle() { return $('//*[@id="cart_title"]')}
    get getDelete() { return $('//a[@title="Delete"]')}
    get getOrdermsg() { return $('#ordermsg > textarea')}
    get getSelectAddress () { return $('#id_address_delivery')}
    get btnProceedToCheckOut(){return $('//p[@class="cart_navigation clearfix"]//a[normalize-space(@title) = "Proceed to checkout"]')}
    get getCurrentOrderStep(){return $('#order_step > li.step_current')}
    get checkBoxAgree () { return $('#cgv')}
    get headerPaymentPage() { return $('#center_column > h1')}
    get productImage() {return $("//img[@alt='Faded Short Sleeve T-shirts']")}
    get productName() { return $('td.cart_description > p')}
    get unitPrice(){ return $('td.cart_unit')}
    get cartTotal(){return  $('td.cart_total')}
    
    get getproductTotal() { return $('#total_product')}
    get gettotalShipping() { return $('#total_shipping')}
    get getgrandTotal() { return $('#total_price_container')}
    get btnProcedcheckout_address(){ return $('#center_column > form > p > button')}
    get btnCheckout_Shipping() { return  $('//button[@name="processCarrier"]')}

    get selectOrderDelivery() { return $('#uniform-addressesAreEquals')}
    

}

module.exports = new OrderPage();