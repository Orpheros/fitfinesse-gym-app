export const format = {
  formatNumber: (val: any) => {
    return new Intl.NumberFormat("en-ID", {}).format(val);
  },

  unformat: (val: any) => {
    return val.replace(/[^\d]/g, "");
  },

  date: (val: any) => {
    const createDateObject = new Date(val.seconds * 1000);
    const formattedDate = createDateObject.toLocaleDateString("en-GB");
    return formattedDate;
  },
};
