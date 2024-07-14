import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  imagebuilder_ContainerRecipeInstanceConfigurationBlockDeviceMapping,
  imagebuilder_ContainerRecipeInstanceConfigurationBlockDeviceMapping_GetTypes,
} from "./imagebuilder_ContainerRecipeInstanceConfigurationBlockDeviceMapping";

export interface imagebuilder_ContainerRecipeInstanceConfiguration {
  // The AMI ID to use as the base image for a container build and test instance. If not specified, Image Builder will use the appropriate ECS-optimized AMI as a base image.
  image?: string;

  // Configuration block(s) with block device mappings for the container recipe. Detailed below.
  blockDeviceMappings?: Array<imagebuilder_ContainerRecipeInstanceConfigurationBlockDeviceMapping>;
}

export function imagebuilder_ContainerRecipeInstanceConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "image",
      "The AMI ID to use as the base image for a container build and test instance. If not specified, Image Builder will use the appropriate ECS-optimized AMI as a base image.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "blockDeviceMappings",
      "Configuration block(s) with block device mappings for the container recipe. Detailed below.",
      imagebuilder_ContainerRecipeInstanceConfigurationBlockDeviceMapping_GetTypes(),
      false,
      true,
    ),
  ];
}
