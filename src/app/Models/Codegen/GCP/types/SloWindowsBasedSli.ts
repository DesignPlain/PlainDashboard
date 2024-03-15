import { SloWindowsBasedSliMetricMeanInRange } from "./SloWindowsBasedSliMetricMeanInRange";
import { SloWindowsBasedSliMetricSumInRange } from "./SloWindowsBasedSliMetricSumInRange";
import { SloWindowsBasedSliGoodTotalRatioThreshold } from "./SloWindowsBasedSliGoodTotalRatioThreshold";

export interface SloWindowsBasedSli {
  /*
A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
with ValueType = BOOL. The window is good if any true values
appear in the window. One of `good_bad_metric_filter`,
`good_total_ratio_threshold`, `metric_mean_in_range`,
`metric_sum_in_range` must be set for `windows_based_sli`.
*/
  GoodBadMetricFilter?: string;

  /*
Criterion that describes a window as good if its performance is
high enough. One of `good_bad_metric_filter`,
`good_total_ratio_threshold`, `metric_mean_in_range`,
`metric_sum_in_range` must be set for `windows_based_sli`.
Structure is documented below.
*/
  GoodTotalRatioThreshold?: SloWindowsBasedSliGoodTotalRatioThreshold;

  /*
Criterion that describes a window as good if the metric's value
is in a good range, -averaged- across returned streams.
One of `good_bad_metric_filter`,
`good_total_ratio_threshold`, `metric_mean_in_range`,
`metric_sum_in_range` must be set for `windows_based_sli`.
Average value X of `time_series` should satisfy
`range.min <= X <= range.max` for a good window.
Structure is documented below.
*/
  MetricMeanInRange?: SloWindowsBasedSliMetricMeanInRange;

  /*
Criterion that describes a window as good if the metric's value
is in a good range, -summed- across returned streams.
Summed value `X` of `time_series` should satisfy
`range.min <= X <= range.max` for a good window.
One of `good_bad_metric_filter`,
`good_total_ratio_threshold`, `metric_mean_in_range`,
`metric_sum_in_range` must be set for `windows_based_sli`.
Structure is documented below.
*/
  MetricSumInRange?: SloWindowsBasedSliMetricSumInRange;

  /*
Duration over which window quality is evaluated, given as a
duration string "{X}s" representing X seconds. Must be an
integer fraction of a day and at least 60s.
*/
  WindowPeriod?: string;
}
