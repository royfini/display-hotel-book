import { h } from "@stencil/core";
import tailwind from "../../output.css";
import { data } from "../../data";
export class Modal {
    constructor() {
        this.rooms = data.My_Result.roomtypes;
        this.amenities = data.My_Result.amenities;
        this.roomAmenities = this.amenities.filter(r => {
            return r.amenity_type == 'room';
        });
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
    hide() {
        this.rf_hide.emit(false);
    }
    render() {
        return (h("div", { key: '6c3de30e39a3f284020d9e2013002fc2aef5521d', class: "fixed inset-0 flex justify-center items-center z-50" }, h("div", { key: 'fff75f5e13c31e0f8377c132152fb46f7bb90b4f', class: "absolute inset-0 bg-gray-800 opacity-75", onClick: this.hide.bind(this) }), h("div", { key: '18dc758ecebe0875f6c6d7bd62812f232a87d573', class: "relative bg-white w-full lg:w-3/4 xl:w-1/2 p-6 rounded-lg md:h-3/4 overflow-y-scroll shadow-lg z-10 flex flex-col gap-2" }, h("div", { key: '86d354d3fb20e9bf8eeff034c8777d6ddb61bb06', class: 'flex flex-row justify-between' }, h("h1", { key: '507a800b0f0d34bf421fe1882e0474426df2bf95', class: "text-2xl font-semibold" }, this.rooms[this.roomId].name), h("button", { key: '1cba3d6eeb5e7aaac52dfb81e13acda49f9cb5fb', class: 'rounded-full hover:bg-gray-200 text-gray-500 font-semibold px-2', onClick: this.hide.bind(this) }, "X")), h("div", { key: 'ec58c90baabf8e7d3e938689b81523b5ae23ec50', class: "hidden md:block w-3/4 h-3/4 m-auto" }, h("rf-carousel", { key: 'eaa264d82117c546c43362fb15d81c0883854b3f', images: this.rooms[this.roomId].images.map(i => {
                return i.url;
            }) })), h("div", { key: 'dcd55946bc8a6475898bb586d45a135761519f4e', class: "flex flex-row gap-4 text-sm justify-start font-semibold" }, h("div", { key: 'ba1dc99ef6ce38e132fe11280c8a16efdd4e3108' }, this.rooms[this.roomId].size, "m", h("sup", { key: '559b3b6f41759b8fdfdf80980f8c0fb85f6f8ca8' }, "2")), h("div", { key: '53c41c5ba0a57f97349ba39a5df0ea0690c3e094' }, this.amenities[25].description), h("div", { key: '6365d585fb454f6e226e43cdcc0396048c4170fb', class: "flex flex-row gap-x-2" }, this.rooms[this.roomId].bedding_setup.map(b => {
            return h("div", null, b.name);
        }))), h("div", { key: '26776dffd6be5a894ee44718917c24f351811dfb', class: "text-sm" }, this.rooms[this.roomId].description), h("h3", { key: '05e498b5a40c61cad3377fab03fb24dc486945db', class: "text-lg font-semibold" }, "Amenities"), h("div", { key: 'e63a12ba0e48495aa3d8cca7df8b62bce9e18969', class: "grid grid-cols-3 gap-y-1" }, this.roomAmenities.map(e => {
            return h("div", { class: "text-sm" }, e.description);
        })))));
    }
    static get is() { return "rf-modal"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "roomId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "room-id",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "rf_hide",
                "name": "rf_hide",
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
}
//# sourceMappingURL=modal.js.map
