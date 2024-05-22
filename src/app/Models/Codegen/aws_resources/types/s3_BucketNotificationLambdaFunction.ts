import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface s3_BucketNotificationLambdaFunction {
  // [Event](http://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html#notification-how-to-event-types-and-destinations) for which to send notifications.
  events?: Array<string>;

  // Object key name prefix.
  filterPrefix?: string;

  // Object key name suffix.
  filterSuffix?: string;

  // Unique identifier for each of the notification configurations.
  id?: string;

  // Lambda function ARN.
  lambdaFunctionArn?: string;
}

export function s3_BucketNotificationLambdaFunction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "filterSuffix",
      "Object key name suffix.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "Unique identifier for each of the notification configurations.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lambdaFunctionArn",
      "Lambda function ARN.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "events",
      "[Event](http://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html#notification-how-to-event-types-and-destinations) for which to send notifications.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "filterPrefix",
      "Object key name prefix.",
      [],
      false,
      false,
    ),
  ];
}
