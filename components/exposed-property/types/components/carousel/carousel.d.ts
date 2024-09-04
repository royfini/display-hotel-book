import { EventEmitter } from '../../stencil-public-runtime';
export declare class Carousel {
    element: HTMLElement;
    componentDidLoad(): void;
    images: string[];
    currentIndex: number;
    goToPrevious: () => void;
    goToNext: () => void;
    rf_show: EventEmitter<number>;
    show(): void;
    roomId: number;
    render(): any;
}
