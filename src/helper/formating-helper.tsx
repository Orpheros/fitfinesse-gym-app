export const format = {
  formatNumber: (val: any) => {
    return new Intl.NumberFormat("en-ID", {}).format(val);
  },

  unformat: (val: any) => {
    return val.replace(/[^\d]/g, "");
  },
};
