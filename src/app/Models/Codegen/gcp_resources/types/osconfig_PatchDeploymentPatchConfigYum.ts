import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface osconfig_PatchDeploymentPatchConfigYum {
  // List of packages to exclude from update. These packages will be excluded.
  excludes?: Array<string>;

  /*
An exclusive list of packages to be updated. These are the only packages that will be updated.
If these packages are not installed, they will be ignored. This field cannot be specified with
any other patch configuration fields.
*/
  exclusivePackages?: Array<string>;

  // Will cause patch to run yum update-minimal instead.
  minimal?: boolean;

  // Adds the --security flag to yum update. Not supported on all platforms.
  security?: boolean;
}

export function osconfig_PatchDeploymentPatchConfigYum_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "excludes",
      "List of packages to exclude from update. These packages will be excluded.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "exclusivePackages",
      "An exclusive list of packages to be updated. These are the only packages that will be updated.\nIf these packages are not installed, they will be ignored. This field cannot be specified with\nany other patch configuration fields.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "minimal",
      "Will cause patch to run yum update-minimal instead.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "security",
      "Adds the --security flag to yum update. Not supported on all platforms.",
      [],
      false,
      true,
    ),
  ];
}
