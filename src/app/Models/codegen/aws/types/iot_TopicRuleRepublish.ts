import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface iot_TopicRuleRepublish {
  // The ARN of the IAM role that grants access.
  roleArn?: string;

  // The name of the MQTT topic the message should be republished to.
  topic?: string;

  // The Quality of Service (QoS) level to use when republishing messages. Valid values are 0 or 1. The default value is 0.
  qos?: number;
}

export function iot_TopicRuleRepublish_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'roleArn',
      'The ARN of the IAM role that grants access.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'topic',
      'The name of the MQTT topic the message should be republished to.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'qos',
      'The Quality of Service (QoS) level to use when republishing messages. Valid values are 0 or 1. The default value is 0.',
      () => [],
      false,
      false,
    ),
  ];
}
