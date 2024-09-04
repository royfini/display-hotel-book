import { p as proxyCustomElement, H } from './p-b4114b3c.js';
import { h } from './p-8011f781.js';
import { t as tailwind } from './p-aa5b55de.js';
import { d as data } from './p-2240281a.js';

const Facilities = /*@__PURE__*/ proxyCustomElement(class Facilities extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.data = data.My_Result;
        this.properties = this.data.amenities.filter(e => {
            return e.amenity_type == 'property';
        });
        this.activities = this.data.amenities.filter(e => {
            return e.amenity_type == 'activity';
        });
        this.services = this.data.amenities.filter(e => {
            return e.amenity_type == 'service';
        });
    }
    componentDidLoad() {
        const shadowRoot = this.element.shadowRoot;
        if (shadowRoot) {
            const style = document.createElement('style');
            style.textContent = tailwind;
            shadowRoot.appendChild(style);
        }
    }
    render() {
        return (h("div", { key: '4943d47d01e32821c16e683d35c45804345d812b' }, h("div", { key: 'b68b0184cb723bef6bae6255cc9ff64f6b74cf27', class: "text-lg font-semibold mb-4 mt-10" }, "Facilities and services"), h("div", { key: '07becd367812fdd1e6024f9cf9c624ad5556b97b', class: "bg-gray-200 flex flex-col p-6 rounded-xl gap-3" }, h("div", { key: '3252ef43a8e3d2b457bbf94ecf8706888b1cd7d1', class: "flex flex-row gap-4" }, h("small", { key: '580ef42bd7679bb979798f1c48e0953b52665b1b' }, 'check in: from ' + this.data.time_constraints.check_in_from + ' until ' + this.data.time_constraints.check_in_till), h("small", { key: '914eae845ef8c1b509155f0368f849c71d3b43b0' }, 'check out: ' + this.data.time_constraints.check_out_till)), h("small", { key: 'ce3e311919507f245ce92d91cb8b503e1f2c5ae9' }, 'Public areas: ' + this.data.internet_offering.public_internet_statement), h("small", { key: 'd8b4f2771bc91c325574cf36f75dbfe9fc9251d6' }, this.data.parking_offering.title + ' At ' + '$' + this.data.parking_offering.pricing), h("small", { key: 'c645bf5c8fce5d7144fdda537395eec29c30e63b' }, this.data.pets_acceptance.title), h("small", { key: 'effd9eaabfa169eace26e8e94045479f54f9b0c5' }, this.data.baby_cot_offering.title), h("div", { key: 'fb651ff21723093a89d6467b0a8a127f10246e2a', class: "flex flex-col md:flex-row md:justify-between gap-3" }, h("div", { key: '32f8fdfe71b73198a527f73c9efc7dd9c1beea0e', class: "flex flex-col gap-1" }, h("small", { key: 'f4e4b8e916b96e44d1e9abd0446096668fd893c6', class: "font-bold" }, "Property facilities"), this.properties.map(e => {
            return h("small", null, e.description);
        })), h("div", { key: '442d277e960b8bdd541f1cdc1a14ef9f9cc12800', class: "flex flex-col gap-1" }, h("small", { key: 'e50596a7b84c9b3bcd76e1f57b8c7688b62acf40', class: "font-bold" }, "Activities"), this.activities.map(e => {
            return h("small", null, e.description);
        })), h("div", { key: '206b0972ccc56e6273d7f53e20fafd2d3804e0a2', class: "flex flex-col gap-1" }, h("small", { key: '6f2fe1f947a7c6f9b566a3aaf5e55c803afe47d6', class: "font-bold" }, "Services"), this.services.map(e => {
            return h("small", null, e.description);
        }))), h("div", { key: '0c5d1e7fe5d1aecd32faa4997f70102b525378ee', class: "flex flex-row gap-x-2" }, h("small", { key: 'df075cad3085ed54552cafc452fdc439720b630c', class: "font-bold" }, "Food and beverage: "), h("small", { key: '8bd6de314aa68d725fcc9d5b25a6519b5bc392dd' }, this.data.description.food_and_beverage)), h("div", { key: 'db7cd73ed1964f30ec1f69f14d1d420234e2ab2e', class: "flex flex-row gap-x-2" }, h("small", { key: '0b2fc21f8c4df9577c6e74c45d3d4a98dbe20282', class: "font-bold" }, "Accepted credit cards at the property:"), this.data.allowed_cards.map(e => {
            return h("small", null, e.name);
        })), h("small", { key: '0a6370458b323feef5c8b33d3df76244f06c7631' }, this.data.description.important_info))));
    }
    get element() { return this; }
}, [1, "rf-facilities"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["rf-facilities"];
    components.forEach(tagName => { switch (tagName) {
        case "rf-facilities":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Facilities);
            }
            break;
    } });
}
defineCustomElement();

export { Facilities as F, defineCustomElement as d };

//# sourceMappingURL=p-3fc9ba92.js.map