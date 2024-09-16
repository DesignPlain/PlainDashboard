import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface IdentityNotificationTopicArgs {
  // The identity for which the Amazon SNS topic will be set. You can specify an identity by using its name or by using its Amazon Resource Name (ARN).
  identity?: string;

  // Whether SES should include original email headers in SNS notifications of this type. `false` by default.
  includeOriginalHeaders?: boolean;

  // The type of notifications that will be published to the specified Amazon SNS topic. Valid Values: `Bounce`, `Complaint` or `Delivery`.
  notificationType?: string;

  // The Amazon Resource Name (ARN) of the Amazon SNS topic. Can be set to `""` (an empty string) to disable publishing.
  topicArn?: string;
}
export class IdentityNotificationTopic extends DS_Resource {
  // The identity for which the Amazon SNS topic will be set. You can specify an identity by using its name or by using its Amazon Resource Name (ARN).
  public identity?: string;

  // Whether SES should include original email headers in SNS notifications of this type. `false` by default.
  public includeOriginalHeaders?: boolean;

  // The type of notifications that will be published to the specified Amazon SNS topic. Valid Values: `Bounce`, `Complaint` or `Delivery`.
  public notificationType?: string;

  // The Amazon Resource Name (ARN) of the Amazon SNS topic. Can be set to `""` (an empty string) to disable publishing.
  public topicArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'identity',
        'The identity for which the Amazon SNS topic will be set. You can specify an identity by using its name or by using its Amazon Resource Name (ARN).',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'includeOriginalHeaders',
        'Whether SES should include original email headers in SNS notifications of this type. `false` by default.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'notificationType',
        'The type of notifications that will be published to the specified Amazon SNS topic. Valid Values: `Bounce`, `Complaint` or `Delivery`.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'topicArn',
        'The Amazon Resource Name (ARN) of the Amazon SNS topic. Can be set to `""` (an empty string) to disable publishing.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
