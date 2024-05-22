import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface sagemaker_UserProfileUserSettingsCustomPosixUserConfig {
  // The POSIX group ID.
  gid?: number;

  // The POSIX user ID.
  uid?: number;
}

export function sagemaker_UserProfileUserSettingsCustomPosixUserConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "gid",
      "The POSIX group ID.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "uid",
      "The POSIX user ID.",
      [],
      true,
      false,
    ),
  ];
}
