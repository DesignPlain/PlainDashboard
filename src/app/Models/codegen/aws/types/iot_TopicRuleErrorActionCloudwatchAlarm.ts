import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface iot_TopicRuleErrorActionCloudwatchAlarm {
  // The CloudWatch alarm name.
  alarmName?: string;

  // The IAM role ARN that allows access to the CloudWatch alarm.
  roleArn?: string;

  // The reason for the alarm change.
  stateReason?: string;

  // The value of the alarm state. Acceptable values are: OK, ALARM, INSUFFICIENT_DATA.
  stateValue?: string;
}

export function iot_TopicRuleErrorActionCloudwatchAlarm_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'stateValue',
      'The value of the alarm state. Acceptable values are: OK, ALARM, INSUFFICIENT_DATA.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'alarmName',
      'The CloudWatch alarm name.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'roleArn',
      'The IAM role ARN that allows access to the CloudWatch alarm.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'stateReason',
      'The reason for the alarm change.',
      () => [],
      true,
      false,
    ),
  ];
}
