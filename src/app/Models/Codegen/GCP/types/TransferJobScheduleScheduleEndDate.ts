export interface TransferJobScheduleScheduleEndDate {
  /*
Day of month. Must be from 1 to 31 and valid for the year and month.

<a name="nested_start_time_of_day"></a>The `start_time_of_day` blocks support:
*/
  Day?: number;

  // Month of year. Must be from 1 to 12.
  Month?: number;

  // Year of date. Must be from 1 to 9999.
  Year?: number;
}
