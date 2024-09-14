import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface sagemaker_SpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings {
  // The size of an EBS storage volume for a space.
  ebsVolumeSizeInGb?: number;
}

export function sagemaker_SpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "ebsVolumeSizeInGb",
      "The size of an EBS storage volume for a space.",
      () => [],
      true,
      false,
    ),
  ];
}
