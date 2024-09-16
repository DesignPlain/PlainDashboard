import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2_SpotFleetRequestLaunchSpecificationRootBlockDevice {
  //
  kmsKeyId?: string;

  //
  throughput?: number;

  //
  volumeSize?: number;

  //
  volumeType?: string;

  //
  deleteOnTermination?: boolean;

  //
  encrypted?: boolean;

  //
  iops?: number;
}

export function ec2_SpotFleetRequestLaunchSpecificationRootBlockDevice_GetTypes(): DynamicUIProps[] {
  return [
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
    new DynamicUIProps(InputType.Bool, 'encrypted', '', () => [], false, true),
    new DynamicUIProps(InputType.Number, 'iops', '', () => [], false, true),
    new DynamicUIProps(InputType.String, 'kmsKeyId', '', () => [], false, true),
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
