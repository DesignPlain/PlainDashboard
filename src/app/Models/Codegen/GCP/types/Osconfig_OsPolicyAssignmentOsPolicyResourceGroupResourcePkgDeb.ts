import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgDebSource,
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgDebSource_GetTypes,
} from "./Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgDebSource";

export interface Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgDeb {
  /*
Whether dependencies should also be installed. -
install when false: `dpkg -i package` - install when true: `apt-get update
&& apt-get -y install package.deb`
*/
  PullDeps?: boolean;

  /*
A deb package. Structure is
documented below.
*/
  Source?: Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgDebSource;
}

export function Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgDeb_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "PullDeps",
      "Whether dependencies should also be installed. -\ninstall when false: `dpkg -i package` - install when true: `apt-get update\n&& apt-get -y install package.deb`",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Source",
      "A deb package. Structure is\ndocumented below.",
      Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgDebSource_GetTypes(),
      true,
      false,
    ),
  ];
}
