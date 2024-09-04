import type { Components, JSX } from "../types/components";

interface RfPopup extends Components.RfPopup, HTMLElement {}
export const RfPopup: {
    prototype: RfPopup;
    new (): RfPopup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
