import moment from 'moment';

export function formatDate(date) {
  return (moment.isDate(date) ? moment(date) : date).format('YYYY-MM-DD HH:mm:ss.SSS');
}
