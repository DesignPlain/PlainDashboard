import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudrunv2_getJobTemplateTemplateVolumeSecretItem {
  // Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal). If 0 or not set, the Volume's default mode will be used.
  mode?: number;

  // The relative path of the secret in the container.
  path?: string;

  // The Cloud Secret Manager secret version. Can be 'latest' for the latest value or an integer for a specific version
  version?: string;
}

export function cloudrunv2_getJobTemplateTemplateVolumeSecretItem_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "mode",
      "Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal). If 0 or not set, the Volume's default mode will be used.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "path",
      "The relative path of the secret in the container.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "version",
      "The Cloud Secret Manager secret version. Can be 'latest' for the latest value or an integer for a specific version",
      [],
      true,
      false,
    ),
  ];
}
