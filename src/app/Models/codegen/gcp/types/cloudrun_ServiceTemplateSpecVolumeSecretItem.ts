import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudrun_ServiceTemplateSpecVolumeSecretItem {
  /*
The relative path of the file to map the key to.
May not be an absolute path.
May not contain the path element '..'.
May not start with the string '..'.
*/
  path?: string;

  /*
The Cloud Secret Manager secret version.
Can be 'latest' for the latest value or an integer for a specific version.
*/
  key?: string;

  /*
Mode bits to use on this file, must be a value between 0000 and 0777. If
not specified, the volume defaultMode will be used. This might be in
conflict with other options that affect the file mode, like fsGroup, and
the result can be other mode bits set.
*/
  mode?: number;
}

export function cloudrun_ServiceTemplateSpecVolumeSecretItem_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'key',
      "The Cloud Secret Manager secret version.\nCan be 'latest' for the latest value or an integer for a specific version.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'mode',
      'Mode bits to use on this file, must be a value between 0000 and 0777. If\nnot specified, the volume defaultMode will be used. This might be in\nconflict with other options that affect the file mode, like fsGroup, and\nthe result can be other mode bits set.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'path',
      "The relative path of the file to map the key to.\nMay not be an absolute path.\nMay not contain the path element '..'.\nMay not start with the string '..'.",
      () => [],
      true,
      false,
    ),
  ];
}
