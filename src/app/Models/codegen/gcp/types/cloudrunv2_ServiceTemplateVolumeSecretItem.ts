import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudrunv2_ServiceTemplateVolumeSecretItem {
  // The relative path of the secret in the container.
  path?: string;

  // The Cloud Secret Manager secret version. Can be 'latest' for the latest value or an integer for a specific version
  version?: string;

  // Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal). If 0 or not set, the Volume's default mode will be used.
  mode?: number;
}

export function cloudrunv2_ServiceTemplateVolumeSecretItem_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'path',
      'The relative path of the secret in the container.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'version',
      "The Cloud Secret Manager secret version. Can be 'latest' for the latest value or an integer for a specific version",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'mode',
      "Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal). If 0 or not set, the Volume's default mode will be used.",
      () => [],
      false,
      false,
    ),
  ];
}
