import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appconfig_EnvironmentMonitor {
  // ARN of the Amazon CloudWatch alarm.
  alarmArn?: string;

  // ARN of an IAM role for AWS AppConfig to monitor `alarm_arn`.
  alarmRoleArn?: string;
}

export function appconfig_EnvironmentMonitor_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "alarmArn",
      "ARN of the Amazon CloudWatch alarm.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "alarmRoleArn",
      "ARN of an IAM role for AWS AppConfig to monitor `alarm_arn`.",
      [],
      false,
      false,
    ),
  ];
}
