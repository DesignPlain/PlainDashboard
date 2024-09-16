import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface PlatformApplicationArgs {
  // The bundle identifier that's assigned to your iOS app. May only include alphanumeric characters, hyphens (-), and periods (.).
  applePlatformBundleId?: string;

  // The ARN of the SNS Topic triggered when a new platform endpoint is added to your platform application.
  eventEndpointCreatedTopicArn?: string;

  // The ARN of the SNS Topic triggered when an existing platform endpoint is deleted from your platform application.
  eventEndpointDeletedTopicArn?: string;

  // The friendly name for the SNS platform application
  name?: string;

  // The IAM role ARN permitted to receive success feedback for this application and give SNS write access to use CloudWatch logs on your behalf.
  successFeedbackRoleArn?: string;

  // The identifier that's assigned to your Apple developer account team. Must be 10 alphanumeric characters.
  applePlatformTeamId?: string;

  // The ARN of the SNS Topic triggered when a delivery to any of the platform endpoints associated with your platform application encounters a permanent failure.
  eventDeliveryFailureTopicArn?: string;

  // The ARN of the SNS Topic triggered when an existing platform endpoint is changed from your platform application.
  eventEndpointUpdatedTopicArn?: string;

  // The IAM role ARN permitted to receive failure feedback for this application and give SNS write access to use CloudWatch logs on your behalf.
  failureFeedbackRoleArn?: string;

  // The platform that the app is registered with. See [Platform](http://docs.aws.amazon.com/sns/latest/dg/mobile-push-send-register.html) for supported platforms.
  platform?: string;

  // Application Platform credential. See [Credential](http://docs.aws.amazon.com/sns/latest/dg/mobile-push-send-register.html) for type of credential required for platform. The value of this attribute when stored into the state is only a hash of the real value, so therefore it is not practical to use this as an attribute for other resources.
  platformCredential?: string;

  // Application Platform principal. See [Principal](http://docs.aws.amazon.com/sns/latest/api/API_CreatePlatformApplication.html) for type of principal required for platform. The value of this attribute when stored into the state is only a hash of the real value, so therefore it is not practical to use this as an attribute for other resources.
  platformPrincipal?: string;

  /*
The sample rate percentage (0-100) of successfully delivered messages.

The following attributes are needed only when using APNS token credentials:
*/
  successFeedbackSampleRate?: string;
}
export class PlatformApplication extends DS_Resource {
  // The identifier that's assigned to your Apple developer account team. Must be 10 alphanumeric characters.
  public applePlatformTeamId?: string;

  // The ARN of the SNS Topic triggered when a delivery to any of the platform endpoints associated with your platform application encounters a permanent failure.
  public eventDeliveryFailureTopicArn?: string;

  // The ARN of the SNS Topic triggered when an existing platform endpoint is changed from your platform application.
  public eventEndpointUpdatedTopicArn?: string;

  // The IAM role ARN permitted to receive success feedback for this application and give SNS write access to use CloudWatch logs on your behalf.
  public successFeedbackRoleArn?: string;

  // The ARN of the SNS Topic triggered when an existing platform endpoint is deleted from your platform application.
  public eventEndpointDeletedTopicArn?: string;

  // The friendly name for the SNS platform application
  public name?: string;

  // The platform that the app is registered with. See [Platform](http://docs.aws.amazon.com/sns/latest/dg/mobile-push-send-register.html) for supported platforms.
  public platform?: string;

  // Application Platform principal. See [Principal](http://docs.aws.amazon.com/sns/latest/api/API_CreatePlatformApplication.html) for type of principal required for platform. The value of this attribute when stored into the state is only a hash of the real value, so therefore it is not practical to use this as an attribute for other resources.
  public platformPrincipal?: string;

  // The ARN of the SNS platform application
  public arn?: string;

  // The IAM role ARN permitted to receive failure feedback for this application and give SNS write access to use CloudWatch logs on your behalf.
  public failureFeedbackRoleArn?: string;

  // The bundle identifier that's assigned to your iOS app. May only include alphanumeric characters, hyphens (-), and periods (.).
  public applePlatformBundleId?: string;

  // The ARN of the SNS Topic triggered when a new platform endpoint is added to your platform application.
  public eventEndpointCreatedTopicArn?: string;

  // Application Platform credential. See [Credential](http://docs.aws.amazon.com/sns/latest/dg/mobile-push-send-register.html) for type of credential required for platform. The value of this attribute when stored into the state is only a hash of the real value, so therefore it is not practical to use this as an attribute for other resources.
  public platformCredential?: string;

  /*
The sample rate percentage (0-100) of successfully delivered messages.

The following attributes are needed only when using APNS token credentials:
*/
  public successFeedbackSampleRate?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'eventEndpointDeletedTopicArn',
        'The ARN of the SNS Topic triggered when an existing platform endpoint is deleted from your platform application.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'applePlatformTeamId',
        "The identifier that's assigned to your Apple developer account team. Must be 10 alphanumeric characters.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'failureFeedbackRoleArn',
        'The IAM role ARN permitted to receive failure feedback for this application and give SNS write access to use CloudWatch logs on your behalf.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'platform',
        'The platform that the app is registered with. See [Platform](http://docs.aws.amazon.com/sns/latest/dg/mobile-push-send-register.html) for supported platforms.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'platformCredential',
        'Application Platform credential. See [Credential](http://docs.aws.amazon.com/sns/latest/dg/mobile-push-send-register.html) for type of credential required for platform. The value of this attribute when stored into the state is only a hash of the real value, so therefore it is not practical to use this as an attribute for other resources.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'platformPrincipal',
        'Application Platform principal. See [Principal](http://docs.aws.amazon.com/sns/latest/api/API_CreatePlatformApplication.html) for type of principal required for platform. The value of this attribute when stored into the state is only a hash of the real value, so therefore it is not practical to use this as an attribute for other resources.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'applePlatformBundleId',
        "The bundle identifier that's assigned to your iOS app. May only include alphanumeric characters, hyphens (-), and periods (.).",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The friendly name for the SNS platform application',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'successFeedbackRoleArn',
        'The IAM role ARN permitted to receive success feedback for this application and give SNS write access to use CloudWatch logs on your behalf.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'eventDeliveryFailureTopicArn',
        'The ARN of the SNS Topic triggered when a delivery to any of the platform endpoints associated with your platform application encounters a permanent failure.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'eventEndpointUpdatedTopicArn',
        'The ARN of the SNS Topic triggered when an existing platform endpoint is changed from your platform application.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'successFeedbackSampleRate',
        'The sample rate percentage (0-100) of successfully delivered messages.\n\nThe following attributes are needed only when using APNS token credentials:',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'eventEndpointCreatedTopicArn',
        'The ARN of the SNS Topic triggered when a new platform endpoint is added to your platform application.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
