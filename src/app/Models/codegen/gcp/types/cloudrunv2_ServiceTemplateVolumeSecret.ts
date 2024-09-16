import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudrunv2_ServiceTemplateVolumeSecretItem,
  cloudrunv2_ServiceTemplateVolumeSecretItem_GetTypes,
} from './cloudrunv2_ServiceTemplateVolumeSecretItem';

export interface cloudrunv2_ServiceTemplateVolumeSecret {
  // The name of the secret in Cloud Secret Manager. Format: {secret} if the secret is in the same project. projects/{project}/secrets/{secret} if the secret is in a different project.
  secret?: string;

  // Integer representation of mode bits to use on created files by default. Must be a value between 0000 and 0777 (octal), defaulting to 0444. Directories within the path are not affected by this setting.
  defaultMode?: number;

  /*
If unspecified, the volume will expose a file whose name is the secret, relative to VolumeMount.mount_path. If specified, the key will be used as the version to fetch from Cloud Secret Manager and the path will be the name of the file exposed in the volume. When items are defined, they must specify a path and a version.
Structure is documented below.
*/
  items?: Array<cloudrunv2_ServiceTemplateVolumeSecretItem>;
}

export function cloudrunv2_ServiceTemplateVolumeSecret_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'secret',
      'The name of the secret in Cloud Secret Manager. Format: {secret} if the secret is in the same project. projects/{project}/secrets/{secret} if the secret is in a different project.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'defaultMode',
      'Integer representation of mode bits to use on created files by default. Must be a value between 0000 and 0777 (octal), defaulting to 0444. Directories within the path are not affected by this setting.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'items',
      'If unspecified, the volume will expose a file whose name is the secret, relative to VolumeMount.mount_path. If specified, the key will be used as the version to fetch from Cloud Secret Manager and the path will be the name of the file exposed in the volume. When items are defined, they must specify a path and a version.\nStructure is documented below.',
      () => cloudrunv2_ServiceTemplateVolumeSecretItem_GetTypes(),
      false,
      false,
    ),
  ];
}
