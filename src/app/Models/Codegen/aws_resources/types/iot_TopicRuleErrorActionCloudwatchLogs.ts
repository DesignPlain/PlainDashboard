import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface iot_TopicRuleErrorActionCloudwatchLogs {
  // The IAM role ARN that allows access to the CloudWatch alarm.
  roleArn?: string;

  // The CloudWatch log group name.
  logGroupName?: string;
}

export function iot_TopicRuleErrorActionCloudwatchLogs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "The IAM role ARN that allows access to the CloudWatch alarm.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "logGroupName",
      "The CloudWatch log group name.",
      [],
      true,
      false,
    ),
  ];
}
