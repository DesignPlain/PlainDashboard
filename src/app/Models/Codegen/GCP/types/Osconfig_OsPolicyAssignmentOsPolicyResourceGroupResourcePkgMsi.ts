import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgMsiSource,
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgMsiSource_GetTypes,
} from "./Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgMsiSource";

export interface Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgMsi {
  /*
Additional properties to use during installation.
This should be in the format of Property=Setting. Appended to the defaults
of `ACTION=INSTALL REBOOT=ReallySuppress`.
*/
  Properties?: Array<string>;

  /*
The MSI package. Structure is
documented below.
*/
  Source?: Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgMsiSource;
}

export function Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgMsi_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Properties",
      "Additional properties to use during installation.\nThis should be in the format of Property=Setting. Appended to the defaults\nof `ACTION=INSTALL REBOOT=ReallySuppress`.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Source",
      "The MSI package. Structure is\ndocumented below.",
      Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgMsiSource_GetTypes(),
      true,
      false,
    ),
  ];
}
