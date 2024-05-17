import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSource,
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSource_GetTypes,
} from "./Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSource";

export interface Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpm {
  /*
Whether dependencies should also be installed. -
install when false: `rpm --upgrade --replacepkgs package.rpm` - install when
true: `yum -y install package.rpm` or `zypper -y install package.rpm`
*/
  PullDeps?: boolean;

  /*
An rpm package. Structure is
documented below.
*/
  Source?: Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSource;
}

export function Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpm_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "PullDeps",
      "Whether dependencies should also be installed. -\ninstall when false: `rpm --upgrade --replacepkgs package.rpm` - install when\ntrue: `yum -y install package.rpm` or `zypper -y install package.rpm`",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Source",
      "An rpm package. Structure is\ndocumented below.",
      Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSource_GetTypes(),
      true,
      false,
    ),
  ];
}
