import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSource,
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSource_GetTypes,
} from "./osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSource";

export interface osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpm {
  /*
Whether dependencies should also be installed. -
install when false: `rpm --upgrade --replacepkgs package.rpm` - install when
true: `yum -y install package.rpm` or `zypper -y install package.rpm`
*/
  pullDeps?: boolean;

  /*
An rpm package. Structure is
documented below.
*/
  source?: osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSource;
}

export function osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpm_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "source",
      "An rpm package. Structure is\ndocumented below.",
      osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSource_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "pullDeps",
      "Whether dependencies should also be installed. -\ninstall when false: `rpm --upgrade --replacepkgs package.rpm` - install when\ntrue: `yum -y install package.rpm` or `zypper -y install package.rpm`",
      [],
      false,
      false,
    ),
  ];
}
