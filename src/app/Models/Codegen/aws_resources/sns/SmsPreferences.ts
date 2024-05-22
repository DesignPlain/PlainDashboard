import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface SmsPreferencesArgs {
  // The percentage of successful SMS deliveries for which Amazon SNS will write logs in CloudWatch Logs. The value must be between 0 and 100.
  deliveryStatusSuccessSamplingRate?: string;

  // The maximum amount in USD that you are willing to spend each month to send SMS messages.
  monthlySpendLimit?: number;

  // The name of the Amazon S3 bucket to receive daily SMS usage reports from Amazon SNS.
  usageReportS3Bucket?: string;

  // A string, such as your business brand, that is displayed as the sender on the receiving device.
  defaultSenderId?: string;

  // The type of SMS message that you will send by default. Possible values are: Promotional, Transactional
  defaultSmsType?: string;

  // The ARN of the IAM role that allows Amazon SNS to write logs about SMS deliveries in CloudWatch Logs.
  deliveryStatusIamRoleArn?: string;
}
export class SmsPreferences extends Resource {
  // The name of the Amazon S3 bucket to receive daily SMS usage reports from Amazon SNS.
  public usageReportS3Bucket?: string;

  // A string, such as your business brand, that is displayed as the sender on the receiving device.
  public defaultSenderId?: string;

  // The type of SMS message that you will send by default. Possible values are: Promotional, Transactional
  public defaultSmsType?: string;

  // The ARN of the IAM role that allows Amazon SNS to write logs about SMS deliveries in CloudWatch Logs.
  public deliveryStatusIamRoleArn?: string;

  // The percentage of successful SMS deliveries for which Amazon SNS will write logs in CloudWatch Logs. The value must be between 0 and 100.
  public deliveryStatusSuccessSamplingRate?: string;

  // The maximum amount in USD that you are willing to spend each month to send SMS messages.
  public monthlySpendLimit?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "deliveryStatusIamRoleArn",
        "The ARN of the IAM role that allows Amazon SNS to write logs about SMS deliveries in CloudWatch Logs.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "deliveryStatusSuccessSamplingRate",
        "The percentage of successful SMS deliveries for which Amazon SNS will write logs in CloudWatch Logs. The value must be between 0 and 100.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "monthlySpendLimit",
        "The maximum amount in USD that you are willing to spend each month to send SMS messages.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "usageReportS3Bucket",
        "The name of the Amazon S3 bucket to receive daily SMS usage reports from Amazon SNS.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "defaultSenderId",
        "A string, such as your business brand, that is displayed as the sender on the receiving device.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "defaultSmsType",
        "The type of SMS message that you will send by default. Possible values are: Promotional, Transactional",
        [],
        false,
        false,
      ),
    ];
  }
}
