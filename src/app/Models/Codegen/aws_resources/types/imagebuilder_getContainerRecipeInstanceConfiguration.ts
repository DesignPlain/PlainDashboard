import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  imagebuilder_getContainerRecipeInstanceConfigurationBlockDeviceMapping,
  imagebuilder_getContainerRecipeInstanceConfigurationBlockDeviceMapping_GetTypes,
} from "./imagebuilder_getContainerRecipeInstanceConfigurationBlockDeviceMapping";

export interface imagebuilder_getContainerRecipeInstanceConfiguration {
  // Set of objects with block device mappings for the instance configuration.
  blockDeviceMappings?: Array<imagebuilder_getContainerRecipeInstanceConfigurationBlockDeviceMapping>;

  // AMI ID of the base image for container build and test instance.
  image?: string;
}

export function imagebuilder_getContainerRecipeInstanceConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "blockDeviceMappings",
      "Set of objects with block device mappings for the instance configuration.",
      imagebuilder_getContainerRecipeInstanceConfigurationBlockDeviceMapping_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "image",
      "AMI ID of the base image for container build and test instance.",
      [],
      true,
      false,
    ),
  ];
}
