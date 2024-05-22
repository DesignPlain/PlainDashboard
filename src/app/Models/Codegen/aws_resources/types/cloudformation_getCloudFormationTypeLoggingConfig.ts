import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudformation_getCloudFormationTypeLoggingConfig {
  // Name of the CloudWatch Log Group where CloudFormation sends error logging information when invoking the type's handlers.
  logGroupName?: string;

  // ARN of the IAM Role CloudFormation assumes when sending error logging information to CloudWatch Logs.
  logRoleArn?: string;
}

export function cloudformation_getCloudFormationTypeLoggingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "logGroupName",
      "Name of the CloudWatch Log Group where CloudFormation sends error logging information when invoking the type's handlers.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "logRoleArn",
      "ARN of the IAM Role CloudFormation assumes when sending error logging information to CloudWatch Logs.",
      [],
      true,
      false,
    ),
  ];
}
