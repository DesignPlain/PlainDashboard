import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudrunv2_JobTemplateTemplateVolumeSecretItem {
  // Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal). If 0 or not set, the Volume's default mode will be used.
  Mode?: number;

  // The relative path of the secret in the container.
  Path?: string;

  // The Cloud Secret Manager secret version. Can be 'latest' for the latest value or an integer for a specific version
  Version?: string;
}

export function Cloudrunv2_JobTemplateTemplateVolumeSecretItem_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Mode",
      "Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal). If 0 or not set, the Volume's default mode will be used.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Path",
      "The relative path of the secret in the container.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Version",
      "The Cloud Secret Manager secret version. Can be 'latest' for the latest value or an integer for a specific version",
      [],
      true,
      false,
    ),
  ];
}
