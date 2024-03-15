import { SloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio } from "./SloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio";
import { SloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut } from "./SloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut";

export interface SloWindowsBasedSliGoodTotalRatioThresholdPerformance {
  /*
A means to compute a ratio of `good_service` to `total_service`.
Defines computing this ratio with two TimeSeries [monitoring filters](https://cloud.google.com/monitoring/api/v3/filters)
Must specify exactly two of good, bad, and total service filters.
The relationship good_service + bad_service = total_service
will be assumed.
Structure is documented below.
*/
  GoodTotalRatio?: SloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio;

  /*
Used when good_service is defined by a count of values aggregated in a
Distribution that fall into a good range. The total_service is the
total count of all values aggregated in the Distribution.
Defines a distribution TimeSeries filter and thresholds used for
measuring good service and total service.
Structure is documented below.
*/
  DistributionCut?: SloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut;
}
