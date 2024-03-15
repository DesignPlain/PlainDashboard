export interface SloWindowsBasedSliMetricMeanInRangeRange {
  /*
max value for the range (inclusive). If not given,
will be set to "infinity", defining an open range
">= range.min"
*/
  Max?: number;

  /*
Min value for the range (inclusive). If not given,
will be set to "-infinity", defining an open range
"< range.max"
*/
  Min?: number;
}
