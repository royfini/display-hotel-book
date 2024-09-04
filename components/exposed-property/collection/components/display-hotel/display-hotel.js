import { h } from "@stencil/core/internal";
import tailwind from "../../output.css";
export class DisplayHotel {
    constructor() {
        this.modal = false;
        this.myId = undefined;
        this.popup = false;
    }
    componentDidLoad() {
        const shadowRoot = this.element.shadowRoot;
        if (shadowRoot) {
            const style = document.createElement('style');
            style.textContent = tailwind;
            shadowRoot.appendChild(style);
        }
    }
    hide(event) {
        this.modal = event.detail;
    }
    show(event) {
        this.modal = true;
        this.myId = event.detail;
    }
    getId(event) {
        this.myId = event.detail;
        this.modal = true;
    }
    showPopup(event) {
        this.popup = event.detail;
    }
    hidePopup(event) {
        this.popup = event.detail;
    }
    render() {
        return (h("div", { key: 'a8d2fb931dee930043c1d9c1ab632c6919a8226b', class: 'flex flex-col mx-0 lg:mx-20 xl:mx-60' }, h("rf-navbar", { key: 'aef4dcc66bdaf2a68f214cf98b8eb757eac30133' }), h("rf-photo", { key: '5061fe0d5ff58f7fa18972a36b5de356dd6e2e1e' }), h("rf-rooms", { key: '5fe0f6c66ee564bed85ca2778e9d399dbeb91d88' }), this.modal ? h("rf-modal", { roomId: this.myId }) : null, this.popup ? h("rf-popup", null) : null, h("rf-facilities", { key: '132dcb11f0af3bbc6acf43f3e1ec1b93ee8c50ba' })));
    }
    static get is() { return "rf-display-hotel"; }
    static get encapsulation() { return "shadow"; }
    static get states() {
        return {
            "modal": {},
            "myId": {},
            "popup": {}
        };
    }
    static get elementRef() { return "element"; }
    static get listeners() {
        return [{
                "name": "rf_hide",
                "method": "hide",
                "target": "body",
                "capture": false,
                "passive": false
            }, {
                "name": "rf_show",
                "method": "show",
                "target": "body",
                "capture": false,
                "passive": false
            }, {
                "name": "rf_sendId",
                "method": "getId",
                "target": "body",
                "capture": false,
                "passive": false
            }, {
                "name": "rf_show_popup",
                "method": "showPopup",
                "target": "body",
                "capture": false,
                "passive": false
            }, {
                "name": "rf_hide_popup",
                "method": "hidePopup",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=display-hotel.js.map
