import type { Components, JSX } from "../types/components";

interface RfPhoto extends Components.RfPhoto, HTMLElement {}
export const RfPhoto: {
    prototype: RfPhoto;
    new (): RfPhoto;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
