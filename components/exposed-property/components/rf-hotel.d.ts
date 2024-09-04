import type { Components, JSX } from "../types/components";

interface RfHotel extends Components.RfHotel, HTMLElement {}
export const RfHotel: {
    prototype: RfHotel;
    new (): RfHotel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
