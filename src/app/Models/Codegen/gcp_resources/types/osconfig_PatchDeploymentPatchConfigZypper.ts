import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface osconfig_PatchDeploymentPatchConfigZypper {
  // Adds the --with-optional flag to zypper patch.
  withOptional?: boolean;

  // Adds the --with-update flag, to zypper patch.
  withUpdate?: boolean;

  // Install only patches with these categories. Common categories include security, recommended, and feature.
  categories?: Array<string>;

  // List of packages to exclude from update.
  excludes?: Array<string>;

  /*
An exclusive list of patches to be updated. These are the only patches that will be installed using 'zypper patch patch:' command.
This field must not be used with any other patch configuration fields.
*/
  exclusivePatches?: Array<string>;

  // Install only patches with these severities. Common severities include critical, important, moderate, and low.
  severities?: Array<string>;
}

export function osconfig_PatchDeploymentPatchConfigZypper_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "severities",
      "Install only patches with these severities. Common severities include critical, important, moderate, and low.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "withOptional",
      "Adds the --with-optional flag to zypper patch.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "withUpdate",
      "Adds the --with-update flag, to zypper patch.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "categories",
      "Install only patches with these categories. Common categories include security, recommended, and feature.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "excludes",
      "List of packages to exclude from update.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "exclusivePatches",
      "An exclusive list of patches to be updated. These are the only patches that will be installed using 'zypper patch patch:' command.\nThis field must not be used with any other patch configuration fields.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
