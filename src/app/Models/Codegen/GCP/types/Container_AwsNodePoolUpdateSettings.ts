import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_AwsNodePoolUpdateSettingsSurgeSettings,
  Container_AwsNodePoolUpdateSettingsSurgeSettings_GetTypes,
} from "./Container_AwsNodePoolUpdateSettingsSurgeSettings";

export interface Container_AwsNodePoolUpdateSettings {
  // Optional. Settings for surge update.
  SurgeSettings?: Container_AwsNodePoolUpdateSettingsSurgeSettings;
}

export function Container_AwsNodePoolUpdateSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "SurgeSettings",
      "Optional. Settings for surge update.",
      Container_AwsNodePoolUpdateSettingsSurgeSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
