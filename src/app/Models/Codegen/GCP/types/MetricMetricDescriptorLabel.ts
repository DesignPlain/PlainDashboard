export interface MetricMetricDescriptorLabel {
  // A human-readable description for the label.
  Description?: string;

  // The label key.
  Key?: string;

  /*
The type of data that can be assigned to the label.
Default value is `STRING`.
Possible values are: `BOOL`, `INT64`, `STRING`.
*/
  ValueType?: string;
}
