import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  monitoring_SloRequestBasedSliDistributionCut,
  monitoring_SloRequestBasedSliDistributionCut_GetTypes,
} from "./monitoring_SloRequestBasedSliDistributionCut";
import {
  monitoring_SloRequestBasedSliGoodTotalRatio,
  monitoring_SloRequestBasedSliGoodTotalRatio_GetTypes,
} from "./monitoring_SloRequestBasedSliGoodTotalRatio";

export interface monitoring_SloRequestBasedSli {
  /*
Used when good_service is defined by a count of values aggregated in a
Distribution that fall into a good range. The total_service is the
total count of all values aggregated in the Distribution.
Defines a distribution TimeSeries filter and thresholds used for
measuring good service and total service.
Exactly one of `distribution_cut` or `good_total_ratio` can be set.
Structure is documented below.
*/
  distributionCut?: monitoring_SloRequestBasedSliDistributionCut;

  /*
A means to compute a ratio of `good_service` to `total_service`.
Defines computing this ratio with two TimeSeries [monitoring filters](https://cloud.google.com/monitoring/api/v3/filters)
Must specify exactly two of good, bad, and total service filters.
The relationship good_service + bad_service = total_service
will be assumed.
Exactly one of `distribution_cut` or `good_total_ratio` can be set.
Structure is documented below.
*/
  goodTotalRatio?: monitoring_SloRequestBasedSliGoodTotalRatio;
}

export function monitoring_SloRequestBasedSli_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "distributionCut",
      "Used when good_service is defined by a count of values aggregated in a\nDistribution that fall into a good range. The total_service is the\ntotal count of all values aggregated in the Distribution.\nDefines a distribution TimeSeries filter and thresholds used for\nmeasuring good service and total service.\nExactly one of `distribution_cut` or `good_total_ratio` can be set.\nStructure is documented below.",
      monitoring_SloRequestBasedSliDistributionCut_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "goodTotalRatio",
      "A means to compute a ratio of `good_service` to `total_service`.\nDefines computing this ratio with two TimeSeries [monitoring filters](https://cloud.google.com/monitoring/api/v3/filters)\nMust specify exactly two of good, bad, and total service filters.\nThe relationship good_service + bad_service = total_service\nwill be assumed.\nExactly one of `distribution_cut` or `good_total_ratio` can be set.\nStructure is documented below.",
      monitoring_SloRequestBasedSliGoodTotalRatio_GetTypes(),
      false,
      false,
    ),
  ];
}
