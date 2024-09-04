import { p as proxyCustomElement, H, c as createEvent, h } from './p-f27a3bd0.js';

const secondCss = ".date-input{padding:10px;font-size:1rem;border-radius:5px;border:1px solid #eee}.datepicker-container{position:relative}.datepicker{position:absolute;top:100%;z-index:100;margin-top:2px;background:#fff;padding:10px;border-radius:5px}.datepicker button{cursor:pointer;border:none;border-radius:3px;background:transparent;font-size:14px;font-weight:500;text-transform:uppercase;transition:0.3s}.days,.dates{display:grid;grid-template-columns:repeat(7, 32px);gap:10px;margin-block:10px}.days span{font-size:14px;font-weight:600;text-transform:uppercase;text-align:center}.dates button{color:slategray;aspect-ratio:1}.dates button:disabled{opacity:0.5;pointer-events:none;user-select:none}.dates button:hover{background:rgba(119, 136, 153, 0.1)}.dates button.today{background:rgb(197, 191, 191);color:gray}.dates button.selected{background:gray;color:#fff}.datepicker-header{display:flex;align-items:center;justify-content:space-between;padding-bottom:10px;border-bottom:1px solid #eee}.datepicker-header select,.datepicker-header input{font-size:14px;border:1px solid #eee}.datepicker-header input{max-width:64px}.datepicker-header button{color:slategray}.datepicker-header button:hover{color:black}.datepicker-footer{display:flex;justify-content:flex-end;gap:10px;padding-top:10px;border-top:1px solid #eee}.datepicker-footer button{background:rgba(119, 136, 153, 0.1);padding:3px 10px}.datepicker-footer button.apply{background:gray;color:#fff}";
const RfSecondStyle0 = secondCss;

const Second = /*@__PURE__*/ proxyCustomElement(class Second extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.hide_cal = createEvent(this, "hide_cal", 7);
        this.send_first_date = createEvent(this, "send_first_date", 7);
        this.send_second_date = createEvent(this, "send_second_date", 7);
        this.updt_month = createEvent(this, "updt_month", 7);
        this.updt_year = createEvent(this, "updt_year", 7);
        this.add_month = createEvent(this, "add_month", 7);
        this.close_cal = createEvent(this, "close_cal", 7);
        this.selectedDate = new Date();
        this.is_first_selected = false;
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
        this.month = this.selectedDate.getMonth() + 1;
    }
    open() {
        this.isOpen = !this.isOpen;
    }
    // handle apply button click
    handleApplyBtn() {
        this.dateInput.value = this.selectedDate.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
    }
    //handle next month nav
    handleNextBtn() {
        this.add_month.emit({ month: this.month, year: this.year });
        if (this.month === 11) {
            this.year++;
        }
        this.month = (this.month + 1) % 12;
        this.displayDates();
    }
    //  handle month input change change
    changeMonth() {
        this.month = this.monthInput.selectedIndex;
        this.displayDates();
        this.updt_month.emit({ month: this.month, year: this.year });
    }
    // handle year input change event
    changeYear() {
        this.year = Number(this.yearInput.value);
        this.displayDates();
        this.updt_year.emit({ month: this.month, year: this.year });
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
        if (this.is_first_selected) {
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
        this.is_first_selected = true;
    }
    updM(event) {
        this.month = event.detail.month;
        this.year = event.detail.year;
        if (this.month === 11) {
            this.year++;
        }
        this.month = (this.month + 1) % 12;
        this.displayDates();
    }
    updY(event) {
        this.year = event.detail.year;
        if (this.month === 0) {
            this.year++;
        }
        this.displayDates();
    }
    componentDidLoad() {
        this.displayDates();
    }
    render() {
        return (h("div", { key: '12c268813807ba7fd2d3341af7d9d621bdb2a422', class: "datepicker-container" }, h("div", { key: '01ba7cd0990e6b062acb3ce827da3644d425f7f9', class: "datepicker" }, h("div", { key: 'c3d4a5bf584ae712b91917c8784f022b501fdb58', class: "datepicker-header" }, h("div", { key: '1bc713b832536bdd53dea6dcc4b01eddf965328e' }, h("select", { key: 'f62f0b6249a0e9ad362463819d25c74bc4940af7', class: "month-input", ref: el => (this.monthInput = el), onChange: this.changeMonth.bind(this) }, h("option", { key: '50e00c51e7c8e8c4736ad92c82a75b2b42082586' }, "January"), h("option", { key: '0c6f965b42985e8a12f60918ab68473b89033007' }, "February"), h("option", { key: 'ee97422a581dfc99396d42d1072ce997c2c44087' }, "March"), h("option", { key: '2f36838f67ec2b9357203922af422a40a1011e48' }, "April"), h("option", { key: 'ca28fae8f0de3824541b4388cec8a62381bd0bc8' }, "May"), h("option", { key: 'c62bae9e5cf03a6f2b34acd453bcdbb1a7bca499' }, "June"), h("option", { key: '9a546caf5688076f4da0bea8f2cf2f022c1a6616' }, "July"), h("option", { key: 'ca2a8bcfecda250700d3d9532cfa9e90b29c26c5' }, "August"), h("option", { key: 'c57004f3e1f430a0e0fecf7efe29082b5a386cc7' }, "September"), h("option", { key: '3920c36f339845bf1cb3b0b601f3ab5b9e3f5878' }, "October"), h("option", { key: '495ced0f876088f288a85efca9a160b1249f1a34' }, "November"), h("option", { key: '458dd651d4a0dcc03b09c6e6612f52cdc7c904cf' }, "December")), h("input", { key: '4b5eb75bf32f15e9375c7c3b53e5137ea5389db8', type: "number", class: "year-input", ref: el => (this.yearInput = el), onInput: this.changeYear.bind(this) })), h("button", { key: '95764c38d0b670a034d05b455310f4d1375f7ce1', class: "next", ref: el => (this.nextBtn = el), onClick: this.handleNextBtn.bind(this) }, "Next")), h("div", { key: '0c537d8bc7de6a6dcfc7acbd3d8d05fda381ff9e', class: "days" }, h("span", { key: '3bc194d67bb290cc5f611c812195f208ede75c06' }, "Sun"), h("span", { key: 'add87c257e0de228ec8bf3f103474141e6fdafbd' }, "Mon"), h("span", { key: 'd28334da3c30a8f62e5e2bf47a96b681f59bba5e' }, "Tue"), h("span", { key: 'c4e0e839f8828d94dd96e375ba5166d12d16b5f9' }, "Wed"), h("span", { key: 'bb8fe654063fd3096f13957facff4de7a1962058' }, "Thu"), h("span", { key: 'f5d59bf2c20ecea0d90ab2436802c07937b18945' }, "Fri"), h("span", { key: '3cbbb484b94831006ceac1b8fecfadb31387ec66' }, "Sat")), h("div", { key: '69b6d504b555c199eac2c732c75cf4c8cfd87678', class: "dates", ref: el => (this.divDates = el) }))));
    }
    get element() { return this; }
    static get style() { return RfSecondStyle0; }
}, [1, "rf-second", {
        "isOpen": [32],
        "year": [32],
        "month": [32]
    }, [[16, "sub_month", "listenMonth"], [16, "send_first_date", "getFirstDate"], [16, "upd_month", "updM"], [16, "upd_year", "updY"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["rf-second"];
    components.forEach(tagName => { switch (tagName) {
        case "rf-second":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Second);
            }
            break;
    } });
}
defineCustomElement();

export { Second as S, defineCustomElement as d };

//# sourceMappingURL=p-75005b73.js.map