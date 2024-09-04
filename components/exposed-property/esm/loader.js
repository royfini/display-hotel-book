import { b as bootstrapLazy } from './index-516e205b.js';
export { s as setNonce } from './index-516e205b.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["rf-hotel",[[1,"rf-hotel"]]],["rf-property",[[1,"rf-property"]]],["rf-carousel_8",[[1,"rf-display-hotel",{"modal":[32],"myId":[32],"popup":[32]},[[16,"rf_hide","hide"],[16,"rf_show","show"],[16,"rf_sendId","getId"],[16,"rf_show_popup","showPopup"],[16,"rf_hide_popup","hidePopup"]]],[1,"rf-modal",{"roomId":[2,"room-id"]}],[1,"rf-rooms"],[1,"rf-facilities"],[1,"rf-navbar",{"language":[32],"currency":[32]},[[16,"rf_send_data","getData"]]],[1,"rf-photo"],[1,"rf-popup",{"language":[32],"currency":[32],"index":[32]}],[1,"rf-carousel",{"images":[16],"roomId":[2,"room-id"],"currentIndex":[32]}]]]], options);
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map