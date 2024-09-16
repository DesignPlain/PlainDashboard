import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudwatch_MetricAlarmMetricQuery,
  cloudwatch_MetricAlarmMetricQuery_GetTypes,
} from '../types/cloudwatch_MetricAlarmMetricQuery';

export interface MetricAlarmArgs {
  // Indicates whether or not actions should be executed during any changes to the alarm's state. Defaults to `true`.
  actionsEnabled?: boolean;

  // The list of actions to execute when this alarm transitions into an ALARM state from any other state. Each action is specified as an Amazon Resource Name (ARN).
  alarmActions?: Array<string>;

  // The description for the alarm.
  alarmDescription?: string;

  // The list of actions to execute when this alarm transitions into an INSUFFICIENT_DATA state from any other state. Each action is specified as an Amazon Resource Name (ARN).
  insufficientDataActions?: Array<string>;

  // The descriptive name for the alarm. This name must be unique within the user's AWS account
  name?: string;

  // The value against which the specified statistic is compared. This parameter is required for alarms based on static thresholds, but should not be used for alarms based on anomaly detection models.
  threshold?: number;

  // The unit for the alarm's associated metric.
  unit?: string;

  /*
Used only for alarms based on percentiles.
If you specify `ignore`, the alarm state will not change during periods with too few data points to be statistically significant.
If you specify `evaluate` or omit this parameter, the alarm will always be evaluated and possibly change state no matter how many data points are available.
The following values are supported: `ignore`, and `evaluate`.
*/
  evaluateLowSampleCountPercentiles?: string;

  /*
The name for the alarm's associated metric.
See docs for [supported metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CW_Support_For_AWS.html).
*/
  metricName?: string;

  // Enables you to create an alarm based on a metric math expression. You may specify at most 20.
  metricQueries?: Array<cloudwatch_MetricAlarmMetricQuery>;

  // The list of actions to execute when this alarm transitions into an OK state from any other state. Each action is specified as an Amazon Resource Name (ARN).
  okActions?: Array<string>;

  /*
The period in seconds over which the specified `statistic` is applied.
Valid values are `10`, `30`, or any multiple of `60`.
*/
  period?: number;

  /*
The statistic to apply to the alarm's associated metric.
Either of the following is supported: `SampleCount`, `Average`, `Sum`, `Minimum`, `Maximum`
*/
  statistic?: string;

  // Sets how this alarm is to handle missing data points. The following values are supported: `missing`, `ignore`, `breaching` and `notBreaching`. Defaults to `missing`.
  treatMissingData?: string;

  // The number of datapoints that must be breaching to trigger the alarm.
  datapointsToAlarm?: number;

  // The dimensions for the alarm's associated metric.  For the list of available dimensions see the AWS documentation [here](http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CW_Support_For_AWS.html).
  dimensions?: Map<string, string>;

  // The number of periods over which data is compared to the specified threshold.
  evaluationPeriods?: number;

  // The percentile statistic for the metric associated with the alarm. Specify a value between p0.0 and p100.
  extendedStatistic?: string;

  // The arithmetic operation to use when comparing the specified Statistic and Threshold. The specified Statistic value is used as the first operand. Either of the following is supported: `GreaterThanOrEqualToThreshold`, `GreaterThanThreshold`, `LessThanThreshold`, `LessThanOrEqualToThreshold`. Additionally, the values  `LessThanLowerOrGreaterThanUpperThreshold`, `LessThanLowerThreshold`, and `GreaterThanUpperThreshold` are used only for alarms based on anomaly detection models.
  comparisonOperator?: string;

  /*
The namespace for the alarm's associated metric. See docs for the [list of namespaces](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/aws-namespaces.html).
See docs for [supported metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CW_Support_For_AWS.html).
*/
  namespace?: string;

  /*
A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

> --NOTE:--  If you specify at least one `metric_query`, you may not specify a `metric_name`, `namespace`, `period` or `statistic`. If you do not specify a `metric_query`, you must specify each of these (although you may use `extended_statistic` instead of `statistic`).
*/
  tags?: Map<string, string>;

  // If this is an alarm based on an anomaly detection model, make this value match the ID of the ANOMALY_DETECTION_BAND function.
  thresholdMetricId?: string;
}
export class MetricAlarm extends DS_Resource {
  // The list of actions to execute when this alarm transitions into an ALARM state from any other state. Each action is specified as an Amazon Resource Name (ARN).
  public alarmActions?: Array<string>;

  // The percentile statistic for the metric associated with the alarm. Specify a value between p0.0 and p100.
  public extendedStatistic?: string;

  /*
The period in seconds over which the specified `statistic` is applied.
Valid values are `10`, `30`, or any multiple of `60`.
*/
  public period?: number;

  // The unit for the alarm's associated metric.
  public unit?: string;

  // Indicates whether or not actions should be executed during any changes to the alarm's state. Defaults to `true`.
  public actionsEnabled?: boolean;

  // The number of datapoints that must be breaching to trigger the alarm.
  public datapointsToAlarm?: number;

  /*
Used only for alarms based on percentiles.
If you specify `ignore`, the alarm state will not change during periods with too few data points to be statistically significant.
If you specify `evaluate` or omit this parameter, the alarm will always be evaluated and possibly change state no matter how many data points are available.
The following values are supported: `ignore`, and `evaluate`.
*/
  public evaluateLowSampleCountPercentiles?: string;

  // The number of periods over which data is compared to the specified threshold.
  public evaluationPeriods?: number;

  /*
The namespace for the alarm's associated metric. See docs for the [list of namespaces](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/aws-namespaces.html).
See docs for [supported metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CW_Support_For_AWS.html).
*/
  public namespace?: string;

  /*
The statistic to apply to the alarm's associated metric.
Either of the following is supported: `SampleCount`, `Average`, `Sum`, `Minimum`, `Maximum`
*/
  public statistic?: string;

  /*
A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

> --NOTE:--  If you specify at least one `metric_query`, you may not specify a `metric_name`, `namespace`, `period` or `statistic`. If you do not specify a `metric_query`, you must specify each of these (although you may use `extended_statistic` instead of `statistic`).
*/
  public tags?: Map<string, string>;

  // The ARN of the CloudWatch Metric Alarm.
  public arn?: string;

  // The arithmetic operation to use when comparing the specified Statistic and Threshold. The specified Statistic value is used as the first operand. Either of the following is supported: `GreaterThanOrEqualToThreshold`, `GreaterThanThreshold`, `LessThanThreshold`, `LessThanOrEqualToThreshold`. Additionally, the values  `LessThanLowerOrGreaterThanUpperThreshold`, `LessThanLowerThreshold`, and `GreaterThanUpperThreshold` are used only for alarms based on anomaly detection models.
  public comparisonOperator?: string;

  // The dimensions for the alarm's associated metric.  For the list of available dimensions see the AWS documentation [here](http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CW_Support_For_AWS.html).
  public dimensions?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Sets how this alarm is to handle missing data points. The following values are supported: `missing`, `ignore`, `breaching` and `notBreaching`. Defaults to `missing`.
  public treatMissingData?: string;

  // The description for the alarm.
  public alarmDescription?: string;

  /*
The name for the alarm's associated metric.
See docs for [supported metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CW_Support_For_AWS.html).
*/
  public metricName?: string;

  // Enables you to create an alarm based on a metric math expression. You may specify at most 20.
  public metricQueries?: Array<cloudwatch_MetricAlarmMetricQuery>;

  // The descriptive name for the alarm. This name must be unique within the user's AWS account
  public name?: string;

  // The list of actions to execute when this alarm transitions into an OK state from any other state. Each action is specified as an Amazon Resource Name (ARN).
  public okActions?: Array<string>;

  // The value against which the specified statistic is compared. This parameter is required for alarms based on static thresholds, but should not be used for alarms based on anomaly detection models.
  public threshold?: number;

  // If this is an alarm based on an anomaly detection model, make this value match the ID of the ANOMALY_DETECTION_BAND function.
  public thresholdMetricId?: string;

  // The list of actions to execute when this alarm transitions into an INSUFFICIENT_DATA state from any other state. Each action is specified as an Amazon Resource Name (ARN).
  public insufficientDataActions?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        'actionsEnabled',
        "Indicates whether or not actions should be executed during any changes to the alarm's state. Defaults to `true`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'alarmActions',
        'The list of actions to execute when this alarm transitions into an ALARM state from any other state. Each action is specified as an Amazon Resource Name (ARN).',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        "The descriptive name for the alarm. This name must be unique within the user's AWS account",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'unit',
        "The unit for the alarm's associated metric.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'period',
        'The period in seconds over which the specified `statistic` is applied.\nValid values are `10`, `30`, or any multiple of `60`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'statistic',
        "The statistic to apply to the alarm's associated metric.\nEither of the following is supported: `SampleCount`, `Average`, `Sum`, `Minimum`, `Maximum`",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'datapointsToAlarm',
        'The number of datapoints that must be breaching to trigger the alarm.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'evaluationPeriods',
        'The number of periods over which data is compared to the specified threshold.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'extendedStatistic',
        'The percentile statistic for the metric associated with the alarm. Specify a value between p0.0 and p100.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'threshold',
        'The value against which the specified statistic is compared. This parameter is required for alarms based on static thresholds, but should not be used for alarms based on anomaly detection models.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'evaluateLowSampleCountPercentiles',
        'Used only for alarms based on percentiles.\nIf you specify `ignore`, the alarm state will not change during periods with too few data points to be statistically significant.\nIf you specify `evaluate` or omit this parameter, the alarm will always be evaluated and possibly change state no matter how many data points are available.\nThe following values are supported: `ignore`, and `evaluate`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.\n\n> **NOTE:**  If you specify at least one `metric_query`, you may not specify a `metric_name`, `namespace`, `period` or `statistic`. If you do not specify a `metric_query`, you must specify each of these (although you may use `extended_statistic` instead of `statistic`).',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'alarmDescription',
        'The description for the alarm.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'metricName',
        "The name for the alarm's associated metric.\nSee docs for [supported metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CW_Support_For_AWS.html).",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'okActions',
        'The list of actions to execute when this alarm transitions into an OK state from any other state. Each action is specified as an Amazon Resource Name (ARN).',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'comparisonOperator',
        'The arithmetic operation to use when comparing the specified Statistic and Threshold. The specified Statistic value is used as the first operand. Either of the following is supported: `GreaterThanOrEqualToThreshold`, `GreaterThanThreshold`, `LessThanThreshold`, `LessThanOrEqualToThreshold`. Additionally, the values  `LessThanLowerOrGreaterThanUpperThreshold`, `LessThanLowerThreshold`, and `GreaterThanUpperThreshold` are used only for alarms based on anomaly detection models.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'insufficientDataActions',
        'The list of actions to execute when this alarm transitions into an INSUFFICIENT_DATA state from any other state. Each action is specified as an Amazon Resource Name (ARN).',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'metricQueries',
        'Enables you to create an alarm based on a metric math expression. You may specify at most 20.',
        () => cloudwatch_MetricAlarmMetricQuery_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'treatMissingData',
        'Sets how this alarm is to handle missing data points. The following values are supported: `missing`, `ignore`, `breaching` and `notBreaching`. Defaults to `missing`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'dimensions',
        "The dimensions for the alarm's associated metric.  For the list of available dimensions see the AWS documentation [here](http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CW_Support_For_AWS.html).",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'namespace',
        "The namespace for the alarm's associated metric. See docs for the [list of namespaces](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/aws-namespaces.html).\nSee docs for [supported metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CW_Support_For_AWS.html).",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'thresholdMetricId',
        'If this is an alarm based on an anomaly detection model, make this value match the ID of the ANOMALY_DETECTION_BAND function.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
