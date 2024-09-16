import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface iot_TopicRuleKafkaHeader {
  // The key of the Kafka header.
  key?: string;

  // The value of the Kafka header.
  value?: string;
}

export function iot_TopicRuleKafkaHeader_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'key',
      'The key of the Kafka header.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'value',
      'The value of the Kafka header.',
      () => [],
      true,
      false,
    ),
  ];
}
