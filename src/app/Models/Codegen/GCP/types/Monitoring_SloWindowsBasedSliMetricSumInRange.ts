import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Monitoring_SloWindowsBasedSliMetricSumInRangeRange,
  Monitoring_SloWindowsBasedSliMetricSumInRangeRange_GetTypes,
} from "./Monitoring_SloWindowsBasedSliMetricSumInRangeRange";

export interface Monitoring_SloWindowsBasedSliMetricSumInRange {
  /*
Range of numerical values. The computed good_service
will be the count of values x in the Distribution such
that range.min <= x <= range.max. inclusive of min and
max. Open ranges can be defined by setting
just one of min or max. Summed value `X` should satisfy
`range.min <= X <= range.max` for a good window.
Structure is documented below.
*/
  Range?: Monitoring_SloWindowsBasedSliMetricSumInRangeRange;

  /*
A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
specifying the TimeSeries to use for evaluating window
quality. The provided TimeSeries must have
ValueType = INT64 or ValueType = DOUBLE and
MetricKind = GAUGE.
Summed value `X` should satisfy
`range.min <= X <= range.max` for a good window.
*/
  TimeSeries?: string;
}

export function Monitoring_SloWindowsBasedSliMetricSumInRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Range",
      "Range of numerical values. The computed good_service\nwill be the count of values x in the Distribution such\nthat range.min <= x <= range.max. inclusive of min and\nmax. Open ranges can be defined by setting\njust one of min or max. Summed value `X` should satisfy\n`range.min <= X <= range.max` for a good window.\nStructure is documented below.",
      Monitoring_SloWindowsBasedSliMetricSumInRangeRange_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "TimeSeries",
      "A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)\nspecifying the TimeSeries to use for evaluating window\nquality. The provided TimeSeries must have\nValueType = INT64 or ValueType = DOUBLE and\nMetricKind = GAUGE.\nSummed value `X` should satisfy\n`range.min <= X <= range.max` for a good window.",
      [],
      true,
      false,
    ),
  ];
}
