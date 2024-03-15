export interface ClusterClusterConfigDataprocMetricConfigMetric {
  /*
One or more [available OSS metrics] (https://cloud.google.com/dataproc/docs/guides/monitoring#available_oss_metrics) to collect for the metric course.

- - -
*/
  MetricOverrides?: Array<string>;

  // A source for the collection of Dataproc OSS metrics (see [available OSS metrics](https://cloud.google.com//dataproc/docs/guides/monitoring#available_oss_metrics)).
  MetricSource?: string;
}
