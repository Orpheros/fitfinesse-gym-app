import { Time } from "../components/interface/time.interface";

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

export const capitalizeWords = (str: string) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

export const formatTime = (time: Time): string => {
  const pad = (num: number) => num.toString().padStart(2, "0");
  const hours = pad(time.hours);
  const minutes = pad(time.minutes);
  const seconds = pad(time.seconds);
  return `${hours}:${minutes}:${seconds}`;
};

export const compareDates = (date1: Date, date2: Date) => {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};
