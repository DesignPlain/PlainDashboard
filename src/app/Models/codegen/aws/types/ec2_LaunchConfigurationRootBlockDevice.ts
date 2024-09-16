import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2_LaunchConfigurationRootBlockDevice {
  //
  deleteOnTermination?: boolean;

  //
  encrypted?: boolean;

  //
  iops?: number;

  //
  throughput?: number;

  //
  volumeSize?: number;

  //
  volumeType?: string;
}

export function ec2_LaunchConfigurationRootBlockDevice_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'deleteOnTermination',
      '',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(InputType.Bool, 'encrypted', '', () => [], false, true),
    new DynamicUIProps(InputType.Number, 'iops', '', () => [], false, true),
    new DynamicUIProps(
      InputType.Number,
      'throughput',
      '',
      () => [],
      false,
      true,
    ),
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
  ];
}
