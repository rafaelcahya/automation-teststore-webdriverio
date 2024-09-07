import { $ } from "@wdio/globals";

class Navbar {
    get logo() {
        return $(".logo");
    }

    get loginRegisterBtn() {
        return $("#customer_menu_top");
    }

    get specialsBtn(){
        return $(".menu_specials")
    }

    get accountBtn(){
        return $(".menu_account")
    }

    get accountDropdownMenu(){
        return $(".dropdown-menu")
    }

    get loginBtnAccountDropdownMenu(){
        return $(".menu_login")
    }

    get checkYourOrderBtnAccountDropdownMenu(){
        return $(".menu_order")
    }

    get cartBtn(){
        return $("li[data-id='menu_cart'] a")
    }
    
    get checkoutBtn(){
        return $(".menu_checkout")
    }
}

export default new Navbar();
