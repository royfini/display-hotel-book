import type { Components, JSX } from "../types/components";

interface RfDisplayHotel extends Components.RfDisplayHotel, HTMLElement {}
export const RfDisplayHotel: {
    prototype: RfDisplayHotel;
    new (): RfDisplayHotel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
