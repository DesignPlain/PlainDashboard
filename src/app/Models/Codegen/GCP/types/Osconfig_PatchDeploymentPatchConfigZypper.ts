import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Osconfig_PatchDeploymentPatchConfigZypper {
  // Install only patches with these severities. Common severities include critical, important, moderate, and low.
  Severities?: Array<string>;

  // Adds the --with-optional flag to zypper patch.
  WithOptional?: boolean;

  // Adds the --with-update flag, to zypper patch.
  WithUpdate?: boolean;

  // Install only patches with these categories. Common categories include security, recommended, and feature.
  Categories?: Array<string>;

  // List of packages to exclude from update.
  Excludes?: Array<string>;

  /*
An exclusive list of patches to be updated. These are the only patches that will be installed using 'zypper patch patch:' command.
This field must not be used with any other patch configuration fields.
*/
  ExclusivePatches?: Array<string>;
}

export function Osconfig_PatchDeploymentPatchConfigZypper_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ExclusivePatches",
      "An exclusive list of patches to be updated. These are the only patches that will be installed using 'zypper patch patch:' command.\nThis field must not be used with any other patch configuration fields.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Severities",
      "Install only patches with these severities. Common severities include critical, important, moderate, and low.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "WithOptional",
      "Adds the --with-optional flag to zypper patch.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "WithUpdate",
      "Adds the --with-update flag, to zypper patch.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Categories",
      "Install only patches with these categories. Common categories include security, recommended, and feature.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Excludes",
      "List of packages to exclude from update.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
