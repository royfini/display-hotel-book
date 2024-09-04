import { h } from "@stencil/core";
import tailwind from "../../output.css";
import { languages } from "../../languages";
import { currencies } from "../../currencies";
export class Popup {
    constructor() {
        this.languages = languages;
        this.currencies = currencies;
        this.language = 'English';
        this.currency = 'US$';
        this.index = undefined;
    }
    componentDidLoad() {
        const shadowRoot = this.element.shadowRoot;
        if (shadowRoot) {
            const style = document.createElement('style');
            style.textContent = tailwind;
            shadowRoot.appendChild(style);
        }
    }
    hide() {
        this.rf_hide_popup.emit(false);
    }
    getLang(lang, i) {
        this.language = lang;
        this.index = i;
    }
    getCur(event) {
        this.currency = event.target.value;
    }
    send() {
        this.rf_send_data.emit({ lang: this.language, cur: this.currency });
    }
    render() {
        return (h("div", { key: 'ad3db62c4cc18a3cd4a93b9ac9392423d8dfdfbe', class: "fixed inset-0 flex justify-center items-center z-50" }, h("div", { key: 'b3b9a0b165d95445a078f59e5b7f93896ef21290', class: "absolute inset-0 bg-gray-800 opacity-75" }), h("div", { key: '6b89ee912a1dbef37d2329d3152bd6389f0895c9', class: "bg-white z-10 w-full md:w-3/4 lg:w-1/2 xl:w-1/3 flex flex-col gap-8 p-6 rounded-lg" }, h("div", { key: '223c33b4bd881065b2e3db8b4da3b69cdb8c4513', class: "flex flex-row justify-between" }, h("h1", { key: '969dfa23fbd9ab48baa1d446503747cb71983c2a', class: "text-2xl font-semibold" }, "Display Settings"), h("button", { key: '76f8ae5ed98342b8d7f2986124a4785328034e34', class: "rounded-full hover:bg-gray-200 text-gray-500 font-semibold px-2", onClick: this.hide.bind(this) }, "X")), h("div", { key: '825297e11c94886937392f719594da67fd1f0cb3', class: "grid grid-cols-4 gap-2" }, this.languages.map((l, i) => {
            return (h("div", { class: {
                    'flex': true,
                    'flex-row': true,
                    'gap-1': true,
                    'hover:cursor-pointer': true,
                    'hover:bg-red-200': true,
                    'rounded-md': true,
                    'p-1': true,
                    'bg-red-200': this.index == i ? true : false,
                }, onClick: this.getLang.bind(this, l.description, i) }, h("div", { class: "rounded-full overflow-hidden w-5 h-5" }, h("img", { src: l.flag, class: "object-cover w-5 h-5" })), h("div", { class: "text-xs" }, l.description)));
        })), h("div", { key: 'a59003e9d5c465a5eb076259b1b03790a1d907e0', class: "relative w-full" }, h("select", { key: '949134e80069a331658db11f18f1b37a06cb1b6a', class: "border-2 rounded-md bg-white border-gray-400 h-10 w-full outline-none px-3", onChange: this.getCur.bind(this) }, this.currencies.map(c => {
            return h("option", { value: c.symbol, selected: c.symbol === this.currency }, c.symbol);
        })), h("label", { key: '2fcc656c6b019af85b697ff5ba4076e7c7c83a6a', class: "absolute top-0 left-4 text-gray-400 -translate-y-3 bg-white px-1" }, "Currency")), h("div", { key: '1994b0c11e36e8d9d972f0f4f80ac8a0b266bf2f', class: "flex flex-row justify-end gap-4" }, h("button", { key: 'dc069089ae2837af49e7059aa88012133f9ee72e', class: "border-2 border-gray-400 text-gray-400 rounded-full px-2 py-1", onClick: this.hide.bind(this) }, "Cancel"), h("button", { key: '78ca63c49f0ebcbea0becfb1075c2e4d80d4df95', class: "border-2 border-red-800 text-white bg-red-800 rounded-full px-2 py-1", onClick: () => {
                this.send();
                this.hide();
            } }, "Confirm")))));
    }
    static get is() { return "rf-popup"; }
    static get encapsulation() { return "shadow"; }
    static get states() {
        return {
            "language": {},
            "currency": {},
            "index": {}
        };
    }
    static get events() {
        return [{
                "method": "rf_hide_popup",
                "name": "rf_hide_popup",
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
            }, {
                "method": "rf_send_data",
                "name": "rf_send_data",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ lang: string; cur: string }",
                    "resolved": "{ lang: string; cur: string; }",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "element"; }
}
//# sourceMappingURL=popup.js.map
