import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface LogSubscriptionFilterArgs {
  // The ARN of the destination to deliver matching log events to. Kinesis stream or Lambda function ARN.
  destinationArn?: string;

  // The method used to distribute log data to the destination. By default log data is grouped by log stream, but the grouping can be set to random for a more even distribution. This property is only applicable when the destination is an Amazon Kinesis stream. Valid values are "Random" and "ByLogStream".
  distribution?: string;

  // A valid CloudWatch Logs filter pattern for subscribing to a filtered stream of log events. Use empty string `""` to match everything. For more information, see the [Amazon CloudWatch Logs User Guide](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html).
  filterPattern?: string;

  // The name of the log group to associate the subscription filter with
  logGroup?: string;

  // A name for the subscription filter
  name?: string;

  // The ARN of an IAM role that grants Amazon CloudWatch Logs permissions to deliver ingested log events to the destination. If you use Lambda as a destination, you should skip this argument and use `aws.lambda.Permission` resource for granting access from CloudWatch logs to the destination Lambda function.
  roleArn?: string;
}
export class LogSubscriptionFilter extends DS_Resource {
  // The name of the log group to associate the subscription filter with
  public logGroup?: string;

  // A name for the subscription filter
  public name?: string;

  // The ARN of an IAM role that grants Amazon CloudWatch Logs permissions to deliver ingested log events to the destination. If you use Lambda as a destination, you should skip this argument and use `aws.lambda.Permission` resource for granting access from CloudWatch logs to the destination Lambda function.
  public roleArn?: string;

  // The ARN of the destination to deliver matching log events to. Kinesis stream or Lambda function ARN.
  public destinationArn?: string;

  // The method used to distribute log data to the destination. By default log data is grouped by log stream, but the grouping can be set to random for a more even distribution. This property is only applicable when the destination is an Amazon Kinesis stream. Valid values are "Random" and "ByLogStream".
  public distribution?: string;

  // A valid CloudWatch Logs filter pattern for subscribing to a filtered stream of log events. Use empty string `""` to match everything. For more information, see the [Amazon CloudWatch Logs User Guide](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html).
  public filterPattern?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "destinationArn",
        "The ARN of the destination to deliver matching log events to. Kinesis stream or Lambda function ARN.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "distribution",
        'The method used to distribute log data to the destination. By default log data is grouped by log stream, but the grouping can be set to random for a more even distribution. This property is only applicable when the destination is an Amazon Kinesis stream. Valid values are "Random" and "ByLogStream".',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "filterPattern",
        'A valid CloudWatch Logs filter pattern for subscribing to a filtered stream of log events. Use empty string `""` to match everything. For more information, see the [Amazon CloudWatch Logs User Guide](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html).',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "logGroup",
        "The name of the log group to associate the subscription filter with",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "A name for the subscription filter",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "The ARN of an IAM role that grants Amazon CloudWatch Logs permissions to deliver ingested log events to the destination. If you use Lambda as a destination, you should skip this argument and use `aws.lambda.Permission` resource for granting access from CloudWatch logs to the destination Lambda function.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
