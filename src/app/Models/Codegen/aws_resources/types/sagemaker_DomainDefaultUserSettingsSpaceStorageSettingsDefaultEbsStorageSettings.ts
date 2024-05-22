import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface sagemaker_DomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings {
  // The default size of the EBS storage volume for a private space.
  defaultEbsVolumeSizeInGb?: number;

  // The maximum size of the EBS storage volume for a private space.
  maximumEbsVolumeSizeInGb?: number;
}

export function sagemaker_DomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "defaultEbsVolumeSizeInGb",
      "The default size of the EBS storage volume for a private space.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maximumEbsVolumeSizeInGb",
      "The maximum size of the EBS storage volume for a private space.",
      [],
      true,
      false,
    ),
  ];
}
