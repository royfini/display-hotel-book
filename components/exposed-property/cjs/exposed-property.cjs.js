'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cec488c7.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

/*
 Stencil Client Patch Browser v4.21.0 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('exposed-property.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["rf-hotel.cjs",[[1,"rf-hotel"]]],["rf-property.cjs",[[1,"rf-property"]]],["rf-carousel_8.cjs",[[1,"rf-display-hotel",{"modal":[32],"myId":[32],"popup":[32]},[[16,"rf_hide","hide"],[16,"rf_show","show"],[16,"rf_sendId","getId"],[16,"rf_show_popup","showPopup"],[16,"rf_hide_popup","hidePopup"]]],[1,"rf-modal",{"roomId":[2,"room-id"]}],[1,"rf-rooms"],[1,"rf-facilities"],[1,"rf-navbar",{"language":[32],"currency":[32]},[[16,"rf_send_data","getData"]]],[1,"rf-photo"],[1,"rf-popup",{"language":[32],"currency":[32],"index":[32]}],[1,"rf-carousel",{"images":[16],"roomId":[2,"room-id"],"currentIndex":[32]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=exposed-property.cjs.js.map