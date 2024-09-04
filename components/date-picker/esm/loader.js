import { b as bootstrapLazy } from './index-99ad1c46.js';
export { s as setNonce } from './index-99ad1c46.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["rf-date-range-picker_4",[[1,"rf-date-range-picker",{"show":[32],"firstDate":[32],"lastDate":[32],"guests":[32]},[[16,"hide_cal","hide"],[16,"send_first_date","getFirstDate"],[16,"send_second_date","getSecondDate"],[16,"close_cal","closeSecondDate"],[16,"send_guest","getGuest"]]],[1,"rf-first",{"isOpen":[32],"year":[32],"month":[32]},[[16,"add_month","listenMonth"],[16,"send_first_date","getFirstDate"],[16,"updt_month","updM"],[16,"updt_year","updY"]]],[1,"rf-guest",{"counter":[32]}],[1,"rf-second",{"isOpen":[32],"year":[32],"month":[32]},[[16,"sub_month","listenMonth"],[16,"send_first_date","getFirstDate"],[16,"upd_month","updM"],[16,"upd_year","updY"]]]]]], options);
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map