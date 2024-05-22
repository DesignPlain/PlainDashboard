import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  s3_BucketNotificationQueue,
  s3_BucketNotificationQueue_GetTypes,
} from "../types/s3_BucketNotificationQueue";
import {
  s3_BucketNotificationTopic,
  s3_BucketNotificationTopic_GetTypes,
} from "../types/s3_BucketNotificationTopic";
import {
  s3_BucketNotificationLambdaFunction,
  s3_BucketNotificationLambdaFunction_GetTypes,
} from "../types/s3_BucketNotificationLambdaFunction";

export interface BucketNotificationArgs {
  // Notification configuration to SQS Queue. See below.
  queues?: Array<s3_BucketNotificationQueue>;

  // Notification configuration to SNS Topic. See below.
  topics?: Array<s3_BucketNotificationTopic>;

  /*
Name of the bucket for notification configuration.

The following arguments are optional:
*/
  bucket?: string;

  // Whether to enable Amazon EventBridge notifications. Defaults to `false`.
  eventbridge?: boolean;

  // Used to configure notifications to a Lambda Function. See below.
  lambdaFunctions?: Array<s3_BucketNotificationLambdaFunction>;
}
export class BucketNotification extends Resource {
  /*
Name of the bucket for notification configuration.

The following arguments are optional:
*/
  public bucket?: string;

  // Whether to enable Amazon EventBridge notifications. Defaults to `false`.
  public eventbridge?: boolean;

  // Used to configure notifications to a Lambda Function. See below.
  public lambdaFunctions?: Array<s3_BucketNotificationLambdaFunction>;

  // Notification configuration to SQS Queue. See below.
  public queues?: Array<s3_BucketNotificationQueue>;

  // Notification configuration to SNS Topic. See below.
  public topics?: Array<s3_BucketNotificationTopic>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "eventbridge",
        "Whether to enable Amazon EventBridge notifications. Defaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "lambdaFunctions",
        "Used to configure notifications to a Lambda Function. See below.",
        s3_BucketNotificationLambdaFunction_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "queues",
        "Notification configuration to SQS Queue. See below.",
        s3_BucketNotificationQueue_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "topics",
        "Notification configuration to SNS Topic. See below.",
        s3_BucketNotificationTopic_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "bucket",
        "Name of the bucket for notification configuration.\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
    ];
  }
}
