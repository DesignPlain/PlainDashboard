import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cognito_ManagedUserPoolClientAnalyticsConfiguration {
  // Unique identifier for an Amazon Pinpoint application.
  applicationId?: string;

  // ID for the Analytics Configuration and conflicts with `application_arn`.
  externalId?: string;

  // ARN of an IAM role that authorizes Amazon Cognito to publish events to Amazon Pinpoint analytics. It conflicts with `application_arn`.
  roleArn?: string;

  // If `user_data_shared` is set to `true`, Amazon Cognito will include user data in the events it publishes to Amazon Pinpoint analytics.
  userDataShared?: boolean;

  // Application ARN for an Amazon Pinpoint application. It conflicts with `external_id` and `role_arn`.
  applicationArn?: string;
}

export function cognito_ManagedUserPoolClientAnalyticsConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "externalId",
      "ID for the Analytics Configuration and conflicts with `application_arn`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "ARN of an IAM role that authorizes Amazon Cognito to publish events to Amazon Pinpoint analytics. It conflicts with `application_arn`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "userDataShared",
      "If `user_data_shared` is set to `true`, Amazon Cognito will include user data in the events it publishes to Amazon Pinpoint analytics.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "applicationArn",
      "Application ARN for an Amazon Pinpoint application. It conflicts with `external_id` and `role_arn`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "applicationId",
      "Unique identifier for an Amazon Pinpoint application.",
      [],
      false,
      false,
    ),
  ];
}
