import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudrun_ServiceTemplateSpecVolumeSecretItem,
  cloudrun_ServiceTemplateSpecVolumeSecretItem_GetTypes,
} from "./cloudrun_ServiceTemplateSpecVolumeSecretItem";

export interface cloudrun_ServiceTemplateSpecVolumeSecret {
  /*
Mode bits to use on created files by default. Must be a value between 0000
and 0777. Defaults to 0644. Directories within the path are not affected by
this setting. This might be in conflict with other options that affect the
file mode, like fsGroup, and the result can be other mode bits set.
*/
  defaultMode?: number;

  /*
If unspecified, the volume will expose a file whose name is the
secret_name.
If specified, the key will be used as the version to fetch from Cloud
Secret Manager and the path will be the name of the file exposed in the
volume. When items are defined, they must specify a key and a path.
Structure is documented below.
*/
  items?: Array<cloudrun_ServiceTemplateSpecVolumeSecretItem>;

  /*
The name of the secret in Cloud Secret Manager. By default, the secret
is assumed to be in the same project.
If the secret is in another project, you must define an alias.
An alias definition has the form:
{alias}:projects/{project-id|project-number}/secrets/{secret-name}.
If multiple alias definitions are needed, they must be separated by
commas.
The alias definitions must be set on the run.googleapis.com/secrets
annotation.
*/
  secretName?: string;
}

export function cloudrun_ServiceTemplateSpecVolumeSecret_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "defaultMode",
      "Mode bits to use on created files by default. Must be a value between 0000\nand 0777. Defaults to 0644. Directories within the path are not affected by\nthis setting. This might be in conflict with other options that affect the\nfile mode, like fsGroup, and the result can be other mode bits set.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "items",
      "If unspecified, the volume will expose a file whose name is the\nsecret_name.\nIf specified, the key will be used as the version to fetch from Cloud\nSecret Manager and the path will be the name of the file exposed in the\nvolume. When items are defined, they must specify a key and a path.\nStructure is documented below.",
      () => cloudrun_ServiceTemplateSpecVolumeSecretItem_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "secretName",
      "The name of the secret in Cloud Secret Manager. By default, the secret\nis assumed to be in the same project.\nIf the secret is in another project, you must define an alias.\nAn alias definition has the form:\n{alias}:projects/{project-id|project-number}/secrets/{secret-name}.\nIf multiple alias definitions are needed, they must be separated by\ncommas.\nThe alias definitions must be set on the run.googleapis.com/secrets\nannotation.",
      () => [],
      true,
      false,
    ),
  ];
}
