'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-540e2a5f.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["rf-date-range-picker_4.cjs",[[1,"rf-date-range-picker",{"show":[32],"firstDate":[32],"lastDate":[32],"guests":[32]},[[16,"hide_cal","hide"],[16,"send_first_date","getFirstDate"],[16,"send_second_date","getSecondDate"],[16,"close_cal","closeSecondDate"],[16,"send_guest","getGuest"]]],[1,"rf-first",{"isOpen":[32],"year":[32],"month":[32]},[[16,"add_month","listenMonth"],[16,"send_first_date","getFirstDate"],[16,"updt_month","updM"],[16,"updt_year","updY"]]],[1,"rf-guest",{"counter":[32]}],[1,"rf-second",{"isOpen":[32],"year":[32],"month":[32]},[[16,"sub_month","listenMonth"],[16,"send_first_date","getFirstDate"],[16,"upd_month","updM"],[16,"upd_year","updY"]]]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map