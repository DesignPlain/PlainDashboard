import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudwatch_MetricAlarmMetricQueryMetric,
  cloudwatch_MetricAlarmMetricQueryMetric_GetTypes,
} from './cloudwatch_MetricAlarmMetricQueryMetric';

export interface cloudwatch_MetricAlarmMetricQuery {
  // A short name used to tie this object to the results in the response. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscore. The first character must be a lowercase letter.
  id?: string;

  // A human-readable label for this metric or expression. This is especially useful if this is an expression, so that you know what the value represents.
  label?: string;

  // The metric to be returned, along with statistics, period, and units. Use this parameter only if this object is retrieving a metric and not performing a math expression on returned data.
  metric?: cloudwatch_MetricAlarmMetricQueryMetric;

  /*
Granularity in seconds of returned data points.
For metrics with regular resolution, valid values are any multiple of `60`.
For high-resolution metrics, valid values are `1`, `5`, `10`, `30`, or any multiple of `60`.
*/
  period?: number;

  /*
Specify exactly one `metric_query` to be `true` to use that `metric_query` result as the alarm.

> --NOTE:--  You must specify either `metric` or `expression`. Not both.
*/
  returnData?: boolean;

  // The ID of the account where the metrics are located, if this is a cross-account alarm.
  accountId?: string;

  // The math expression to be performed on the returned data, if this object is performing a math expression. This expression can use the id of the other metrics to refer to those metrics, and can also use the id of other expressions to use the result of those expressions. For more information about metric math expressions, see Metric Math Syntax and Functions in the [Amazon CloudWatch User Guide](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax).
  expression?: string;
}

export function cloudwatch_MetricAlarmMetricQuery_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'label',
      'A human-readable label for this metric or expression. This is especially useful if this is an expression, so that you know what the value represents.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'metric',
      'The metric to be returned, along with statistics, period, and units. Use this parameter only if this object is retrieving a metric and not performing a math expression on returned data.',
      () => cloudwatch_MetricAlarmMetricQueryMetric_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'period',
      'Granularity in seconds of returned data points.\nFor metrics with regular resolution, valid values are any multiple of `60`.\nFor high-resolution metrics, valid values are `1`, `5`, `10`, `30`, or any multiple of `60`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'returnData',
      'Specify exactly one `metric_query` to be `true` to use that `metric_query` result as the alarm.\n\n> **NOTE:**  You must specify either `metric` or `expression`. Not both.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'accountId',
      'The ID of the account where the metrics are located, if this is a cross-account alarm.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'expression',
      'The math expression to be performed on the returned data, if this object is performing a math expression. This expression can use the id of the other metrics to refer to those metrics, and can also use the id of other expressions to use the result of those expressions. For more information about metric math expressions, see Metric Math Syntax and Functions in the [Amazon CloudWatch User Guide](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax).',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'id',
      'A short name used to tie this object to the results in the response. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscore. The first character must be a lowercase letter.',
      () => [],
      true,
      false,
    ),
  ];
}
