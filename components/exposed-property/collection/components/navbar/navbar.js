import { h } from "@stencil/core/internal";
import tailwind from "../../output.css";
import { data } from "../../data";
export class Navbar {
    constructor() {
        this.hotel = data.My_Result;
        this.language = 'English';
        this.currency = 'US$';
    }
    componentDidLoad() {
        const shadowRoot = this.element.shadowRoot;
        if (shadowRoot) {
            const style = document.createElement('style');
            style.textContent = tailwind;
            shadowRoot.appendChild(style);
        }
    }
    show() {
        console.log('hello');
        this.rf_show_popup.emit(true);
    }
    getData(event) {
        this.language = event.detail.lang;
        this.currency = event.detail.cur;
    }
    render() {
        return (h("nav", { key: '1849b5090fd7e5b38e7852653673fc23f53322cc', class: "flex flex-row justify-between px-4 lg:px-20 xl:px-60 py-3 fixed top-0 left-0 w-full bg-white z-10" }, h("div", { key: 'acc6f08cac252b057413cd73b59f12d25c8edce5', class: 'flex flex-col' }, h("div", { key: '4be237595a660cf736741fc0072d0b34862523ec', class: 'font-bold text-xl' }, this.hotel.name), h("small", { key: 'ec2d736fa48271a2e052ba35c4c0b6f03ff6f6d9', class: 'text-gray-600 text-base' }, this.hotel.area + ', ' + this.hotel.city.name + ', ' + this.hotel.country.name)), h("div", { key: 'b4819da9f995ad7e5e416b08f3c306e03290d4b6', class: "flex flex-row gap-2 md:gap-10 items-center text-gray-600 font-semibold" }, h("button", { key: '05126b6be41c7c42e7bda7cbd36257d2e9c9166a', class: 'hidden md:block hover:bg-gray-300 p-2 hover:rounded-full' }, "Booking code"), h("button", { key: 'f3cb9830254d3a4868e91ebc9363ed10905e86d2', class: 'hover:bg-gray-300 p-2 hover:rounded-full', onClick: this.show.bind(this) }, this.currency), h("button", { key: 'b8f80e5b7427f16f8e16df602bf22ede4f751fa7', class: 'hover:bg-gray-300 p-2 hover:rounded-full', onClick: this.show.bind(this) }, this.language), h("button", { key: 'fa98014ecdc9b0d80389bf7aca79b20a158539b5', class: 'hidden md:block hover:bg-gray-300 p-2 hover:rounded-full' }, "Sign in"))));
    }
    static get is() { return "rf-navbar"; }
    static get encapsulation() { return "shadow"; }
    static get states() {
        return {
            "language": {},
            "currency": {}
        };
    }
    static get events() {
        return [{
                "method": "rf_show_popup",
                "name": "rf_show_popup",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "element"; }
    static get listeners() {
        return [{
                "name": "rf_send_data",
                "method": "getData",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=navbar.js.map
