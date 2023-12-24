import dayjs from "dayjs";
import "dayjs/locale/ko";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.locale("ko");

export const getDate = (date: string) => {
  return dayjs.utc(date).format("YYYY-MM-DD");
};
