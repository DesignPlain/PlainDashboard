import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  m2_EnvironmentStorageConfigurationEfs,
  m2_EnvironmentStorageConfigurationEfs_GetTypes,
} from "./m2_EnvironmentStorageConfigurationEfs";
import {
  m2_EnvironmentStorageConfigurationFsx,
  m2_EnvironmentStorageConfigurationFsx_GetTypes,
} from "./m2_EnvironmentStorageConfigurationFsx";

export interface m2_EnvironmentStorageConfiguration {
  //
  efs?: m2_EnvironmentStorageConfigurationEfs;

  //
  fsx?: m2_EnvironmentStorageConfigurationFsx;
}

export function m2_EnvironmentStorageConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "fsx",
      "",
      () => m2_EnvironmentStorageConfigurationFsx_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "efs",
      "",
      () => m2_EnvironmentStorageConfigurationEfs_GetTypes(),
      false,
      false,
    ),
  ];
}
