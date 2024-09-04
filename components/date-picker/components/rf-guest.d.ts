import type { Components, JSX } from "../types/components";

interface RfGuest extends Components.RfGuest, HTMLElement {}
export const RfGuest: {
    prototype: RfGuest;
    new (): RfGuest;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
