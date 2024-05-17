import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgDeb,
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgDeb_GetTypes,
} from "./Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgDeb";
import {
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgGooget,
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgGooget_GetTypes,
} from "./Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgGooget";
import {
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgMsi,
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgMsi_GetTypes,
} from "./Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgMsi";
import {
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpm,
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpm_GetTypes,
} from "./Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpm";
import {
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgYum,
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgYum_GetTypes,
} from "./Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgYum";
import {
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgZypper,
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgZypper_GetTypes,
} from "./Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgZypper";
import {
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgApt,
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgApt_GetTypes,
} from "./Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgApt";

export interface Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkg {
  /*
A package managed by YUM. Structure is
documented below.
*/
  Yum?: Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgYum;

  /*
A package managed by Zypper. Structure is
documented below.
*/
  Zypper?: Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgZypper;

  /*
A package managed by Apt. Structure is
documented below.
*/
  Apt?: Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgApt;

  /*
A deb package file. Structure is
documented below.
*/
  Deb?: Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgDeb;

  /*
The desired state the agent should maintain for
this package. Possible values are: `DESIRED_STATE_UNSPECIFIED`, `INSTALLED`,
`REMOVED`.
*/
  DesiredState?: string;

  /*
A package managed by GooGet. Structure is
documented below.
*/
  Googet?: Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgGooget;

  /*
An MSI package. Structure is
documented below.
*/
  Msi?: Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgMsi;

  /*
An rpm package file. Structure is
documented below.
*/
  Rpm?: Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpm;
}

export function Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkg_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Googet",
      "A package managed by GooGet. Structure is\ndocumented below.",
      Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgGooget_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Msi",
      "An MSI package. Structure is\ndocumented below.",
      Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgMsi_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Rpm",
      "An rpm package file. Structure is\ndocumented below.",
      Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpm_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Yum",
      "A package managed by YUM. Structure is\ndocumented below.",
      Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgYum_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Zypper",
      "A package managed by Zypper. Structure is\ndocumented below.",
      Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgZypper_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Apt",
      "A package managed by Apt. Structure is\ndocumented below.",
      Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgApt_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Deb",
      "A deb package file. Structure is\ndocumented below.",
      Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgDeb_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DesiredState",
      "The desired state the agent should maintain for\nthis package. Possible values are: `DESIRED_STATE_UNSPECIFIED`, `INSTALLED`,\n`REMOVED`.",
      [],
      true,
      false,
    ),
  ];
}
