import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ec2_getLaunchTemplateBlockDeviceMappingEb,
  ec2_getLaunchTemplateBlockDeviceMappingEb_GetTypes,
} from './ec2_getLaunchTemplateBlockDeviceMappingEb';

export interface ec2_getLaunchTemplateBlockDeviceMapping {
  //
  deviceName?: string;

  //
  ebs?: Array<ec2_getLaunchTemplateBlockDeviceMappingEb>;

  //
  noDevice?: string;

  //
  virtualName?: string;
}

export function ec2_getLaunchTemplateBlockDeviceMapping_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'ebs',
      '',
      () => ec2_getLaunchTemplateBlockDeviceMappingEb_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'noDevice', '', () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      'virtualName',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'deviceName',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
