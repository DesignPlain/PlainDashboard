import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ecs_ServiceVolumeConfigurationManagedEbsVolume,
  ecs_ServiceVolumeConfigurationManagedEbsVolume_GetTypes,
} from "./ecs_ServiceVolumeConfigurationManagedEbsVolume";

export interface ecs_ServiceVolumeConfiguration {
  // Configuration for the Amazon EBS volume that Amazon ECS creates and manages on your behalf. See below.
  managedEbsVolume?: ecs_ServiceVolumeConfigurationManagedEbsVolume;

  // Name of the volume.
  name?: string;
}

export function ecs_ServiceVolumeConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "managedEbsVolume",
      "Configuration for the Amazon EBS volume that Amazon ECS creates and manages on your behalf. See below.",
      () => ecs_ServiceVolumeConfigurationManagedEbsVolume_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the volume.",
      () => [],
      true,
      false,
    ),
  ];
}
