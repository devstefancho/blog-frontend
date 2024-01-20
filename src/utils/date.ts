import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale('ko');

/**
 * @param date YYYY-MM-DD
 * @param noTimeZone 이미 한국시간인 경우에는 true
 * @returns
 */
export const getDate = (date: string, noTimeZone?: boolean) => {
  if (noTimeZone) {
    return dayjs(date).format('YYYY-MM-DD');
  }
  return dayjs(date).tz('Asia/Seoul').format('YYYY-MM-DD');
};

export const getDateTime = () => {
  return dayjs.utc().tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss');
};
