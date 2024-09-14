import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudformation_CloudFormationTypeLoggingConfig {
  // Name of the CloudWatch Log Group where CloudFormation sends error logging information when invoking the type's handlers.
  logGroupName?: string;

  // Amazon Resource Name (ARN) of the IAM Role CloudFormation assumes when sending error logging information to CloudWatch Logs.
  logRoleArn?: string;
}

export function cloudformation_CloudFormationTypeLoggingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "logGroupName",
      "Name of the CloudWatch Log Group where CloudFormation sends error logging information when invoking the type's handlers.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "logRoleArn",
      "Amazon Resource Name (ARN) of the IAM Role CloudFormation assumes when sending error logging information to CloudWatch Logs.",
      () => [],
      true,
      true,
    ),
  ];
}
