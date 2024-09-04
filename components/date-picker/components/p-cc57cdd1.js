import { p as proxyCustomElement, H, c as createEvent, h } from './p-f27a3bd0.js';

const guestCss = "button{border:none;background-color:transparent;font-size:large}button:hover{cursor:pointer}.container{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:0.5rem}.wrap{display:flex;flex-direction:column}";
const RfGuestStyle0 = guestCss;

const Guest = /*@__PURE__*/ proxyCustomElement(class Guest extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.send_guest = createEvent(this, "send_guest", 7);
        this.counter = 0;
    }
    increment() {
        this.counter++;
        this.send_guest.emit(this.counter);
    }
    decrement() {
        if (this.counter > 1) {
            this.counter--;
        }
        this.send_guest.emit(this.counter);
    }
    render() {
        return (h("div", { key: '825f25c893cd357b3a8a838790ed72534216e4f3', class: "container" }, h("div", { key: '80646938a7276194b4b6e8797af00a556a735aed' }, this.counter), h("div", { key: '7d2c0d9a3aeba852d9856fc56d4ee9d9539a91a8' }, this.counter == 1 ? 'guest' : 'guests'), h("div", { key: '79bdb0eb29ff71990881bf19e7dfcafcbb4d8f27', class: "wrap" }, h("button", { key: '6682ddb342f910cef97c17e1861d352e1c49bd13', onClick: this.increment.bind(this) }, "+"), h("button", { key: '31bec25c71c79ecf2fb807fc509c1123d4e34cc9', onClick: this.decrement.bind(this) }, "-"))));
    }
    static get style() { return RfGuestStyle0; }
}, [1, "rf-guest", {
        "counter": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["rf-guest"];
    components.forEach(tagName => { switch (tagName) {
        case "rf-guest":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Guest);
            }
            break;
    } });
}
defineCustomElement();

export { Guest as G, defineCustomElement as d };

//# sourceMappingURL=p-cc57cdd1.js.map