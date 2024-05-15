import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Monitoring_AlertPolicyConditionConditionThresholdAggregation,
  Monitoring_AlertPolicyConditionConditionThresholdAggregation_GetTypes,
} from "./Monitoring_AlertPolicyConditionConditionThresholdAggregation";
import {
  Monitoring_AlertPolicyConditionConditionThresholdDenominatorAggregation,
  Monitoring_AlertPolicyConditionConditionThresholdDenominatorAggregation_GetTypes,
} from "./Monitoring_AlertPolicyConditionConditionThresholdDenominatorAggregation";
import {
  Monitoring_AlertPolicyConditionConditionThresholdForecastOptions,
  Monitoring_AlertPolicyConditionConditionThresholdForecastOptions_GetTypes,
} from "./Monitoring_AlertPolicyConditionConditionThresholdForecastOptions";
import {
  Monitoring_AlertPolicyConditionConditionThresholdTrigger,
  Monitoring_AlertPolicyConditionConditionThresholdTrigger_GetTypes,
} from "./Monitoring_AlertPolicyConditionConditionThresholdTrigger";

export interface Monitoring_AlertPolicyConditionConditionThreshold {
  /*
A value against which to compare the time
series.
*/
  ThresholdValue?: number;

  /*
Specifies the alignment of data points in
individual time series as well as how to
combine the retrieved time series together
(such as when aggregating multiple streams
on each resource to a single stream for each
resource or when aggregating streams across
all members of a group of resources).
Multiple aggregations are applied in the
order specified.This field is similar to the
one in the MetricService.ListTimeSeries
request. It is advisable to use the
ListTimeSeries method when debugging this
field.
Structure is documented below.
*/
  Aggregations?: Array<Monitoring_AlertPolicyConditionConditionThresholdAggregation>;

  /*
The comparison to apply between the time
series (indicated by filter and aggregation)
and the threshold (indicated by
threshold_value). The comparison is applied
on each time series, with the time series on
the left-hand side and the threshold on the
right-hand side. Only COMPARISON_LT and
COMPARISON_GT are supported currently.
Possible values are: `COMPARISON_GT`, `COMPARISON_GE`, `COMPARISON_LT`, `COMPARISON_LE`, `COMPARISON_EQ`, `COMPARISON_NE`.
*/
  Comparison?: string;

  /*
Specifies the alignment of data points in
individual time series selected by
denominatorFilter as well as how to combine
the retrieved time series together (such as
when aggregating multiple streams on each
resource to a single stream for each
resource or when aggregating streams across
all members of a group of resources).When
computing ratios, the aggregations and
denominator_aggregations fields must use the
same alignment period and produce time
series that have the same periodicity and
labels.This field is similar to the one in
the MetricService.ListTimeSeries request. It
is advisable to use the ListTimeSeries
method when debugging this field.
Structure is documented below.
*/
  DenominatorAggregations?: Array<Monitoring_AlertPolicyConditionConditionThresholdDenominatorAggregation>;

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
  Filter?: string;

  /*
When this field is present, the `MetricThreshold`
condition forecasts whether the time series is
predicted to violate the threshold within the
`forecastHorizon`. When this field is not set, the
`MetricThreshold` tests the current value of the
timeseries against the threshold.
Structure is documented below.
*/
  ForecastOptions?: Monitoring_AlertPolicyConditionConditionThresholdForecastOptions;

  /*
A filter that identifies a time series that
should be used as the denominator of a ratio
that will be compared with the threshold. If
a denominator_filter is specified, the time
series specified by the filter field will be
used as the numerator.The filter is similar
to the one that is specified in the
MetricService.ListTimeSeries request (that
call is useful to verify the time series
that will be retrieved / processed) and must
specify the metric type and optionally may
contain restrictions on resource type,
resource labels, and metric labels. This
field may not exceed 2048 Unicode characters
in length.
*/
  DenominatorFilter?: string;

  /*
A condition control that determines how
metric-threshold conditions are evaluated when
data stops arriving.
Possible values are: `EVALUATION_MISSING_DATA_INACTIVE`, `EVALUATION_MISSING_DATA_ACTIVE`, `EVALUATION_MISSING_DATA_NO_OP`.
*/
  EvaluationMissingData?: string;

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
  Trigger?: Monitoring_AlertPolicyConditionConditionThresholdTrigger;
}

export function Monitoring_AlertPolicyConditionConditionThreshold_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "ThresholdValue",
      "A value against which to compare the time\nseries.",
      [],
      false,
      false,
    ),
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
      "DenominatorFilter",
      "A filter that identifies a time series that\nshould be used as the denominator of a ratio\nthat will be compared with the threshold. If\na denominator_filter is specified, the time\nseries specified by the filter field will be\nused as the numerator.The filter is similar\nto the one that is specified in the\nMetricService.ListTimeSeries request (that\ncall is useful to verify the time series\nthat will be retrieved / processed) and must\nspecify the metric type and optionally may\ncontain restrictions on resource type,\nresource labels, and metric labels. This\nfield may not exceed 2048 Unicode characters\nin length.",
      [],
      false,
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
      InputType.Object,
      "Trigger",
      "The number/percent of time series for which\nthe comparison must hold in order for the\ncondition to trigger. If unspecified, then\nthe condition will trigger if the comparison\nis true for any of the time series that have\nbeen identified by filter and aggregations,\nor by the ratio, if denominator_filter and\ndenominator_aggregations are specified.\nStructure is documented below.",
      Monitoring_AlertPolicyConditionConditionThresholdTrigger_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Aggregations",
      "Specifies the alignment of data points in\nindividual time series as well as how to\ncombine the retrieved time series together\n(such as when aggregating multiple streams\non each resource to a single stream for each\nresource or when aggregating streams across\nall members of a group of resources).\nMultiple aggregations are applied in the\norder specified.This field is similar to the\none in the MetricService.ListTimeSeries\nrequest. It is advisable to use the\nListTimeSeries method when debugging this\nfield.\nStructure is documented below.",
      Monitoring_AlertPolicyConditionConditionThresholdAggregation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Comparison",
      "The comparison to apply between the time\nseries (indicated by filter and aggregation)\nand the threshold (indicated by\nthreshold_value). The comparison is applied\non each time series, with the time series on\nthe left-hand side and the threshold on the\nright-hand side. Only COMPARISON_LT and\nCOMPARISON_GT are supported currently.\nPossible values are: `COMPARISON_GT`, `COMPARISON_GE`, `COMPARISON_LT`, `COMPARISON_LE`, `COMPARISON_EQ`, `COMPARISON_NE`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "DenominatorAggregations",
      "Specifies the alignment of data points in\nindividual time series selected by\ndenominatorFilter as well as how to combine\nthe retrieved time series together (such as\nwhen aggregating multiple streams on each\nresource to a single stream for each\nresource or when aggregating streams across\nall members of a group of resources).When\ncomputing ratios, the aggregations and\ndenominator_aggregations fields must use the\nsame alignment period and produce time\nseries that have the same periodicity and\nlabels.This field is similar to the one in\nthe MetricService.ListTimeSeries request. It\nis advisable to use the ListTimeSeries\nmethod when debugging this field.\nStructure is documented below.",
      Monitoring_AlertPolicyConditionConditionThresholdDenominatorAggregation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Filter",
      "A filter that identifies which time series\nshould be compared with the threshold.The\nfilter is similar to the one that is\nspecified in the\nMetricService.ListTimeSeries request (that\ncall is useful to verify the time series\nthat will be retrieved / processed) and must\nspecify the metric type and optionally may\ncontain restrictions on resource type,\nresource labels, and metric labels. This\nfield may not exceed 2048 Unicode characters\nin length.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ForecastOptions",
      "When this field is present, the `MetricThreshold`\ncondition forecasts whether the time series is\npredicted to violate the threshold within the\n`forecastHorizon`. When this field is not set, the\n`MetricThreshold` tests the current value of the\ntimeseries against the threshold.\nStructure is documented below.",
      Monitoring_AlertPolicyConditionConditionThresholdForecastOptions_GetTypes(),
      false,
      false,
    ),
  ];
}
