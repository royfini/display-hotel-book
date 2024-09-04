import { p as proxyCustomElement, H, c as createEvent, h } from './p-f27a3bd0.js';

const firstCss = ".date-input{padding:10px;font-size:1rem;border-radius:5px;border:1px solid #eee}.datepicker-container{position:relative}.datepicker{position:absolute;top:100%;z-index:100;margin-top:2px;background:#fff;padding:10px;border-radius:5px}.datepicker button{cursor:pointer;border:none;border-radius:3px;background:transparent;font-size:14px;font-weight:500;text-transform:uppercase;transition:0.3s}.days,.dates{display:grid;grid-template-columns:repeat(7, 32px);gap:10px;margin-block:10px}.days span{font-size:14px;font-weight:600;text-transform:uppercase;text-align:center}.dates button{color:slategray;aspect-ratio:1}.dates button:disabled{opacity:0.5;pointer-events:none;user-select:none}.dates button:hover{background:rgba(119, 136, 153, 0.1)}.dates button.today{background:rgb(197, 191, 191);color:gray}.dates button.selected{background:gray;color:#fff}.datepicker-header{display:flex;align-items:center;justify-content:space-between;padding-bottom:10px;border-bottom:1px solid #eee}.datepicker-header select,.datepicker-header input{font-size:14px;border:1px solid #eee}.datepicker-header input{max-width:64px}.datepicker-header button{color:slategray}.datepicker-header button:hover{color:black}.datepicker-footer{display:flex;justify-content:flex-end;gap:10px;padding-top:10px;border-top:1px solid #eee}.datepicker-footer button{background:rgba(119, 136, 153, 0.1);padding:3px 10px}.datepicker-footer button.apply{background:gray;color:#fff}";
const RfFirstStyle0 = firstCss;

const First = /*@__PURE__*/ proxyCustomElement(class First extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.hide_cal = createEvent(this, "hide_cal", 7);
        this.send_first_date = createEvent(this, "send_first_date", 7);
        this.send_second_date = createEvent(this, "send_second_date", 7);
        this.sub_month = createEvent(this, "sub_month", 7);
        this.upd_month = createEvent(this, "upd_month", 7);
        this.upd_year = createEvent(this, "upd_year", 7);
        this.close_cal = createEvent(this, "close_cal", 7);
        this.selectedDate = new Date();
        this.is_second_selected = false;
        //render the dates in the calendar interface
        this.displayDates = () => {
            const dates = this.divDates;
            //update year & month whenever the dates are updated
            this.updateYearMonth();
            // clear the dates
            dates.innerHTML = '';
            //* display the last week of previous month
            //get the last date of previous month
            const lastOfPrevMonth = new Date(this.year, this.month, 0);
            for (let i = 0; i <= lastOfPrevMonth.getDay(); i++) {
                const text = lastOfPrevMonth.getDate() - lastOfPrevMonth.getDay() + i;
                const button = this.createButton(text.toString(), true, -1);
                dates.appendChild(button);
            }
            //* display the current month
            //get the last date of the month
            const lastOfMonth = new Date(this.year, this.month + 1, 0);
            for (let i = 1; i <= lastOfMonth.getDate(); i++) {
                const button = this.createButton(i.toString(), false);
                const currentDate = new Date();
                if (this.month < currentDate.getMonth()) {
                    button.disabled = true;
                }
                if (i < currentDate.getDay() + 1) {
                    button.disabled = true;
                }
                button.addEventListener('click', event => this.handleClick(dates, event));
                dates.appendChild(button);
            }
            //* display the first week of next month
            const firstOfNextMonth = new Date(this.year, this.month + 1, 1);
            for (let i = firstOfNextMonth.getDay(); i < 7; i++) {
                const text = firstOfNextMonth.getDate() - firstOfNextMonth.getDay() + i;
                const button = this.createButton(text.toString(), true, 1);
                dates.appendChild(button);
            }
        };
        this.createButton = (text, isDisabled = false, type = 0) => {
            const currentDate = new Date();
            // determine the date to compare based on the button type
            let comparisonDate = new Date(this.year, this.month + type, Number(text));
            // check if the current button is the date today
            const isToday = currentDate.getDate().toString() === text && currentDate.getFullYear() === this.year && currentDate.getMonth() === this.month + type;
            // check if the current button is selected
            const selected = this.selectedDate.getTime() === comparisonDate.getTime();
            const button = document.createElement('button');
            button.textContent = text;
            button.disabled = isDisabled;
            button.classList.toggle('today', isToday); //if is today true,add class 'today'
            button.classList.toggle('selected', selected);
            return button;
        };
        this.isOpen = false;
        this.year = this.selectedDate.getFullYear();
        this.month = this.selectedDate.getMonth();
    }
    open() {
        this.isOpen = !this.isOpen;
    }
    // handle apply button click
    handleApplyBtn() {
        this.dateInput.value = this.selectedDate.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
    }
    // handle prev month nav
    handlePrevBtn() {
        this.sub_month.emit({ month: this.month, year: this.year });
        if (this.month === 0) {
            this.year--;
        }
        this.month = (this.month - 1 + 12) % 12;
        this.displayDates();
    }
    //  handle month input change
    changeMonth() {
        this.month = this.monthInput.selectedIndex;
        this.displayDates();
        this.upd_month.emit({ month: this.month, year: this.year });
    }
    // handle year input change event
    changeYear() {
        this.year = Number(this.yearInput.value);
        this.displayDates();
        this.upd_year.emit({ month: this.month, year: this.year });
    }
    updateYearMonth() {
        this.monthInput.selectedIndex = this.month;
        this.yearInput.value = this.year.toString();
    }
    handleClick(dates, e) {
        const button = e.target;
        //remove the 'selected' class from other buttons
        const selected = dates.querySelector('.selected');
        // selected && selected.classList.remove('selected');
        // add the 'selected' class to current button
        button.classList.add('selected');
        // set the selected date
        this.selectedDate = new Date(this.year, this.month, parseInt(button.textContent));
        if (this.is_second_selected) {
            this.close_cal.emit(this.selectedDate);
        }
        else if (selected) {
            this.send_second_date.emit(this.selectedDate);
            this.hide_cal.emit(true);
        }
        else {
            this.send_first_date.emit(this.selectedDate);
        }
    }
    listenMonth(event) {
        this.month = event.detail.month;
        this.year = event.detail.year;
        this.displayDates();
    }
    getFirstDate() {
        this.is_second_selected = true;
    }
    updM(event) {
        this.month = event.detail.month;
        this.year = event.detail.year;
        if (this.month === 0) {
            this.year--;
        }
        this.month = (this.month - 1 + 12) % 12;
        this.displayDates();
    }
    updY(event) {
        this.year = event.detail.year;
        if (this.month === 11) {
            this.year--;
        }
        this.displayDates();
    }
    componentDidLoad() {
        this.displayDates();
    }
    render() {
        return (h("div", { key: '1a63fc2cef65dd63d55b945deced719ce90226e5', class: "datepicker-container" }, h("div", { key: '267ab16cca97e616c67253f106066ec2fe2439e7', class: "datepicker" }, h("div", { key: '678e4ea6cbfc9192f4e7ab9df74bca4e3b537a79', class: "datepicker-header" }, h("button", { key: '16d395caee72b971d50508ed4896677b8afaa20a', class: "prev", ref: el => (this.prevBtn = el), onClick: this.handlePrevBtn.bind(this) }, "Prev"), h("div", { key: 'cbcf8f4048bcc758f7a90708390dca6b798efecb' }, h("select", { key: '75b634d2f926a530a45cefe87307289bd0f6f7d2', class: "month-input", ref: el => (this.monthInput = el), onChange: this.changeMonth.bind(this) }, h("option", { key: '544ba8a81e6342d075a48c4e25ebc1e3264d21be' }, "January"), h("option", { key: '3cb6bdd180bf2756accbd56b1872aabaecba1ab2' }, "February"), h("option", { key: 'a3b6bd6631685f0823665a1971277c02fafc2ad9' }, "March"), h("option", { key: '4e7b4ad9d9db953d5ae00ad7e5a1c28ee4e88b97' }, "April"), h("option", { key: '77fe00f2a6c187b2090fb5e122857439e4b49113' }, "May"), h("option", { key: 'cd14f79c5bd2b63225a94fe7dca27a5aa6b6b5c4' }, "June"), h("option", { key: '2b124bbfcb2b89c882a5a454e7de8559a75d31c7' }, "July"), h("option", { key: '19dc946c5fbba7fe682fc8d00d0e41f0cee64a2e' }, "August"), h("option", { key: 'f70ca9ec494374c8102fffab84026fce48dc6804' }, "September"), h("option", { key: '9405ce3cbdaa2407f4afc4f9ae62129b362fdf65' }, "October"), h("option", { key: '8093910ca9eda315b81ce8acf5c3432117627a4d' }, "November"), h("option", { key: '0bed724f2350233abef7261146c0cadb5843fc68' }, "December")), h("input", { key: '018133a06b42780a01de26d7fc5c2927a5a368c8', type: "number", class: "year-input", ref: el => (this.yearInput = el), onInput: this.changeYear.bind(this) }))), h("div", { key: '741272e398b7d7d6ed796d866633c571150cd3b9', class: "days" }, h("span", { key: '6b3e5f71f01b01221a0317826afece44d902690b' }, "Sun"), h("span", { key: 'e59173a979e82505421c1a358d3e23983696aa2b' }, "Mon"), h("span", { key: '73a559544233f32f2f4891d5dfd86d12071ff0f8' }, "Tue"), h("span", { key: 'a8cf112f852bd5fbf17c9d859652d8a6d11bfd36' }, "Wed"), h("span", { key: '01a8b50b6df48bc8c5fd08198eb4d7c0e26c89ad' }, "Thu"), h("span", { key: '839b958380872de9b9cb7b8260a31b5636e1feb6' }, "Fri"), h("span", { key: '0ce68f44ebd472346963da5b1e3d3811afa1c606' }, "Sat")), h("div", { key: 'bc01c3c734bd9ff0ab730a68b5130ab463078d4f', class: "dates", ref: el => (this.divDates = el) }))));
    }
    get element() { return this; }
    static get style() { return RfFirstStyle0; }
}, [1, "rf-first", {
        "isOpen": [32],
        "year": [32],
        "month": [32]
    }, [[16, "add_month", "listenMonth"], [16, "send_first_date", "getFirstDate"], [16, "updt_month", "updM"], [16, "updt_year", "updY"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["rf-first"];
    components.forEach(tagName => { switch (tagName) {
        case "rf-first":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, First);
            }
            break;
    } });
}
defineCustomElement();

export { First as F, defineCustomElement as d };

//# sourceMappingURL=p-5360d3a8.js.map