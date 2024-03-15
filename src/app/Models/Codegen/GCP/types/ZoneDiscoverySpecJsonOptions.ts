export interface ZoneDiscoverySpecJsonOptions {
  // Optional. Whether to disable the inference of data type for Json data. If true, all columns will be registered as their primitive types (strings, number or boolean).
  DisableTypeInference?: boolean;

  // Optional. The character encoding of the data. The default is UTF-8.
  Encoding?: string;
}
