import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ssm_MaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig,
  ssm_MaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig_GetTypes,
} from "./ssm_MaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig";
import {
  ssm_MaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter,
  ssm_MaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter_GetTypes,
} from "./ssm_MaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter";
import {
  ssm_MaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig,
  ssm_MaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig_GetTypes,
} from "./ssm_MaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig";

export interface ssm_MaintenanceWindowTaskTaskInvocationParametersRunCommandParameters {
  // The SHA-256 or SHA-1 hash created by the system when the document was created. SHA-1 hashes have been deprecated.
  documentHash?: string;

  // SHA-256 or SHA-1. SHA-1 hashes have been deprecated. Valid values: `Sha256` and `Sha1`
  documentHashType?: string;

  // The version of an Automation document to use during task execution.
  documentVersion?: string;

  // The parameters for the RUN_COMMAND task execution. Documented below.
  parameters?: Array<ssm_MaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter>;

  // The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) service role to use to publish Amazon Simple Notification Service (Amazon SNS) notifications for maintenance window Run Command tasks.
  serviceRoleArn?: string;

  // If this time is reached and the command has not already started executing, it doesn't run.
  timeoutSeconds?: number;

  // Configuration options for sending command output to CloudWatch Logs. Documented below.
  cloudwatchConfig?: ssm_MaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig;

  // Information about the command(s) to execute.
  comment?: string;

  // Configurations for sending notifications about command status changes on a per-instance basis. Documented below.
  notificationConfig?: ssm_MaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig;

  // The name of the Amazon S3 bucket.
  outputS3Bucket?: string;

  // The Amazon S3 bucket subfolder.
  outputS3KeyPrefix?: string;
}

export function ssm_MaintenanceWindowTaskTaskInvocationParametersRunCommandParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "documentVersion",
      "The version of an Automation document to use during task execution.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceRoleArn",
      "The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) service role to use to publish Amazon Simple Notification Service (Amazon SNS) notifications for maintenance window Run Command tasks.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "comment",
      "Information about the command(s) to execute.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "outputS3KeyPrefix",
      "The Amazon S3 bucket subfolder.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "documentHash",
      "The SHA-256 or SHA-1 hash created by the system when the document was created. SHA-1 hashes have been deprecated.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "documentHashType",
      "SHA-256 or SHA-1. SHA-1 hashes have been deprecated. Valid values: `Sha256` and `Sha1`",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "cloudwatchConfig",
      "Configuration options for sending command output to CloudWatch Logs. Documented below.",
      () =>
        ssm_MaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "notificationConfig",
      "Configurations for sending notifications about command status changes on a per-instance basis. Documented below.",
      () =>
        ssm_MaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "outputS3Bucket",
      "The name of the Amazon S3 bucket.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "parameters",
      "The parameters for the RUN_COMMAND task execution. Documented below.",
      () =>
        ssm_MaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "timeoutSeconds",
      "If this time is reached and the command has not already started executing, it doesn't run.",
      () => [],
      false,
      false,
    ),
  ];
}
