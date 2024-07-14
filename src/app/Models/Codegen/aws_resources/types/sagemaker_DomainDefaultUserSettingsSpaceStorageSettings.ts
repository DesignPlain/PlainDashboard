import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  sagemaker_DomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings,
  sagemaker_DomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings_GetTypes,
} from "./sagemaker_DomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings";

export interface sagemaker_DomainDefaultUserSettingsSpaceStorageSettings {
  // The default EBS storage settings for a private space. See `default_ebs_storage_settings` Block below.
  defaultEbsStorageSettings?: sagemaker_DomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings;
}

export function sagemaker_DomainDefaultUserSettingsSpaceStorageSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "defaultEbsStorageSettings",
      "The default EBS storage settings for a private space. See `default_ebs_storage_settings` Block below.",
      sagemaker_DomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
