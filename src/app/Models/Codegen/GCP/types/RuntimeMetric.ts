export interface RuntimeMetric {
  /*
(Output)
Contains runtime daemon metrics, such as OS and kernels and
sessions stats.
*/
  SystemMetrics?: Map<string, string>;
}
