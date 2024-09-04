import { h } from "@stencil/core";
export class Guest {
    constructor() {
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
    static get is() { return "rf-guest"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./guest.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["guest.css"]
        };
    }
    static get states() {
        return {
            "counter": {}
        };
    }
    static get events() {
        return [{
                "method": "send_guest",
                "name": "send_guest",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=guest.js.map
