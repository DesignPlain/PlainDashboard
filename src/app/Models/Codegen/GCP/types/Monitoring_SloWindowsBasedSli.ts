import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Monitoring_SloWindowsBasedSliMetricSumInRange,
  Monitoring_SloWindowsBasedSliMetricSumInRange_GetTypes,
} from "./Monitoring_SloWindowsBasedSliMetricSumInRange";
import {
  Monitoring_SloWindowsBasedSliGoodTotalRatioThreshold,
  Monitoring_SloWindowsBasedSliGoodTotalRatioThreshold_GetTypes,
} from "./Monitoring_SloWindowsBasedSliGoodTotalRatioThreshold";
import {
  Monitoring_SloWindowsBasedSliMetricMeanInRange,
  Monitoring_SloWindowsBasedSliMetricMeanInRange_GetTypes,
} from "./Monitoring_SloWindowsBasedSliMetricMeanInRange";

export interface Monitoring_SloWindowsBasedSli {
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
  MetricSumInRange?: Monitoring_SloWindowsBasedSliMetricSumInRange;

  /*
Duration over which window quality is evaluated, given as a
duration string "{X}s" representing X seconds. Must be an
integer fraction of a day and at least 60s.
*/
  WindowPeriod?: string;

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
  GoodTotalRatioThreshold?: Monitoring_SloWindowsBasedSliGoodTotalRatioThreshold;

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
  MetricMeanInRange?: Monitoring_SloWindowsBasedSliMetricMeanInRange;
}

export function Monitoring_SloWindowsBasedSli_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "WindowPeriod",
      'Duration over which window quality is evaluated, given as a\nduration string "{X}s" representing X seconds. Must be an\ninteger fraction of a day and at least 60s.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "GoodBadMetricFilter",
      "A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)\nwith ValueType = BOOL. The window is good if any true values\nappear in the window. One of `good_bad_metric_filter`,\n`good_total_ratio_threshold`, `metric_mean_in_range`,\n`metric_sum_in_range` must be set for `windows_based_sli`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "GoodTotalRatioThreshold",
      "Criterion that describes a window as good if its performance is\nhigh enough. One of `good_bad_metric_filter`,\n`good_total_ratio_threshold`, `metric_mean_in_range`,\n`metric_sum_in_range` must be set for `windows_based_sli`.\nStructure is documented below.",
      Monitoring_SloWindowsBasedSliGoodTotalRatioThreshold_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "MetricMeanInRange",
      "Criterion that describes a window as good if the metric's value\nis in a good range, *averaged* across returned streams.\nOne of `good_bad_metric_filter`,\n`good_total_ratio_threshold`, `metric_mean_in_range`,\n`metric_sum_in_range` must be set for `windows_based_sli`.\nAverage value X of `time_series` should satisfy\n`range.min <= X <= range.max` for a good window.\nStructure is documented below.",
      Monitoring_SloWindowsBasedSliMetricMeanInRange_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "MetricSumInRange",
      "Criterion that describes a window as good if the metric's value\nis in a good range, *summed* across returned streams.\nSummed value `X` of `time_series` should satisfy\n`range.min <= X <= range.max` for a good window.\nOne of `good_bad_metric_filter`,\n`good_total_ratio_threshold`, `metric_mean_in_range`,\n`metric_sum_in_range` must be set for `windows_based_sli`.\nStructure is documented below.",
      Monitoring_SloWindowsBasedSliMetricSumInRange_GetTypes(),
      false,
      false,
    ),
  ];
}
