import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cognito_getUserPoolClientAnalyticsConfiguration {
  // (Optional) ID for the Analytics Configuration. Conflicts with `application_arn`.
  externalId?: string;

  // (Optional) ARN of an IAM role that authorizes Amazon Cognito to publish events to Amazon Pinpoint analytics. Conflicts with `application_arn`.
  roleArn?: string;

  // (Optional) If set to `true`, Amazon Cognito will include user data in the events it publishes to Amazon Pinpoint analytics.
  userDataShared?: boolean;

  // (Optional) Application ARN for an Amazon Pinpoint application. Conflicts with `external_id` and `role_arn`.
  applicationArn?: string;

  // (Optional) Application ID for an Amazon Pinpoint application.
  applicationId?: string;
}

export function cognito_getUserPoolClientAnalyticsConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "externalId",
      "(Optional) ID for the Analytics Configuration. Conflicts with `application_arn`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "(Optional) ARN of an IAM role that authorizes Amazon Cognito to publish events to Amazon Pinpoint analytics. Conflicts with `application_arn`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "userDataShared",
      "(Optional) If set to `true`, Amazon Cognito will include user data in the events it publishes to Amazon Pinpoint analytics.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "applicationArn",
      "(Optional) Application ARN for an Amazon Pinpoint application. Conflicts with `external_id` and `role_arn`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "applicationId",
      "(Optional) Application ID for an Amazon Pinpoint application.",
      [],
      true,
      false,
    ),
  ];
}
