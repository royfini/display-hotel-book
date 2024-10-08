/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
export namespace Components {
    interface RfCarousel {
        "images": string[];
        "roomId": number;
    }
    interface RfDisplayHotel {
    }
    interface RfFacilities {
    }
    interface RfHotel {
    }
    interface RfModal {
        "roomId": number;
    }
    interface RfNavbar {
    }
    interface RfPhoto {
    }
    interface RfPopup {
    }
    interface RfProperty {
    }
    interface RfRooms {
    }
}
export interface RfCarouselCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLRfCarouselElement;
}
export interface RfModalCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLRfModalElement;
}
export interface RfNavbarCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLRfNavbarElement;
}
export interface RfPopupCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLRfPopupElement;
}
export interface RfRoomsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLRfRoomsElement;
}
declare global {
    interface HTMLRfCarouselElementEventMap {
        "rf_show": number;
    }
    interface HTMLRfCarouselElement extends Components.RfCarousel, HTMLStencilElement {
        addEventListener<K extends keyof HTMLRfCarouselElementEventMap>(type: K, listener: (this: HTMLRfCarouselElement, ev: RfCarouselCustomEvent<HTMLRfCarouselElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLRfCarouselElementEventMap>(type: K, listener: (this: HTMLRfCarouselElement, ev: RfCarouselCustomEvent<HTMLRfCarouselElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLRfCarouselElement: {
        prototype: HTMLRfCarouselElement;
        new (): HTMLRfCarouselElement;
    };
    interface HTMLRfDisplayHotelElement extends Components.RfDisplayHotel, HTMLStencilElement {
    }
    var HTMLRfDisplayHotelElement: {
        prototype: HTMLRfDisplayHotelElement;
        new (): HTMLRfDisplayHotelElement;
    };
    interface HTMLRfFacilitiesElement extends Components.RfFacilities, HTMLStencilElement {
    }
    var HTMLRfFacilitiesElement: {
        prototype: HTMLRfFacilitiesElement;
        new (): HTMLRfFacilitiesElement;
    };
    interface HTMLRfHotelElement extends Components.RfHotel, HTMLStencilElement {
    }
    var HTMLRfHotelElement: {
        prototype: HTMLRfHotelElement;
        new (): HTMLRfHotelElement;
    };
    interface HTMLRfModalElementEventMap {
        "rf_hide": boolean;
    }
    interface HTMLRfModalElement extends Components.RfModal, HTMLStencilElement {
        addEventListener<K extends keyof HTMLRfModalElementEventMap>(type: K, listener: (this: HTMLRfModalElement, ev: RfModalCustomEvent<HTMLRfModalElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLRfModalElementEventMap>(type: K, listener: (this: HTMLRfModalElement, ev: RfModalCustomEvent<HTMLRfModalElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLRfModalElement: {
        prototype: HTMLRfModalElement;
        new (): HTMLRfModalElement;
    };
    interface HTMLRfNavbarElementEventMap {
        "rf_show_popup": boolean;
    }
    interface HTMLRfNavbarElement extends Components.RfNavbar, HTMLStencilElement {
        addEventListener<K extends keyof HTMLRfNavbarElementEventMap>(type: K, listener: (this: HTMLRfNavbarElement, ev: RfNavbarCustomEvent<HTMLRfNavbarElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLRfNavbarElementEventMap>(type: K, listener: (this: HTMLRfNavbarElement, ev: RfNavbarCustomEvent<HTMLRfNavbarElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLRfNavbarElement: {
        prototype: HTMLRfNavbarElement;
        new (): HTMLRfNavbarElement;
    };
    interface HTMLRfPhotoElement extends Components.RfPhoto, HTMLStencilElement {
    }
    var HTMLRfPhotoElement: {
        prototype: HTMLRfPhotoElement;
        new (): HTMLRfPhotoElement;
    };
    interface HTMLRfPopupElementEventMap {
        "rf_hide_popup": boolean;
        "rf_send_data": { lang: string; cur: string };
    }
    interface HTMLRfPopupElement extends Components.RfPopup, HTMLStencilElement {
        addEventListener<K extends keyof HTMLRfPopupElementEventMap>(type: K, listener: (this: HTMLRfPopupElement, ev: RfPopupCustomEvent<HTMLRfPopupElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLRfPopupElementEventMap>(type: K, listener: (this: HTMLRfPopupElement, ev: RfPopupCustomEvent<HTMLRfPopupElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLRfPopupElement: {
        prototype: HTMLRfPopupElement;
        new (): HTMLRfPopupElement;
    };
    interface HTMLRfPropertyElement extends Components.RfProperty, HTMLStencilElement {
    }
    var HTMLRfPropertyElement: {
        prototype: HTMLRfPropertyElement;
        new (): HTMLRfPropertyElement;
    };
    interface HTMLRfRoomsElementEventMap {
        "rf_sendId": number;
    }
    interface HTMLRfRoomsElement extends Components.RfRooms, HTMLStencilElement {
        addEventListener<K extends keyof HTMLRfRoomsElementEventMap>(type: K, listener: (this: HTMLRfRoomsElement, ev: RfRoomsCustomEvent<HTMLRfRoomsElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLRfRoomsElementEventMap>(type: K, listener: (this: HTMLRfRoomsElement, ev: RfRoomsCustomEvent<HTMLRfRoomsElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLRfRoomsElement: {
        prototype: HTMLRfRoomsElement;
        new (): HTMLRfRoomsElement;
    };
    interface HTMLElementTagNameMap {
        "rf-carousel": HTMLRfCarouselElement;
        "rf-display-hotel": HTMLRfDisplayHotelElement;
        "rf-facilities": HTMLRfFacilitiesElement;
        "rf-hotel": HTMLRfHotelElement;
        "rf-modal": HTMLRfModalElement;
        "rf-navbar": HTMLRfNavbarElement;
        "rf-photo": HTMLRfPhotoElement;
        "rf-popup": HTMLRfPopupElement;
        "rf-property": HTMLRfPropertyElement;
        "rf-rooms": HTMLRfRoomsElement;
    }
}
declare namespace LocalJSX {
    interface RfCarousel {
        "images"?: string[];
        "onRf_show"?: (event: RfCarouselCustomEvent<number>) => void;
        "roomId"?: number;
    }
    interface RfDisplayHotel {
    }
    interface RfFacilities {
    }
    interface RfHotel {
    }
    interface RfModal {
        "onRf_hide"?: (event: RfModalCustomEvent<boolean>) => void;
        "roomId"?: number;
    }
    interface RfNavbar {
        "onRf_show_popup"?: (event: RfNavbarCustomEvent<boolean>) => void;
    }
    interface RfPhoto {
    }
    interface RfPopup {
        "onRf_hide_popup"?: (event: RfPopupCustomEvent<boolean>) => void;
        "onRf_send_data"?: (event: RfPopupCustomEvent<{ lang: string; cur: string }>) => void;
    }
    interface RfProperty {
    }
    interface RfRooms {
        "onRf_sendId"?: (event: RfRoomsCustomEvent<number>) => void;
    }
    interface IntrinsicElements {
        "rf-carousel": RfCarousel;
        "rf-display-hotel": RfDisplayHotel;
        "rf-facilities": RfFacilities;
        "rf-hotel": RfHotel;
        "rf-modal": RfModal;
        "rf-navbar": RfNavbar;
        "rf-photo": RfPhoto;
        "rf-popup": RfPopup;
        "rf-property": RfProperty;
        "rf-rooms": RfRooms;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "rf-carousel": LocalJSX.RfCarousel & JSXBase.HTMLAttributes<HTMLRfCarouselElement>;
            "rf-display-hotel": LocalJSX.RfDisplayHotel & JSXBase.HTMLAttributes<HTMLRfDisplayHotelElement>;
            "rf-facilities": LocalJSX.RfFacilities & JSXBase.HTMLAttributes<HTMLRfFacilitiesElement>;
            "rf-hotel": LocalJSX.RfHotel & JSXBase.HTMLAttributes<HTMLRfHotelElement>;
            "rf-modal": LocalJSX.RfModal & JSXBase.HTMLAttributes<HTMLRfModalElement>;
            "rf-navbar": LocalJSX.RfNavbar & JSXBase.HTMLAttributes<HTMLRfNavbarElement>;
            "rf-photo": LocalJSX.RfPhoto & JSXBase.HTMLAttributes<HTMLRfPhotoElement>;
            "rf-popup": LocalJSX.RfPopup & JSXBase.HTMLAttributes<HTMLRfPopupElement>;
            "rf-property": LocalJSX.RfProperty & JSXBase.HTMLAttributes<HTMLRfPropertyElement>;
            "rf-rooms": LocalJSX.RfRooms & JSXBase.HTMLAttributes<HTMLRfRoomsElement>;
        }
    }
}
