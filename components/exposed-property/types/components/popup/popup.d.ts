import { EventEmitter } from '../../stencil-public-runtime';
export declare class Popup {
    element: HTMLElement;
    componentDidLoad(): void;
    languages: {
        code: string;
        culture: string;
        description: string;
        direction: string;
        entries: any;
        flag: string;
        id: number;
    }[];
    currencies: {
        code: string;
        id: number;
        symbol: string;
    }[];
    rf_hide_popup: EventEmitter<boolean>;
    hide(): void;
    language: string;
    currency: string;
    index: number;
    getLang(lang: any, i: any): void;
    getCur(event: Event): void;
    rf_send_data: EventEmitter<{
        lang: string;
        cur: string;
    }>;
    send(): void;
    render(): any;
}
