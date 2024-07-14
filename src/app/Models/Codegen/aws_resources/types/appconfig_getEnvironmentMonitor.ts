import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appconfig_getEnvironmentMonitor {
  // ARN of the Amazon CloudWatch alarm.
  alarmArn?: string;

  // ARN of an IAM role for AWS AppConfig to monitor.
  alarmRoleArn?: string;
}

export function appconfig_getEnvironmentMonitor_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "alarmRoleArn",
      "ARN of an IAM role for AWS AppConfig to monitor.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "alarmArn",
      "ARN of the Amazon CloudWatch alarm.",
      [],
      true,
      false,
    ),
  ];
}
