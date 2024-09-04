import { EventEmitter } from '../../stencil-public-runtime';
export declare class Second {
    element: HTMLElement;
    divDates: HTMLDivElement;
    nextBtn: HTMLButtonElement;
    prevBtn: HTMLButtonElement;
    monthInput: HTMLSelectElement;
    yearInput: HTMLInputElement;
    dateInput: HTMLInputElement;
    isOpen: boolean;
    open(): void;
    handleApplyBtn(): void;
    handleNextBtn(): void;
    changeMonth(): void;
    changeYear(): void;
    updateYearMonth(): void;
    handleClick(dates: HTMLDivElement, e: Event): void;
    hide_cal: EventEmitter<boolean>;
    send_first_date: EventEmitter<Date>;
    send_second_date: EventEmitter<Date>;
    updt_month: EventEmitter<{
        month: number;
        year: number;
    }>;
    updt_year: EventEmitter<{
        month: number;
        year: number;
    }>;
    selectedDate: Date;
    year: number;
    month: number;
    listenMonth(event: CustomEvent): void;
    add_month: EventEmitter<{
        month: number;
        year: number;
    }>;
    is_first_selected: boolean;
    getFirstDate(): void;
    close_cal: EventEmitter<Date>;
    updM(event: CustomEvent): void;
    updY(event: CustomEvent): void;
    displayDates: () => void;
    createButton: (text: string, isDisabled?: boolean, type?: number) => HTMLButtonElement;
    componentDidLoad(): void;
    render(): any;
}
