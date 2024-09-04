import { h } from "@stencil/core/internal";
export class DateRangerPicker {
    constructor() {
        this.show = false;
        this.firstDate = null;
        this.lastDate = null;
        this.guests = undefined;
    }
    open() {
        this.show = !this.show;
    }
    hide(event) {
        this.show = !event.detail;
    }
    getFirstDate(event) {
        this.firstDate = event.detail;
        this.lastDate = null;
    }
    getSecondDate(event) {
        this.lastDate = event.detail;
    }
    closeSecondDate(event) {
        this.lastDate = event.detail;
        this.show = false;
    }
    getGuest(event) {
        this.guests = event.detail;
    }
    handleClick() {
        var _a, _b;
        this.book.emit({
            firstDate: (_a = this.firstDate) === null || _a === void 0 ? void 0 : _a.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }),
            lastDate: (_b = this.lastDate) === null || _b === void 0 ? void 0 : _b.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }),
            guests: this.guests,
        });
    }
    render() {
        var _a, _b;
        let first;
        let second;
        if (this.lastDate == null) {
            first = this.firstDate;
            second = this.lastDate;
        }
        else if (this.firstDate < this.lastDate) {
            first = this.firstDate;
            second = this.lastDate;
        }
        else {
            first = this.lastDate;
            second = this.firstDate;
        }
        return (h("div", { key: '6f6d2bea3cc9a4a11d95e9573bde5028062bb241', class: "container" }, h("div", { key: '6516bd81de664c9c59598e91591c558d82c4ca14', class: "date-input", onClick: this.open.bind(this) }, h("span", { key: '7a6ba54268cabb8457d7be76338a1f5527b5c321' }, "Check in: "), h("input", { key: 'b2aa00b7d9fdd7f4d4b2dbe8e275c38530c07099', type: "text", value: (_a = first === null || first === void 0 ? void 0 : first.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })) !== null && _a !== void 0 ? _a : '', placeholder: "Select date" }), h("span", { key: 'b2c504164ef0277ec481d8da8ce5d566e6891335' }, "Check out: "), h("input", { key: '99748ae95d5a9e97b142a244a954dcb96287dd3f', type: "text", value: (_b = second === null || second === void 0 ? void 0 : second.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })) !== null && _b !== void 0 ? _b : '', placeholder: "Select date" })), this.show ? (h("div", { class: "calendar" }, h("rf-first", null), h("rf-second", null))) : null, h("rf-guest", { key: '51864e694880e1aa66fd31d4b6f62ab20c92b41b' }), h("button", { key: '529a4a7fb687fa62e3abaf36ad997424be8c2f8d', onClick: this.handleClick.bind(this) }, "Book Now")));
    }
    static get is() { return "rf-date-range-picker"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./date-range-picker.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["date-range-picker.css"]
        };
    }
    static get states() {
        return {
            "show": {},
            "firstDate": {},
            "lastDate": {},
            "guests": {}
        };
    }
    static get events() {
        return [{
                "method": "book",
                "name": "book",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ firstDate: string; lastDate: string; guests: number }",
                    "resolved": "{ firstDate: string; lastDate: string; guests: number; }",
                    "references": {}
                }
            }];
    }
    static get listeners() {
        return [{
                "name": "hide_cal",
                "method": "hide",
                "target": "body",
                "capture": false,
                "passive": false
            }, {
                "name": "send_first_date",
                "method": "getFirstDate",
                "target": "body",
                "capture": false,
                "passive": false
            }, {
                "name": "send_second_date",
                "method": "getSecondDate",
                "target": "body",
                "capture": false,
                "passive": false
            }, {
                "name": "close_cal",
                "method": "closeSecondDate",
                "target": "body",
                "capture": false,
                "passive": false
            }, {
                "name": "send_guest",
                "method": "getGuest",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=date-range-picker.js.map
