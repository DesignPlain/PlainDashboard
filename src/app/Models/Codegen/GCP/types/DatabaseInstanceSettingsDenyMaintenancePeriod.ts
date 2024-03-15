export interface DatabaseInstanceSettingsDenyMaintenancePeriod {
  // "deny maintenance period" start date. If the year of the start date is empty, the year of the end date also must be empty. In this case, it means the deny maintenance period recurs every year. The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01
  StartDate?: string;

  // Time in UTC when the "deny maintenance period" starts on startDate and ends on endDate. The time is in format: HH:mm:SS, i.e., 00:00:00
  Time?: string;

  // "deny maintenance period" end date. If the year of the end date is empty, the year of the start date also must be empty. In this case, it means the no maintenance interval recurs every year. The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01
  EndDate?: string;
}
