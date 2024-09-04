import { h } from "@stencil/core/internal";
import tailwind from "../../output.css";
import { data } from "../../data";
export class Photo {
    constructor() {
        this.images = data.My_Result.images;
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
        return (h("div", { key: 'fb5ca2c8bf2e61714278fa0615afe2d18ebd239f', class: "flex flex-row gap-2 mt-20 mb-10" }, h("div", { key: '8639690fa5e7b4e7468f69f01fafc83f65e5b118', class: "w-full md:w-1/2 h-full" }, h("img", { key: '0e56e860676c4e40680a588de30fe9775cd0727a', src: this.images[0].url, class: "rounded-2xl object-cover w-full h-full" })), h("div", { key: '29f2ed688445b5dd448fbc7e6a8b702440ffbbf0', class: "w-1/2 hidden md:grid grid-cols-2 gap-2 h-full" }, h("img", { key: '971f8feee3f91dcfc24a735596fd3cfad1a50feb', src: this.images[1].url, class: "rounded-2xl object-cover w-full h-26" }), h("img", { key: 'b2d6ed9954587379dd120d57631604778f5c4d9e', src: this.images[2].url, class: "rounded-2xl object-cover w-full h-26" }), h("img", { key: '62d8f0734b23ab337b39756f34cbc60abaad2805', src: this.images[3].url, class: "rounded-2xl object-cover w-full h-26" }), h("img", { key: '74aebc8249ab681271d8308e615d63005806435e', src: this.images[4].url, class: "rounded-2xl object-cover w-full h-26" }))));
    }
    static get is() { return "rf-photo"; }
    static get encapsulation() { return "shadow"; }
    static get elementRef() { return "element"; }
}
//# sourceMappingURL=photo.js.map
