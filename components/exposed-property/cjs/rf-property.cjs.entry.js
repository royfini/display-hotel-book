'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cec488c7.js');

const Property = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    async sendData() {
        const url = 'https://gateway.igloorooms.com/IR/Get_Exposed_Property?Ticket=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MjYwNTgwNzcsIkNMQUlNLTAxIjoicktLMi9DY1dQQnM9IiwiQ0xBSU0tMDIiOiI5UStMQm93VTl6az0iLCJDTEFJTS0wMyI6Ilp3Tys5azJoTzUwPSIsIkNMQUlNLTA0IjoiQUVxVnRCMm1kWTg9IiwiQ0xBSU0tMDUiOiJFQTEzejA3ejBUcWRkM2gwNElyYThBcklIUzg2aEpCQSIsIkNMQUlNLTA2IjoiQUVxVnRCMm1kWTg9In0.o-Yoq1n4n8W8qQT1I6XitpDuV65AWHiYJiXjrxoD3B0'; // Replace with your API endpoint
        const data = {
            id: '42',
            language: 'EN',
            currency: 'USD',
            aname: '',
            include_sales_rate_plans: true,
        };
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const result = await response.json();
                console.log(result);
            }
            else {
                console.log('error');
            }
        }
        catch (error) {
            console.log('error');
        }
    }
    componentWillLoad() {
        this.sendData();
    }
    render() {
        return index.h("div", { key: 'afe034e7b102d5eac1fc2804e7ce8c22d8de21f7' }, "hello");
    }
};

exports.rf_property = Property;

//# sourceMappingURL=rf-property.cjs.entry.js.map