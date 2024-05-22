import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgMsiSource,
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgMsiSource_GetTypes,
} from "./osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgMsiSource";

export interface osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgMsi {
  /*
Additional properties to use during installation.
This should be in the format of Property=Setting. Appended to the defaults
of `ACTION=INSTALL REBOOT=ReallySuppress`.
*/
  properties?: Array<string>;

  /*
The MSI package. Structure is
documented below.
*/
  source?: osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgMsiSource;
}

export function osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgMsi_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "properties",
      "Additional properties to use during installation.\nThis should be in the format of Property=Setting. Appended to the defaults\nof `ACTION=INSTALL REBOOT=ReallySuppress`.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "source",
      "The MSI package. Structure is\ndocumented below.",
      osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgMsiSource_GetTypes(),
      true,
      false,
    ),
  ];
}
