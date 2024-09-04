import type { Components, JSX } from "../types/components";

interface RfFirst extends Components.RfFirst, HTMLElement {}
export const RfFirst: {
    prototype: RfFirst;
    new (): RfFirst;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
