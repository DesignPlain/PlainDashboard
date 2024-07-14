import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgDebSource,
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgDebSource_GetTypes,
} from "./osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgDebSource";

export interface osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgDeb {
  /*
Whether dependencies should also be installed. -
install when false: `dpkg -i package` - install when true: `apt-get update
&& apt-get -y install package.deb`
*/
  pullDeps?: boolean;

  /*
A deb package. Structure is
documented below.
*/
  source?: osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgDebSource;
}

export function osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgDeb_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "pullDeps",
      "Whether dependencies should also be installed. -\ninstall when false: `dpkg -i package` - install when true: `apt-get update\n&& apt-get -y install package.deb`",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "source",
      "A deb package. Structure is\ndocumented below.",
      osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgDebSource_GetTypes(),
      true,
      false,
    ),
  ];
}
