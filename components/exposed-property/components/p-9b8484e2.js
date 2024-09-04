import { p as proxyCustomElement, H, c as createEvent, h } from './p-b4114b3c.js';
import { t as tailwind } from './p-aa5b55de.js';

const Carousel = /*@__PURE__*/ proxyCustomElement(class Carousel extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.rf_show = createEvent(this, "rf_show", 7);
        this.goToPrevious = () => {
            if (this.currentIndex > 0) {
                this.currentIndex--;
            }
        };
        this.goToNext = () => {
            if (this.currentIndex < this.images.length - 1) {
                this.currentIndex++;
            }
        };
        this.images = [];
        this.currentIndex = 0;
        this.roomId = undefined;
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
        this.rf_show.emit(this.roomId);
    }
    render() {
        return (h("div", { key: 'c10e75abcd43cf72b1119bcdf83333dc68ce27a7', class: "relative w-full h-full" }, h("button", { key: '9b0f21f7efe7859e10683b60fc409cf899015884', onClick: this.goToPrevious.bind(this), disabled: this.currentIndex === 0, class: {
                'absolute z-30 left-1 top-1/2 transform -translate-y-1/2 bg-gray-100 text-black p-1 rounded-full focus:outline-none': true,
                'opacity-50 cursor-not-allowed': this.currentIndex === 0,
            } }, "\u276E"), h("img", { key: 'db1254dfd5410e64f5c59a6f903054d236962537', src: this.images[this.currentIndex], class: "w-full h-full block object-cover", onClick: this.show.bind(this) }), h("button", { key: '84ed2475bcda1dc065f92f35b9e6bc6cc28f1fe4', onClick: this.goToNext.bind(this), disabled: this.currentIndex === this.images.length - 1, class: {
                'absolute z-30 right-1 top-1/2 transform -translate-y-1/2 bg-gray-100 text-black p-1 rounded-full focus:outline-none': true,
                'opacity-50 cursor-not-allowed': this.currentIndex === this.images.length - 1,
            } }, "\u276F")));
    }
    get element() { return this; }
}, [1, "rf-carousel", {
        "images": [16],
        "roomId": [2, "room-id"],
        "currentIndex": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["rf-carousel"];
    components.forEach(tagName => { switch (tagName) {
        case "rf-carousel":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Carousel);
            }
            break;
    } });
}
defineCustomElement();

export { Carousel as C, defineCustomElement as d };

//# sourceMappingURL=p-9b8484e2.js.map