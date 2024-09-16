import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface opsworks_InstanceRootBlockDevice {
  //
  deleteOnTermination?: boolean;

  //
  iops?: number;

  //
  volumeSize?: number;

  //
  volumeType?: string;
}

export function opsworks_InstanceRootBlockDevice_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, 'iops', '', () => [], false, true),
    new DynamicUIProps(
      InputType.Number,
      'volumeSize',
      '',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'volumeType',
      '',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'deleteOnTermination',
      '',
      () => [],
      false,
      true,
    ),
  ];
}
