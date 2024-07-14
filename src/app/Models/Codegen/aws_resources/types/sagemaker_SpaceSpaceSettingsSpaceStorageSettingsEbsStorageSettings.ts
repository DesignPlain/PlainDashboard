import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sagemaker_SpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings {
  //
  ebsVolumeSizeInGb?: number;
}

export function sagemaker_SpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "ebsVolumeSizeInGb",
      "",
      [],
      true,
      false,
    ),
  ];
}
