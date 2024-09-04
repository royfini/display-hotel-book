import { p as proxyCustomElement, H, c as createEvent, h } from './p-b4114b3c.js';
import { t as tailwind } from './p-aa5b55de.js';

const languages = [
    {
        "code": "EN",
        "culture": "en-GB",
        "description": "English",
        "direction": "LTR",
        "entries": null,
        "flag": "https://flaglog.com/img/unitedstates1960.png",
        "id": 2
    },
    {
        "code": "FR",
        "culture": "fr-FR",
        "description": "Français",
        "direction": "LTR",
        "entries": null,
        "flag": "https://flaglog.com/img/france1794.png",
        "id": 3
    },
    {
        "code": "AR",
        "culture": "ar-SA",
        "description": "العربية",
        "direction": "RTL",
        "entries": null,
        "flag": "https://flaglog.com/img/saudiarabia1984.png",
        "id": 4
    },
    {
        "code": "RU",
        "culture": "ru-RU",
        "description": "Русский",
        "direction": "LTR",
        "entries": null,
        "flag": "https://flaglog.com/img/russia1705.png",
        "id": 7
    },
    {
        "code": "EL",
        "culture": "el-GR",
        "description": "Ελληνικά",
        "direction": "LTR",
        "entries": null,
        "flag": "https://flaglog.com/img/greece1822.png",
        "id": 8
    },
    {
        "code": "PL",
        "culture": "pl-PL",
        "description": "Polski",
        "direction": "LTR",
        "entries": null,
        "flag": "https://flaglog.com/img/poland1916.png",
        "id": 10
    },
    {
        "code": "DE",
        "culture": "de-DE",
        "description": "Deutsch",
        "direction": "LTR",
        "entries": null,
        "flag": "https://flaglog.com/img/germany1949.png",
        "id": 11
    },
    {
        "code": "UA",
        "culture": "ua-UA",
        "description": "Українська",
        "direction": "LTR",
        "entries": null,
        "flag": "https://flaglog.com/img/ukraine1918.png",
        "id": 12
    }
];

const currencies = [
    {
        "code": "AED",
        "id": 1,
        "symbol": "AED"
    },
    {
        "code": "LBP",
        "id": 2,
        "symbol": "LBP"
    },
    {
        "code": "EUR",
        "id": 3,
        "symbol": "€"
    },
    {
        "code": "USD",
        "id": 4,
        "symbol": "US$"
    },
    {
        "code": "SAR",
        "id": 5,
        "symbol": "SAR"
    },
    {
        "code": "GBP",
        "id": 9,
        "symbol": "GBP"
    },
    {
        "code": "EGP",
        "id": 11,
        "symbol": "EGP"
    },
    {
        "code": "RUB",
        "id": 12,
        "symbol": "RUB"
    },
    {
        "code": "JOD",
        "id": 14,
        "symbol": "JOD"
    },
    {
        "code": "RON",
        "id": 15,
        "symbol": "RON"
    },
    {
        "code": "QAR",
        "id": 16,
        "symbol": "QAR"
    },
    {
        "code": "KWD",
        "id": 17,
        "symbol": "KWD"
    },
    {
        "code": "BHD",
        "id": 18,
        "symbol": "BHD"
    },
    {
        "code": "OMR",
        "id": 19,
        "symbol": "OMR"
    },
    {
        "code": "SYP",
        "id": 20,
        "symbol": "SYP"
    },
    {
        "code": "IQD",
        "id": 21,
        "symbol": "IQD"
    },
    {
        "code": "VND",
        "id": 22,
        "symbol": "VND"
    },
    {
        "code": "CAD",
        "id": 23,
        "symbol": "CAD"
    },
    {
        "code": "AUD",
        "id": 24,
        "symbol": "AUD"
    },
    {
        "code": "GEL",
        "id": 25,
        "symbol": "GEL"
    },
    {
        "code": "GNF",
        "id": 26,
        "symbol": "GNF"
    },
    {
        "code": "ALL",
        "id": 30,
        "symbol": "ALL"
    },
    {
        "code": "AMD",
        "id": 31,
        "symbol": "AMD"
    },
    {
        "code": "ARS",
        "id": 32,
        "symbol": "ARS"
    },
    {
        "code": "BGN",
        "id": 34,
        "symbol": "BGN"
    },
    {
        "code": "BRL",
        "id": 37,
        "symbol": "BRL"
    },
    {
        "code": "BYN",
        "id": 38,
        "symbol": "BYN"
    },
    {
        "code": "CNY",
        "id": 40,
        "symbol": "CNY"
    },
    {
        "code": "CHF",
        "id": 41,
        "symbol": "CHF"
    },
    {
        "code": "CZK",
        "id": 43,
        "symbol": "CZK"
    },
    {
        "code": "DKK",
        "id": 44,
        "symbol": "DKK"
    },
    {
        "code": "GHS",
        "id": 46,
        "symbol": "GHS"
    },
    {
        "code": "HRK",
        "id": 47,
        "symbol": "HRK"
    },
    {
        "code": "HUF",
        "id": 48,
        "symbol": "HUF"
    },
    {
        "code": "IDR",
        "id": 49,
        "symbol": "IDR"
    },
    {
        "code": "ILS",
        "id": 50,
        "symbol": "ILS"
    },
    {
        "code": "INR",
        "id": 51,
        "symbol": "INR"
    },
    {
        "code": "JPY",
        "id": 53,
        "symbol": "JPY"
    },
    {
        "code": "KRW",
        "id": 55,
        "symbol": "KRW"
    },
    {
        "code": "MAD",
        "id": 57,
        "symbol": "MAD"
    },
    {
        "code": "MDL",
        "id": 58,
        "symbol": "MDL"
    },
    {
        "code": "MKD",
        "id": 59,
        "symbol": "MKD"
    },
    {
        "code": "MVR",
        "id": 60,
        "symbol": "MVR"
    },
    {
        "code": "MXN",
        "id": 61,
        "symbol": "MXN"
    },
    {
        "code": "MYR",
        "id": 62,
        "symbol": "MYR"
    },
    {
        "code": "NGN",
        "id": 63,
        "symbol": "NGN"
    },
    {
        "code": "NOK",
        "id": 64,
        "symbol": "NOK"
    },
    {
        "code": "PHP",
        "id": 67,
        "symbol": "PHP"
    },
    {
        "code": "PLN",
        "id": 68,
        "symbol": "PLN"
    },
    {
        "code": "RSD",
        "id": 71,
        "symbol": "RSD"
    },
    {
        "code": "SEK",
        "id": 74,
        "symbol": "SEK"
    },
    {
        "code": "SGD",
        "id": 76,
        "symbol": "SGD"
    },
    {
        "code": "THB",
        "id": 77,
        "symbol": "THB"
    },
    {
        "code": "TRY",
        "id": 78,
        "symbol": "TRY"
    },
    {
        "code": "UAH",
        "id": 79,
        "symbol": "UAH"
    },
    {
        "code": "ZAR",
        "id": 82,
        "symbol": "ZAR"
    }
];

const Popup = /*@__PURE__*/ proxyCustomElement(class Popup extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.rf_hide_popup = createEvent(this, "rf_hide_popup", 7);
        this.rf_send_data = createEvent(this, "rf_send_data", 7);
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
    get element() { return this; }
}, [1, "rf-popup", {
        "language": [32],
        "currency": [32],
        "index": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["rf-popup"];
    components.forEach(tagName => { switch (tagName) {
        case "rf-popup":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Popup);
            }
            break;
    } });
}
defineCustomElement();

export { Popup as P, defineCustomElement as d };

//# sourceMappingURL=p-b9aab51d.js.map