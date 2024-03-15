export interface ZoneDiscoverySpecCsvOptions {
  // Optional. The delimiter being used to separate values. This defaults to ','.
  Delimiter?: string;

  // Optional. Whether to disable the inference of data type for CSV data. If true, all columns will be registered as strings.
  DisableTypeInference?: boolean;

  // Optional. The character encoding of the data. The default is UTF-8.
  Encoding?: string;

  // Optional. The number of rows to interpret as header rows that should be skipped when reading data rows.
  HeaderRows?: number;
}
