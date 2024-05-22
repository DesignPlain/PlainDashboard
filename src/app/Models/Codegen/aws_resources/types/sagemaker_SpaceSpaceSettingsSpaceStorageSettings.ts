import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  sagemaker_SpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings,
  sagemaker_SpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings_GetTypes,
} from "./sagemaker_SpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings";

export interface sagemaker_SpaceSpaceSettingsSpaceStorageSettings {
  //
  ebsStorageSettings?: sagemaker_SpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings;
}

export function sagemaker_SpaceSpaceSettingsSpaceStorageSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ebsStorageSettings",
      "",
      sagemaker_SpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings_GetTypes(),
      true,
      false,
    ),
  ];
}
