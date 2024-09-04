import { EventEmitter } from '../../stencil-public-runtime';
export declare class DateRangerPicker {
    show: boolean;
    open(): void;
    hide(event: CustomEvent): void;
    firstDate: Date;
    lastDate: Date;
    getFirstDate(event: CustomEvent): void;
    getSecondDate(event: CustomEvent): void;
    closeSecondDate(event: CustomEvent): void;
    getGuest(event: CustomEvent): void;
    guests: number;
    handleClick(): void;
    book: EventEmitter<{
        firstDate: string;
        lastDate: string;
        guests: number;
    }>;
    render(): any;
}
