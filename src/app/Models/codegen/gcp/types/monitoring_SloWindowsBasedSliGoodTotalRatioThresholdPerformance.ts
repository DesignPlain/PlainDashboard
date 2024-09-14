import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  monitoring_SloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut,
  monitoring_SloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut_GetTypes,
} from "./monitoring_SloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut";
import {
  monitoring_SloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio,
  monitoring_SloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio_GetTypes,
} from "./monitoring_SloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio";

export interface monitoring_SloWindowsBasedSliGoodTotalRatioThresholdPerformance {
  /*
Used when good_service is defined by a count of values aggregated in a
Distribution that fall into a good range. The total_service is the
total count of all values aggregated in the Distribution.
Defines a distribution TimeSeries filter and thresholds used for
measuring good service and total service.
Structure is documented below.
*/
  distributionCut?: monitoring_SloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut;

  /*
A means to compute a ratio of `good_service` to `total_service`.
Defines computing this ratio with two TimeSeries [monitoring filters](https://cloud.google.com/monitoring/api/v3/filters)
Must specify exactly two of good, bad, and total service filters.
The relationship good_service + bad_service = total_service
will be assumed.
Structure is documented below.
*/
  goodTotalRatio?: monitoring_SloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio;
}

export function monitoring_SloWindowsBasedSliGoodTotalRatioThresholdPerformance_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "distributionCut",
      "Used when good_service is defined by a count of values aggregated in a\nDistribution that fall into a good range. The total_service is the\ntotal count of all values aggregated in the Distribution.\nDefines a distribution TimeSeries filter and thresholds used for\nmeasuring good service and total service.\nStructure is documented below.",
      () =>
        monitoring_SloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "goodTotalRatio",
      "A means to compute a ratio of `good_service` to `total_service`.\nDefines computing this ratio with two TimeSeries [monitoring filters](https://cloud.google.com/monitoring/api/v3/filters)\nMust specify exactly two of good, bad, and total service filters.\nThe relationship good_service + bad_service = total_service\nwill be assumed.\nStructure is documented below.",
      () =>
        monitoring_SloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio_GetTypes(),
      false,
      false,
    ),
  ];
}
