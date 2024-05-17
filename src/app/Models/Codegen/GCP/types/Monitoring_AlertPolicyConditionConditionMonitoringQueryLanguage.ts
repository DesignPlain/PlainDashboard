import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Monitoring_AlertPolicyConditionConditionMonitoringQueryLanguageTrigger,
  Monitoring_AlertPolicyConditionConditionMonitoringQueryLanguageTrigger_GetTypes,
} from "./Monitoring_AlertPolicyConditionConditionMonitoringQueryLanguageTrigger";

export interface Monitoring_AlertPolicyConditionConditionMonitoringQueryLanguage {
  /*
The amount of time that a time series must
violate the threshold to be considered
failing. Currently, only values that are a
multiple of a minute--e.g., 0, 60, 120, or
300 seconds--are supported. If an invalid
value is given, an error will be returned.
When choosing a duration, it is useful to
keep in mind the frequency of the underlying
time series data (which may also be affected
by any alignments specified in the
aggregations field); a good duration is long
enough so that a single outlier does not
generate spurious alerts, but short enough
that unhealthy states are detected and
alerted on quickly.
*/
  Duration?: string;

  /*
A condition control that determines how
metric-threshold conditions are evaluated when
data stops arriving.
Possible values are: `EVALUATION_MISSING_DATA_INACTIVE`, `EVALUATION_MISSING_DATA_ACTIVE`, `EVALUATION_MISSING_DATA_NO_OP`.
*/
  EvaluationMissingData?: string;

  // Monitoring Query Language query that outputs a boolean stream.
  Query?: string;

  /*
The number/percent of time series for which
the comparison must hold in order for the
condition to trigger. If unspecified, then
the condition will trigger if the comparison
is true for any of the time series that have
been identified by filter and aggregations,
or by the ratio, if denominator_filter and
denominator_aggregations are specified.
Structure is documented below.
*/
  Trigger?: Monitoring_AlertPolicyConditionConditionMonitoringQueryLanguageTrigger;
}

export function Monitoring_AlertPolicyConditionConditionMonitoringQueryLanguage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Duration",
      "The amount of time that a time series must\nviolate the threshold to be considered\nfailing. Currently, only values that are a\nmultiple of a minute--e.g., 0, 60, 120, or\n300 seconds--are supported. If an invalid\nvalue is given, an error will be returned.\nWhen choosing a duration, it is useful to\nkeep in mind the frequency of the underlying\ntime series data (which may also be affected\nby any alignments specified in the\naggregations field); a good duration is long\nenough so that a single outlier does not\ngenerate spurious alerts, but short enough\nthat unhealthy states are detected and\nalerted on quickly.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "EvaluationMissingData",
      "A condition control that determines how\nmetric-threshold conditions are evaluated when\ndata stops arriving.\nPossible values are: `EVALUATION_MISSING_DATA_INACTIVE`, `EVALUATION_MISSING_DATA_ACTIVE`, `EVALUATION_MISSING_DATA_NO_OP`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Query",
      "Monitoring Query Language query that outputs a boolean stream.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Trigger",
      "The number/percent of time series for which\nthe comparison must hold in order for the\ncondition to trigger. If unspecified, then\nthe condition will trigger if the comparison\nis true for any of the time series that have\nbeen identified by filter and aggregations,\nor by the ratio, if denominator_filter and\ndenominator_aggregations are specified.\nStructure is documented below.",
      Monitoring_AlertPolicyConditionConditionMonitoringQueryLanguageTrigger_GetTypes(),
      false,
      false,
    ),
  ];
}
