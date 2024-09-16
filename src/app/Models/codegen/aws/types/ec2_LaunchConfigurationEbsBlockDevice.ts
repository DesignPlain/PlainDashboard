import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2_LaunchConfigurationEbsBlockDevice {
  //
  volumeType?: string;

  //
  deviceName?: string;

  //
  iops?: number;

  //
  snapshotId?: string;

  //
  throughput?: number;

  //
  deleteOnTermination?: boolean;

  //
  encrypted?: boolean;

  //
  noDevice?: boolean;

  //
  volumeSize?: number;
}

export function ec2_LaunchConfigurationEbsBlockDevice_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'deviceName',
      '',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(InputType.Number, 'iops', '', () => [], false, true),
    new DynamicUIProps(
      InputType.String,
      'snapshotId',
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
    new DynamicUIProps(InputType.Bool, 'encrypted', '', () => [], false, true),
    new DynamicUIProps(InputType.Bool, 'noDevice', '', () => [], false, true),
    new DynamicUIProps(
      InputType.String,
      'volumeType',
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
      InputType.Number,
      'throughput',
      '',
      () => [],
      false,
      true,
    ),
  ];
}
