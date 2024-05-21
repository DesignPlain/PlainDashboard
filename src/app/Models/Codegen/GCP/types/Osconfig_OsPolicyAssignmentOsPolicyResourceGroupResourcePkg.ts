import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgApt,
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgApt_GetTypes,
} from "./osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgApt";
import {
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgDeb,
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgDeb_GetTypes,
} from "./osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgDeb";
import {
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgGooget,
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgGooget_GetTypes,
} from "./osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgGooget";
import {
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgMsi,
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgMsi_GetTypes,
} from "./osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgMsi";
import {
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpm,
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpm_GetTypes,
} from "./osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpm";
import {
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgYum,
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgYum_GetTypes,
} from "./osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgYum";
import {
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgZypper,
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgZypper_GetTypes,
} from "./osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgZypper";

export interface osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkg {
  /*
A deb package file. Structure is
documented below.
*/
  deb?: osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgDeb;

  /*
The desired state the agent should maintain for
this package. Possible values are: `DESIRED_STATE_UNSPECIFIED`, `INSTALLED`,
`REMOVED`.
*/
  desiredState?: string;

  /*
A package managed by GooGet. Structure is
documented below.
*/
  googet?: osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgGooget;

  /*
An MSI package. Structure is
documented below.
*/
  msi?: osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgMsi;

  /*
An rpm package file. Structure is
documented below.
*/
  rpm?: osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpm;

  /*
A package managed by YUM. Structure is
documented below.
*/
  yum?: osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgYum;

  /*
A package managed by Zypper. Structure is
documented below.
*/
  zypper?: osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgZypper;

  /*
A package managed by Apt. Structure is
documented below.
*/
  apt?: osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgApt;
}

export function osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkg_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "rpm",
      "An rpm package file. Structure is\ndocumented below.",
      osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpm_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "yum",
      "A package managed by YUM. Structure is\ndocumented below.",
      osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgYum_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "zypper",
      "A package managed by Zypper. Structure is\ndocumented below.",
      osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgZypper_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "apt",
      "A package managed by Apt. Structure is\ndocumented below.",
      osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgApt_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "deb",
      "A deb package file. Structure is\ndocumented below.",
      osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgDeb_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "desiredState",
      "The desired state the agent should maintain for\nthis package. Possible values are: `DESIRED_STATE_UNSPECIFIED`, `INSTALLED`,\n`REMOVED`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "googet",
      "A package managed by GooGet. Structure is\ndocumented below.",
      osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgGooget_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "msi",
      "An MSI package. Structure is\ndocumented below.",
      osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgMsi_GetTypes(),
      false,
      false,
    ),
  ];
}
