import type { Components, JSX } from "../types/components";

interface RfFacilities extends Components.RfFacilities, HTMLElement {}
export const RfFacilities: {
    prototype: RfFacilities;
    new (): RfFacilities;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
