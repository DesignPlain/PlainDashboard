import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2_getLaunchTemplateBlockDeviceMappingEb {
  //
  iops?: number;

  //
  kmsKeyId?: string;

  //
  snapshotId?: string;

  //
  throughput?: number;

  //
  volumeSize?: number;

  //
  volumeType?: string;

  //
  deleteOnTermination?: string;

  //
  encrypted?: string;
}

export function ec2_getLaunchTemplateBlockDeviceMappingEb_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'encrypted',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.Number, 'iops', '', () => [], true, false),
    new DynamicUIProps(InputType.String, 'kmsKeyId', '', () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      'snapshotId',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'throughput',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'volumeSize',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'volumeType',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'deleteOnTermination',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
