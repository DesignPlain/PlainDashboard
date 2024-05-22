import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface apprunner_ServiceSourceConfigurationAuthenticationConfiguration {
  // ARN of the IAM role that grants the App Runner service access to a source repository. Required for ECR image repositories (but not for ECR Public)
  accessRoleArn?: string;

  // ARN of the App Runner connection that enables the App Runner service to connect to a source repository. Required for GitHub code repositories.
  connectionArn?: string;
}

export function apprunner_ServiceSourceConfigurationAuthenticationConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "accessRoleArn",
      "ARN of the IAM role that grants the App Runner service access to a source repository. Required for ECR image repositories (but not for ECR Public)",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "connectionArn",
      "ARN of the App Runner connection that enables the App Runner service to connect to a source repository. Required for GitHub code repositories.",
      [],
      false,
      false,
    ),
  ];
}
