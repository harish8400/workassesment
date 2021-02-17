//#header > div.nav > div > div > nav > div:nth-child(1) > a > span

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LandingPage extends Page {
    /**
     * define selectors using getter methods
     */
    
    get get_userName() { return $('#header > div.nav > div > div > nav > div:nth-child(1) > a > span')}
    get labelMyAccount() { return $('#columns > div.breadcrumb.clearfix > span.navigation_page')}
    get returnToHome(){return $('a[title="Return to Home"]')}
    get menuTShirts(){return $('//*[@id="block_top_menu"]/ul/li[3]/a/..')}
    get productT_shirt(){return $('div[class="product-image-container"]')}
    get addTo_cart(){return $('#add_to_cart > button')}
    get btnProceedToCheckOut(){return $('//a[normalize-space(@title) = "Proceed to checkout"]')}
    get linktoSignOut() { return $('a[title="Log me out"]')}
    
    
    

    
}

module.exports = new LandingPage();
