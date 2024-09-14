import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  imagebuilder_ContainerRecipeInstanceConfigurationBlockDeviceMappingEbs,
  imagebuilder_ContainerRecipeInstanceConfigurationBlockDeviceMappingEbs_GetTypes,
} from "./imagebuilder_ContainerRecipeInstanceConfigurationBlockDeviceMappingEbs";

export interface imagebuilder_ContainerRecipeInstanceConfigurationBlockDeviceMapping {
  // Name of the device. For example, `/dev/sda` or `/dev/xvdb`.
  deviceName?: string;

  // Configuration block with Elastic Block Storage (EBS) block device mapping settings. Detailed below.
  ebs?: imagebuilder_ContainerRecipeInstanceConfigurationBlockDeviceMappingEbs;

  // Set to `true` to remove a mapping from the parent image.
  noDevice?: boolean;

  // Virtual device name. For example, `ephemeral0`. Instance store volumes are numbered starting from 0.
  virtualName?: string;
}

export function imagebuilder_ContainerRecipeInstanceConfigurationBlockDeviceMapping_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "deviceName",
      "Name of the device. For example, `/dev/sda` or `/dev/xvdb`.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ebs",
      "Configuration block with Elastic Block Storage (EBS) block device mapping settings. Detailed below.",
      () =>
        imagebuilder_ContainerRecipeInstanceConfigurationBlockDeviceMappingEbs_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "noDevice",
      "Set to `true` to remove a mapping from the parent image.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "virtualName",
      "Virtual device name. For example, `ephemeral0`. Instance store volumes are numbered starting from 0.",
      () => [],
      false,
      true,
    ),
  ];
}
