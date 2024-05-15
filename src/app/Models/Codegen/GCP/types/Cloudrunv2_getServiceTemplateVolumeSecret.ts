import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrunv2_getServiceTemplateVolumeSecretItem,
  Cloudrunv2_getServiceTemplateVolumeSecretItem_GetTypes,
} from "./Cloudrunv2_getServiceTemplateVolumeSecretItem";

export interface Cloudrunv2_getServiceTemplateVolumeSecret {
  // Integer representation of mode bits to use on created files by default. Must be a value between 0000 and 0777 (octal), defaulting to 0444. Directories within the path are not affected by this setting.
  DefaultMode?: number;

  // If unspecified, the volume will expose a file whose name is the secret, relative to VolumeMount.mount_path. If specified, the key will be used as the version to fetch from Cloud Secret Manager and the path will be the name of the file exposed in the volume. When items are defined, they must specify a path and a version.
  Items?: Array<Cloudrunv2_getServiceTemplateVolumeSecretItem>;

  // The name of the secret in Cloud Secret Manager. Format: {secret} if the secret is in the same project. projects/{project}/secrets/{secret} if the secret is in a different project.
  Secret?: string;
}

export function Cloudrunv2_getServiceTemplateVolumeSecret_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "DefaultMode",
      "Integer representation of mode bits to use on created files by default. Must be a value between 0000 and 0777 (octal), defaulting to 0444. Directories within the path are not affected by this setting.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Items",
      "If unspecified, the volume will expose a file whose name is the secret, relative to VolumeMount.mount_path. If specified, the key will be used as the version to fetch from Cloud Secret Manager and the path will be the name of the file exposed in the volume. When items are defined, they must specify a path and a version.",
      Cloudrunv2_getServiceTemplateVolumeSecretItem_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Secret",
      "The name of the secret in Cloud Secret Manager. Format: {secret} if the secret is in the same project. projects/{project}/secrets/{secret} if the secret is in a different project.",
      [],
      true,
      false,
    ),
  ];
}
