import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  imagebuilder_ImageRecipeBlockDeviceMappingEbs,
  imagebuilder_ImageRecipeBlockDeviceMappingEbs_GetTypes,
} from "./imagebuilder_ImageRecipeBlockDeviceMappingEbs";

export interface imagebuilder_ImageRecipeBlockDeviceMapping {
  // Configuration block with Elastic Block Storage (EBS) block device mapping settings. Detailed below.
  ebs?: imagebuilder_ImageRecipeBlockDeviceMappingEbs;

  // Set to `true` to remove a mapping from the parent image.
  noDevice?: boolean;

  // Virtual device name. For example, `ephemeral0`. Instance store volumes are numbered starting from 0.
  virtualName?: string;

  // Name of the device. For example, `/dev/sda` or `/dev/xvdb`.
  deviceName?: string;
}

export function imagebuilder_ImageRecipeBlockDeviceMapping_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ebs",
      "Configuration block with Elastic Block Storage (EBS) block device mapping settings. Detailed below.",
      imagebuilder_ImageRecipeBlockDeviceMappingEbs_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "noDevice",
      "Set to `true` to remove a mapping from the parent image.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "virtualName",
      "Virtual device name. For example, `ephemeral0`. Instance store volumes are numbered starting from 0.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "deviceName",
      "Name of the device. For example, `/dev/sda` or `/dev/xvdb`.",
      [],
      false,
      true,
    ),
  ];
}
