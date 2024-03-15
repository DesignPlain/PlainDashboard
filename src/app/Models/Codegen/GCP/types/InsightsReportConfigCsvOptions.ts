export interface InsightsReportConfigCsvOptions {
  /*
The boolean that indicates whether or not headers are included in the inventory report CSV file.

- - -
*/
  HeaderRequired?: boolean;

  // The character used to separate the records in the inventory report CSV file.
  RecordSeparator?: string;

  // The delimiter used to separate the fields in the inventory report CSV file.
  Delimiter?: string;
}
