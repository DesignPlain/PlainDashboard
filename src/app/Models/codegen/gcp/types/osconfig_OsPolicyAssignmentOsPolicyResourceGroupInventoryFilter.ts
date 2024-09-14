import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface osconfig_OsPolicyAssignmentOsPolicyResourceGroupInventoryFilter {
  /*
The OS version Prefix matches are supported if
asterisk(-) is provided as the last character. For example, to match all
versions with a major version of `7`, specify the following value for this
field `7.-` An empty string matches all OS versions.
*/
  osVersion?: string;

  // The OS short name
  osShortName?: string;
}

export function osconfig_OsPolicyAssignmentOsPolicyResourceGroupInventoryFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "osVersion",
      "The OS version Prefix matches are supported if\nasterisk(*) is provided as the last character. For example, to match all\nversions with a major version of `7`, specify the following value for this\nfield `7.*` An empty string matches all OS versions.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "osShortName",
      "The OS short name",
      () => [],
      true,
      false,
    ),
  ];
}
