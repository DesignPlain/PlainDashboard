import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface connect_InstanceStorageConfigStorageConfigKinesisStreamConfig {
  // The Amazon Resource Name (ARN) of the data stream.
  streamArn?: string;
}

export function connect_InstanceStorageConfigStorageConfigKinesisStreamConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'streamArn',
      'The Amazon Resource Name (ARN) of the data stream.',
      () => [],
      true,
      false,
    ),
  ];
}
