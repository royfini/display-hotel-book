import { EventEmitter } from '../../stencil-public-runtime';
export declare class First {
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
    handlePrevBtn(): void;
    changeMonth(): void;
    changeYear(): void;
    updateYearMonth(): void;
    handleClick(dates: HTMLDivElement, e: Event): void;
    selectedDate: Date;
    year: number;
    month: number;
    hide_cal: EventEmitter<boolean>;
    send_first_date: EventEmitter<Date>;
    send_second_date: EventEmitter<Date>;
    sub_month: EventEmitter<{
        month: number;
        year: number;
    }>;
    upd_month: EventEmitter<{
        month: number;
        year: number;
    }>;
    upd_year: EventEmitter<{
        month: number;
        year: number;
    }>;
    listenMonth(event: CustomEvent): void;
    is_second_selected: boolean;
    getFirstDate(): void;
    updM(event: CustomEvent): void;
    close_cal: EventEmitter<Date>;
    updY(event: CustomEvent): void;
    displayDates: () => void;
    createButton: (text: string, isDisabled?: boolean, type?: number) => HTMLButtonElement;
    componentDidLoad(): void;
    render(): any;
}
