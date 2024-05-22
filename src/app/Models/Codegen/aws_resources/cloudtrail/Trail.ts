import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudtrail_TrailAdvancedEventSelector,
  cloudtrail_TrailAdvancedEventSelector_GetTypes,
} from "../types/cloudtrail_TrailAdvancedEventSelector";
import {
  cloudtrail_TrailEventSelector,
  cloudtrail_TrailEventSelector_GetTypes,
} from "../types/cloudtrail_TrailEventSelector";
import {
  cloudtrail_TrailInsightSelector,
  cloudtrail_TrailInsightSelector_GetTypes,
} from "../types/cloudtrail_TrailInsightSelector";

export interface TrailArgs {
  // Whether log file integrity validation is enabled. Defaults to `false`.
  enableLogFileValidation?: boolean;

  // Specifies an advanced event selector for enabling data event logging. Fields documented below. Conflicts with `event_selector`.
  advancedEventSelectors?: Array<cloudtrail_TrailAdvancedEventSelector>;

  // Enables logging for the trail. Defaults to `true`. Setting this to `false` will pause logging.
  enableLogging?: boolean;

  // Whether the trail is created in the current region or in all regions. Defaults to `false`.
  isMultiRegionTrail?: boolean;

  // KMS key ARN to use to encrypt the logs delivered by CloudTrail.
  kmsKeyId?: string;

  /*
Name of the S3 bucket designated for publishing log files.

The following arguments are optional:
*/
  s3BucketName?: string;

  // Name of the Amazon SNS topic defined for notification of log file delivery.
  snsTopicName?: string;

  // Specifies an event selector for enabling data event logging. Fields documented below. Please note the [CloudTrail limits](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/WhatIsCloudTrail-Limits.html) when configuring these. Conflicts with `advanced_event_selector`.
  eventSelectors?: Array<cloudtrail_TrailEventSelector>;

  // Whether the trail is publishing events from global services such as IAM to the log files. Defaults to `true`.
  includeGlobalServiceEvents?: boolean;

  // Name of the trail.
  name?: string;

  // S3 key prefix that follows the name of the bucket you have designated for log file delivery.
  s3KeyPrefix?: string;

  // Log group name using an ARN that represents the log group to which CloudTrail logs will be delivered. Note that CloudTrail requires the Log Stream wildcard.
  cloudWatchLogsGroupArn?: string;

  // Role for the CloudWatch Logs endpoint to assume to write to a user’s log group.
  cloudWatchLogsRoleArn?: string;

  // Configuration block for identifying unusual operational activity. See details below.
  insightSelectors?: Array<cloudtrail_TrailInsightSelector>;

  // Whether the trail is an AWS Organizations trail. Organization trails log events for the master account and all member accounts. Can only be created in the organization master account. Defaults to `false`.
  isOrganizationTrail?: boolean;

  // Map of tags to assign to the trail. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Trail extends Resource {
  // Specifies an event selector for enabling data event logging. Fields documented below. Please note the [CloudTrail limits](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/WhatIsCloudTrail-Limits.html) when configuring these. Conflicts with `advanced_event_selector`.
  public eventSelectors?: Array<cloudtrail_TrailEventSelector>;

  // Whether the trail is created in the current region or in all regions. Defaults to `false`.
  public isMultiRegionTrail?: boolean;

  // Name of the Amazon SNS topic defined for notification of log file delivery.
  public snsTopicName?: string;

  // Map of tags to assign to the trail. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Enables logging for the trail. Defaults to `true`. Setting this to `false` will pause logging.
  public enableLogging?: boolean;

  // Role for the CloudWatch Logs endpoint to assume to write to a user’s log group.
  public cloudWatchLogsRoleArn?: string;

  // Whether log file integrity validation is enabled. Defaults to `false`.
  public enableLogFileValidation?: boolean;

  // Region in which the trail was created.
  public homeRegion?: string;

  // Whether the trail is publishing events from global services such as IAM to the log files. Defaults to `true`.
  public includeGlobalServiceEvents?: boolean;

  // Whether the trail is an AWS Organizations trail. Organization trails log events for the master account and all member accounts. Can only be created in the organization master account. Defaults to `false`.
  public isOrganizationTrail?: boolean;

  // KMS key ARN to use to encrypt the logs delivered by CloudTrail.
  public kmsKeyId?: string;

  // Name of the trail.
  public name?: string;

  // ARN of the trail.
  public arn?: string;

  // Configuration block for identifying unusual operational activity. See details below.
  public insightSelectors?: Array<cloudtrail_TrailInsightSelector>;

  /*
Name of the S3 bucket designated for publishing log files.

The following arguments are optional:
*/
  public s3BucketName?: string;

  // S3 key prefix that follows the name of the bucket you have designated for log file delivery.
  public s3KeyPrefix?: string;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Log group name using an ARN that represents the log group to which CloudTrail logs will be delivered. Note that CloudTrail requires the Log Stream wildcard.
  public cloudWatchLogsGroupArn?: string;

  // Specifies an advanced event selector for enabling data event logging. Fields documented below. Conflicts with `event_selector`.
  public advancedEventSelectors?: Array<cloudtrail_TrailAdvancedEventSelector>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "s3BucketName",
        "Name of the S3 bucket designated for publishing log files.\n\nThe following arguments are optional:",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "snsTopicName",
        "Name of the Amazon SNS topic defined for notification of log file delivery.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the trail.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "s3KeyPrefix",
        "S3 key prefix that follows the name of the bucket you have designated for log file delivery.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "isOrganizationTrail",
        "Whether the trail is an AWS Organizations trail. Organization trails log events for the master account and all member accounts. Can only be created in the organization master account. Defaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the trail. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableLogFileValidation",
        "Whether log file integrity validation is enabled. Defaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "advancedEventSelectors",
        "Specifies an advanced event selector for enabling data event logging. Fields documented below. Conflicts with `event_selector`.",
        cloudtrail_TrailAdvancedEventSelector_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableLogging",
        "Enables logging for the trail. Defaults to `true`. Setting this to `false` will pause logging.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyId",
        "KMS key ARN to use to encrypt the logs delivered by CloudTrail.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "cloudWatchLogsGroupArn",
        "Log group name using an ARN that represents the log group to which CloudTrail logs will be delivered. Note that CloudTrail requires the Log Stream wildcard.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "cloudWatchLogsRoleArn",
        "Role for the CloudWatch Logs endpoint to assume to write to a user’s log group.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "isMultiRegionTrail",
        "Whether the trail is created in the current region or in all regions. Defaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "eventSelectors",
        "Specifies an event selector for enabling data event logging. Fields documented below. Please note the [CloudTrail limits](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/WhatIsCloudTrail-Limits.html) when configuring these. Conflicts with `advanced_event_selector`.",
        cloudtrail_TrailEventSelector_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "includeGlobalServiceEvents",
        "Whether the trail is publishing events from global services such as IAM to the log files. Defaults to `true`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "insightSelectors",
        "Configuration block for identifying unusual operational activity. See details below.",
        cloudtrail_TrailInsightSelector_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
