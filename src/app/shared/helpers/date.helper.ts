import * as moment from 'moment';

export class DateHelper {
    static format(date: Date | string, format: string = 'YYYY-MM-DD'): string {
      return moment(date).format(format);
    }
}
