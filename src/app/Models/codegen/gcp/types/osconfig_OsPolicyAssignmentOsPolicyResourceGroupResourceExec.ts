import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforce,
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforce_GetTypes,
} from "./osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforce";
import {
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidate,
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidate_GetTypes,
} from "./osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidate";

export interface osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExec {
  /*
What to run to bring this resource into the desired
state. An exit code of 100 indicates "success", any other exit code
indicates a failure running enforce. Structure is
documented below.
*/
  enforce?: osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforce;

  /*
What to run to validate this resource is in the
desired state. An exit code of 100 indicates "in desired state", and exit
code of 101 indicates "not in desired state". Any other exit code indicates
a failure running validate. Structure is
documented below.
*/
  validate?: osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidate;
}

export function osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "enforce",
      'What to run to bring this resource into the desired\nstate. An exit code of 100 indicates "success", any other exit code\nindicates a failure running enforce. Structure is\ndocumented below.',
      () =>
        osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforce_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "validate",
      'What to run to validate this resource is in the\ndesired state. An exit code of 100 indicates "in desired state", and exit\ncode of 101 indicates "not in desired state". Any other exit code indicates\na failure running validate. Structure is\ndocumented below.',
      () =>
        osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidate_GetTypes(),
      true,
      false,
    ),
  ];
}
