import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  monitoring_SloWindowsBasedSliMetricMeanInRangeRange,
  monitoring_SloWindowsBasedSliMetricMeanInRangeRange_GetTypes,
} from "./monitoring_SloWindowsBasedSliMetricMeanInRangeRange";

export interface monitoring_SloWindowsBasedSliMetricMeanInRange {
  /*
Range of numerical values. The computed good_service
will be the count of values x in the Distribution such
that range.min <= x <= range.max. inclusive of min and
max. Open ranges can be defined by setting
just one of min or max. Mean value `X` of `time_series`
values should satisfy `range.min <= X <= range.max` for a
good service.
Structure is documented below.
*/
  range?: monitoring_SloWindowsBasedSliMetricMeanInRangeRange;

  /*
A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
specifying the TimeSeries to use for evaluating window
The provided TimeSeries must have ValueType = INT64 or
ValueType = DOUBLE and MetricKind = GAUGE. Mean value `X`
should satisfy `range.min <= X <= range.max`
under good service.
*/
  timeSeries?: string;
}

export function monitoring_SloWindowsBasedSliMetricMeanInRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "range",
      "Range of numerical values. The computed good_service\nwill be the count of values x in the Distribution such\nthat range.min <= x <= range.max. inclusive of min and\nmax. Open ranges can be defined by setting\njust one of min or max. Mean value `X` of `time_series`\nvalues should satisfy `range.min <= X <= range.max` for a\ngood service.\nStructure is documented below.",
      () => monitoring_SloWindowsBasedSliMetricMeanInRangeRange_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "timeSeries",
      "A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)\nspecifying the TimeSeries to use for evaluating window\nThe provided TimeSeries must have ValueType = INT64 or\nValueType = DOUBLE and MetricKind = GAUGE. Mean value `X`\nshould satisfy `range.min <= X <= range.max`\nunder good service.",
      () => [],
      true,
      false,
    ),
  ];
}
