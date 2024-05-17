import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Monitoring_SloRequestBasedSliDistributionCutRange,
  Monitoring_SloRequestBasedSliDistributionCutRange_GetTypes,
} from "./Monitoring_SloRequestBasedSliDistributionCutRange";

export interface Monitoring_SloRequestBasedSliDistributionCut {
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
  Range?: Monitoring_SloRequestBasedSliDistributionCutRange;
}

export function Monitoring_SloRequestBasedSliDistributionCut_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "DistributionFilter",
      "A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)\naggregating values to quantify the good service provided.\nMust have ValueType = DISTRIBUTION and\nMetricKind = DELTA or MetricKind = CUMULATIVE.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Range",
      "Range of numerical values. The computed good_service\nwill be the count of values x in the Distribution such\nthat range.min <= x <= range.max. inclusive of min and\nmax. Open ranges can be defined by setting\njust one of min or max.\nStructure is documented below.",
      Monitoring_SloRequestBasedSliDistributionCutRange_GetTypes(),
      true,
      false,
    ),
  ];
}
