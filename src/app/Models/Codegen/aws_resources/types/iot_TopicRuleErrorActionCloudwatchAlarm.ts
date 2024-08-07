import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface iot_TopicRuleErrorActionCloudwatchAlarm {
  // The IAM role ARN that allows access to the CloudWatch alarm.
  roleArn?: string;

  // The reason for the alarm change.
  stateReason?: string;

  // The value of the alarm state. Acceptable values are: OK, ALARM, INSUFFICIENT_DATA.
  stateValue?: string;

  // The CloudWatch alarm name.
  alarmName?: string;
}

export function iot_TopicRuleErrorActionCloudwatchAlarm_GetTypes(): DynamicUIProps[] {
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
      "stateReason",
      "The reason for the alarm change.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "stateValue",
      "The value of the alarm state. Acceptable values are: OK, ALARM, INSUFFICIENT_DATA.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "alarmName",
      "The CloudWatch alarm name.",
      [],
      true,
      false,
    ),
  ];
}
