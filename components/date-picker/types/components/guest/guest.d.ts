import { EventEmitter } from '../../stencil-public-runtime';
export declare class Guest {
    counter: number;
    increment(): void;
    decrement(): void;
    send_guest: EventEmitter<number>;
    render(): any;
}
