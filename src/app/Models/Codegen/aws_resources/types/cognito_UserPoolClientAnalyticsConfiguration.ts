import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cognito_UserPoolClientAnalyticsConfiguration {
  // ARN of an IAM role that authorizes Amazon Cognito to publish events to Amazon Pinpoint analytics. Conflicts with `application_arn`.
  roleArn?: string;

  // If set to `true`, Amazon Cognito will include user data in the events it publishes to Amazon Pinpoint analytics.
  userDataShared?: boolean;

  // Application ARN for an Amazon Pinpoint application. Conflicts with `external_id` and `role_arn`.
  applicationArn?: string;

  // Application ID for an Amazon Pinpoint application.
  applicationId?: string;

  // ID for the Analytics Configuration. Conflicts with `application_arn`.
  externalId?: string;
}

export function cognito_UserPoolClientAnalyticsConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "applicationId",
      "Application ID for an Amazon Pinpoint application.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "externalId",
      "ID for the Analytics Configuration. Conflicts with `application_arn`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "ARN of an IAM role that authorizes Amazon Cognito to publish events to Amazon Pinpoint analytics. Conflicts with `application_arn`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "userDataShared",
      "If set to `true`, Amazon Cognito will include user data in the events it publishes to Amazon Pinpoint analytics.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "applicationArn",
      "Application ARN for an Amazon Pinpoint application. Conflicts with `external_id` and `role_arn`.",
      [],
      false,
      false,
    ),
  ];
}
