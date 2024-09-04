import type { Components, JSX } from "../types/components";

interface RfCarousel extends Components.RfCarousel, HTMLElement {}
export const RfCarousel: {
    prototype: RfCarousel;
    new (): RfCarousel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
