import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Osconfig_OsPolicyAssignmentOsPolicyResourceGroupInventoryFilter {
  /*
The OS version Prefix matches are supported if
asterisk(-) is provided as the last character. For example, to match all
versions with a major version of `7`, specify the following value for this
field `7.-` An empty string matches all OS versions.
*/
  OsVersion?: string;

  // The OS short name
  OsShortName?: string;
}

export function Osconfig_OsPolicyAssignmentOsPolicyResourceGroupInventoryFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "OsVersion",
      "The OS version Prefix matches are supported if\nasterisk(*) is provided as the last character. For example, to match all\nversions with a major version of `7`, specify the following value for this\nfield `7.*` An empty string matches all OS versions.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "OsShortName",
      "The OS short name",
      [],
      true,
      false,
    ),
  ];
}
