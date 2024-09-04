import { p as proxyCustomElement, H, c as createEvent } from './p-b4114b3c.js';
import { h } from './p-8011f781.js';
import { t as tailwind } from './p-aa5b55de.js';
import { d as data } from './p-2240281a.js';
import { d as defineCustomElement$1 } from './p-9b8484e2.js';

const Rooms = /*@__PURE__*/ proxyCustomElement(class Rooms extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.rf_sendId = createEvent(this, "rf_sendId", 7);
        this.rooms = data.My_Result.roomtypes;
        this.amenities = data.My_Result.amenities;
    }
    componentDidLoad() {
        const shadowRoot = this.element.shadowRoot;
        if (shadowRoot) {
            const style = document.createElement('style');
            style.textContent = tailwind;
            shadowRoot.appendChild(style);
        }
    }
    sendId(id) {
        console.log(id);
        this.rf_sendId.emit(id);
    }
    render() {
        return (h("div", { key: '2245718de6b6b5814fdea8d90a432e94f8add41d' }, this.rooms.map((e, i) => {
            return (h("div", { class: "flex flex-col md:flex-row bg-gray-200 rounded-lg my-4 p-4 gap-4" }, h("div", { class: "rounded-lg overflow-hidden w-full md:w-1/4 h-72 md:h-48 relative hover:cursor-pointer" }, h("rf-carousel", { images: e.images.map(i => {
                    return i.url;
                }), roomId: i }), h("div", { class: "absolute bottom-0 flex flex-row w-full justify-between px-4 bg-gray-400 bg-opacity-70", onClick: this.sendId.bind(this, i) }, h("div", null, "Max ", e.occupancy_max.adult_nbr), h("div", null, e.size, "m", h("sup", null, "2")), h("div", null, "...more"))), h("div", { class: "w-full md:w-3/4 flex flex-col gap-y-2" }, h("h3", { class: "text-2xl font-semibold" }, e.name), h("div", { class: "flex flex-row gap-x-4" }, e.bedding_setup.map(b => {
                return h("div", { class: "text-sm" }, b.name);
            })), h("div", { class: "flex flex-row gap-x-4 text-sm" }, h("div", null, this.amenities[2].description), h("div", null, this.amenities[14].description), h("div", null, this.amenities[25].description)), h("div", { class: "text-sm" }, e.description))));
        })));
    }
    get element() { return this; }
}, [1, "rf-rooms"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["rf-rooms", "rf-carousel"];
    components.forEach(tagName => { switch (tagName) {
        case "rf-rooms":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Rooms);
            }
            break;
        case "rf-carousel":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}
defineCustomElement();

export { Rooms as R, defineCustomElement as d };

//# sourceMappingURL=p-55bf82af.js.map