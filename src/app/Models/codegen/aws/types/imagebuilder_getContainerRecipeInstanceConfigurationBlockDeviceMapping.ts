import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  imagebuilder_getContainerRecipeInstanceConfigurationBlockDeviceMappingEb,
  imagebuilder_getContainerRecipeInstanceConfigurationBlockDeviceMappingEb_GetTypes,
} from './imagebuilder_getContainerRecipeInstanceConfigurationBlockDeviceMappingEb';

export interface imagebuilder_getContainerRecipeInstanceConfigurationBlockDeviceMapping {
  // Name of the device. For example, `/dev/sda` or `/dev/xvdb`.
  deviceName?: string;

  // Single list of object with Elastic Block Storage (EBS) block device mapping settings.
  ebs?: Array<imagebuilder_getContainerRecipeInstanceConfigurationBlockDeviceMappingEb>;

  // Whether to remove a mapping from the parent image.
  noDevice?: string;

  // Virtual device name. For example, `ephemeral0`. Instance store volumes are numbered starting from 0.
  virtualName?: string;
}

export function imagebuilder_getContainerRecipeInstanceConfigurationBlockDeviceMapping_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'deviceName',
      'Name of the device. For example, `/dev/sda` or `/dev/xvdb`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'ebs',
      'Single list of object with Elastic Block Storage (EBS) block device mapping settings.',
      () =>
        imagebuilder_getContainerRecipeInstanceConfigurationBlockDeviceMappingEb_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'noDevice',
      'Whether to remove a mapping from the parent image.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'virtualName',
      'Virtual device name. For example, `ephemeral0`. Instance store volumes are numbered starting from 0.',
      () => [],
      true,
      false,
    ),
  ];
}
