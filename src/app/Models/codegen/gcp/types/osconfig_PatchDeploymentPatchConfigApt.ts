import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface osconfig_PatchDeploymentPatchConfigApt {
  // List of packages to exclude from update. These packages will be excluded.
  excludes?: Array<string>;

  /*
An exclusive list of packages to be updated. These are the only packages that will be updated.
If these packages are not installed, they will be ignored. This field cannot be specified with
any other patch configuration fields.
*/
  exclusivePackages?: Array<string>;

  /*
By changing the type to DIST, the patching is performed using apt-get dist-upgrade instead.
Possible values are: `DIST`, `UPGRADE`.
*/
  type?: string;
}

export function osconfig_PatchDeploymentPatchConfigApt_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'excludes',
      'List of packages to exclude from update. These packages will be excluded.',
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'exclusivePackages',
      'An exclusive list of packages to be updated. These are the only packages that will be updated.\nIf these packages are not installed, they will be ignored. This field cannot be specified with\nany other patch configuration fields.',
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      'By changing the type to DIST, the patching is performed using apt-get dist-upgrade instead.\nPossible values are: `DIST`, `UPGRADE`.',
      () => [],
      false,
      true,
    ),
  ];
}
