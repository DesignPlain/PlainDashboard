import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Osconfig_PatchDeploymentPatchConfigApt {
  /*
An exclusive list of packages to be updated. These are the only packages that will be updated.
If these packages are not installed, they will be ignored. This field cannot be specified with
any other patch configuration fields.
*/
  ExclusivePackages?: Array<string>;

  /*
By changing the type to DIST, the patching is performed using apt-get dist-upgrade instead.
Possible values are: `DIST`, `UPGRADE`.
*/
  Type?: string;

  // List of packages to exclude from update. These packages will be excluded.
  Excludes?: Array<string>;
}

export function Osconfig_PatchDeploymentPatchConfigApt_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ExclusivePackages",
      "An exclusive list of packages to be updated. These are the only packages that will be updated.\nIf these packages are not installed, they will be ignored. This field cannot be specified with\nany other patch configuration fields.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      "By changing the type to DIST, the patching is performed using apt-get dist-upgrade instead.\nPossible values are: `DIST`, `UPGRADE`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Excludes",
      "List of packages to exclude from update. These packages will be excluded.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
