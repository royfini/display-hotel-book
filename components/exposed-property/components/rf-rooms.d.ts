import type { Components, JSX } from "../types/components";

interface RfRooms extends Components.RfRooms, HTMLElement {}
export const RfRooms: {
    prototype: RfRooms;
    new (): RfRooms;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
