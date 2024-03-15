import { SloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange } from "./SloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange";

export interface SloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut {
  /*
A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
aggregating values to quantify the good service provided.
Must have ValueType = DISTRIBUTION and
MetricKind = DELTA or MetricKind = CUMULATIVE.
*/
  DistributionFilter?: string;

  /*
Range of numerical values. The computed good_service
will be the count of values x in the Distribution such
that range.min <= x <= range.max. inclusive of min and
max. Open ranges can be defined by setting
just one of min or max.
Structure is documented below.
*/
  Range?: SloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange;
}
