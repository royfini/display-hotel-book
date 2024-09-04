import type { Components, JSX } from "../types/components";

interface RfSecond extends Components.RfSecond, HTMLElement {}
export const RfSecond: {
    prototype: RfSecond;
    new (): RfSecond;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
