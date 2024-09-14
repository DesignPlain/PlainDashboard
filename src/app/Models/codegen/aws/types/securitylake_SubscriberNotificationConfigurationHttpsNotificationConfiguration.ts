import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface securitylake_SubscriberNotificationConfigurationHttpsNotificationConfiguration {
  // The API key name for the notification subscription.
  authorizationApiKeyName?: string;

  // The API key value for the notification subscription.
  authorizationApiKeyValue?: string;

  /*
The subscription endpoint in Security Lake.
If you prefer notification with an HTTPS endpoint, populate this field.
*/
  endpoint?: string;

  /*
The HTTP method used for the notification subscription.
Valid values are `POST` and `PUT`.
*/
  httpMethod?: string;

  /*
The Amazon Resource Name (ARN) of the EventBridge API destinations IAM role that you created.
For more information about ARNs and how to use them in policies, see Managing data access and AWS Managed Policies in the Amazon Security Lake User Guide.
*/
  targetRoleArn?: string;
}

export function securitylake_SubscriberNotificationConfigurationHttpsNotificationConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "authorizationApiKeyName",
      "The API key name for the notification subscription.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "authorizationApiKeyValue",
      "The API key value for the notification subscription.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "endpoint",
      "The subscription endpoint in Security Lake.\nIf you prefer notification with an HTTPS endpoint, populate this field.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "httpMethod",
      "The HTTP method used for the notification subscription.\nValid values are `POST` and `PUT`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "targetRoleArn",
      "The Amazon Resource Name (ARN) of the EventBridge API destinations IAM role that you created.\nFor more information about ARNs and how to use them in policies, see Managing data access and AWS Managed Policies in the Amazon Security Lake User Guide.",
      () => [],
      true,
      false,
    ),
  ];
}
