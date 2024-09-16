import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface connect_InstanceStorageConfigStorageConfigKinesisFirehoseConfig {
  // The Amazon Resource Name (ARN) of the delivery stream.
  firehoseArn?: string;
}

export function connect_InstanceStorageConfigStorageConfigKinesisFirehoseConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'firehoseArn',
      'The Amazon Resource Name (ARN) of the delivery stream.',
      () => [],
      true,
      false,
    ),
  ];
}
