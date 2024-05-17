import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Monitoring_SloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut,
  Monitoring_SloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut_GetTypes,
} from "./Monitoring_SloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut";
import {
  Monitoring_SloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio,
  Monitoring_SloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio_GetTypes,
} from "./Monitoring_SloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio";

export interface Monitoring_SloWindowsBasedSliGoodTotalRatioThresholdPerformance {
  /*
Used when good_service is defined by a count of values aggregated in a
Distribution that fall into a good range. The total_service is the
total count of all values aggregated in the Distribution.
Defines a distribution TimeSeries filter and thresholds used for
measuring good service and total service.
Structure is documented below.
*/
  DistributionCut?: Monitoring_SloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut;

  /*
A means to compute a ratio of `good_service` to `total_service`.
Defines computing this ratio with two TimeSeries [monitoring filters](https://cloud.google.com/monitoring/api/v3/filters)
Must specify exactly two of good, bad, and total service filters.
The relationship good_service + bad_service = total_service
will be assumed.
Structure is documented below.
*/
  GoodTotalRatio?: Monitoring_SloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio;
}

export function Monitoring_SloWindowsBasedSliGoodTotalRatioThresholdPerformance_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "DistributionCut",
      "Used when good_service is defined by a count of values aggregated in a\nDistribution that fall into a good range. The total_service is the\ntotal count of all values aggregated in the Distribution.\nDefines a distribution TimeSeries filter and thresholds used for\nmeasuring good service and total service.\nStructure is documented below.",
      Monitoring_SloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "GoodTotalRatio",
      "A means to compute a ratio of `good_service` to `total_service`.\nDefines computing this ratio with two TimeSeries [monitoring filters](https://cloud.google.com/monitoring/api/v3/filters)\nMust specify exactly two of good, bad, and total service filters.\nThe relationship good_service + bad_service = total_service\nwill be assumed.\nStructure is documented below.",
      Monitoring_SloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio_GetTypes(),
      false,
      false,
    ),
  ];
}
