import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  monitoring_AlertPolicyConditionConditionAbsentAggregation,
  monitoring_AlertPolicyConditionConditionAbsentAggregation_GetTypes,
} from "./monitoring_AlertPolicyConditionConditionAbsentAggregation";
import {
  monitoring_AlertPolicyConditionConditionAbsentTrigger,
  monitoring_AlertPolicyConditionConditionAbsentTrigger_GetTypes,
} from "./monitoring_AlertPolicyConditionConditionAbsentTrigger";

export interface monitoring_AlertPolicyConditionConditionAbsent {
  /*
The amount of time that a time series must
fail to report new data to be considered
failing. Currently, only values that are a
multiple of a minute--e.g. 60s, 120s, or 300s
--are supported.
*/
  duration?: string;

  /*
A filter that identifies which time series
should be compared with the threshold.The
filter is similar to the one that is
specified in the
MetricService.ListTimeSeries request (that
call is useful to verify the time series
that will be retrieved / processed) and must
specify the metric type and optionally may
contain restrictions on resource type,
resource labels, and metric labels. This
field may not exceed 2048 Unicode characters
in length.
*/
  filter?: string;

  /*
The number/percent of time series for which
the comparison must hold in order for the
condition to trigger. If unspecified, then
the condition will trigger if the comparison
is true for any of the time series that have
been identified by filter and aggregations.
Structure is documented below.
*/
  trigger?: monitoring_AlertPolicyConditionConditionAbsentTrigger;

  /*
Specifies the alignment of data points in
individual time series as well as how to
combine the retrieved time series together
(such as when aggregating multiple streams
on each resource to a single stream for each
resource or when aggregating streams across
all members of a group of resources).
Multiple aggregations are applied in the
order specified.
Structure is documented below.
*/
  aggregations?: Array<monitoring_AlertPolicyConditionConditionAbsentAggregation>;
}

export function monitoring_AlertPolicyConditionConditionAbsent_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "duration",
      "The amount of time that a time series must\nfail to report new data to be considered\nfailing. Currently, only values that are a\nmultiple of a minute--e.g. 60s, 120s, or 300s\n--are supported.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "filter",
      "A filter that identifies which time series\nshould be compared with the threshold.The\nfilter is similar to the one that is\nspecified in the\nMetricService.ListTimeSeries request (that\ncall is useful to verify the time series\nthat will be retrieved / processed) and must\nspecify the metric type and optionally may\ncontain restrictions on resource type,\nresource labels, and metric labels. This\nfield may not exceed 2048 Unicode characters\nin length.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "trigger",
      "The number/percent of time series for which\nthe comparison must hold in order for the\ncondition to trigger. If unspecified, then\nthe condition will trigger if the comparison\nis true for any of the time series that have\nbeen identified by filter and aggregations.\nStructure is documented below.",
      monitoring_AlertPolicyConditionConditionAbsentTrigger_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "aggregations",
      "Specifies the alignment of data points in\nindividual time series as well as how to\ncombine the retrieved time series together\n(such as when aggregating multiple streams\non each resource to a single stream for each\nresource or when aggregating streams across\nall members of a group of resources).\nMultiple aggregations are applied in the\norder specified.\nStructure is documented below.",
      monitoring_AlertPolicyConditionConditionAbsentAggregation_GetTypes(),
      false,
      false,
    ),
  ];
}
