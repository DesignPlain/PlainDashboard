import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface iot_TopicRuleCloudwatchMetric {
  // An optional Unix timestamp (http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/cloudwatch_concepts.html#about_timestamp).
  metricTimestamp?: string;

  // The metric unit (supported units can be found here: http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/cloudwatch_concepts.html#Unit)
  metricUnit?: string;

  // The CloudWatch metric value.
  metricValue?: string;

  // The IAM role ARN that allows access to the CloudWatch metric.
  roleArn?: string;

  // The CloudWatch metric name.
  metricName?: string;

  // The CloudWatch metric namespace name.
  metricNamespace?: string;
}

export function iot_TopicRuleCloudwatchMetric_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "metricName",
      "The CloudWatch metric name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "metricNamespace",
      "The CloudWatch metric namespace name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "metricTimestamp",
      "An optional Unix timestamp (http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/cloudwatch_concepts.html#about_timestamp).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "metricUnit",
      "The metric unit (supported units can be found here: http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/cloudwatch_concepts.html#Unit)",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "metricValue",
      "The CloudWatch metric value.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "The IAM role ARN that allows access to the CloudWatch metric.",
      [],
      true,
      false,
    ),
  ];
}
