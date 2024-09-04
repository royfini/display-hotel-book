import type { Components, JSX } from "../types/components";

interface RfProperty extends Components.RfProperty, HTMLElement {}
export const RfProperty: {
    prototype: RfProperty;
    new (): RfProperty;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
