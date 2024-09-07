import Page from "./page";

class Homepage extends Page {
    get homepage() {
        return $(".home");
    }
    open() {
        return super.open("");
    }
}

export default new Homepage();
