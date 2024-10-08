import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface pubsub_getSubscriptionCloudStorageConfigAvroConfig {
  // When true, write the subscription name, messageId, publishTime, attributes, and orderingKey as additional fields in the output.
  writeMetadata?: boolean;
}

export function pubsub_getSubscriptionCloudStorageConfigAvroConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'writeMetadata',
      'When true, write the subscription name, messageId, publishTime, attributes, and orderingKey as additional fields in the output.',
      () => [],
      true,
      false,
    ),
  ];
}
