import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforce,
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforce_GetTypes,
} from "./Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforce";
import {
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidate,
  Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidate_GetTypes,
} from "./Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidate";

export interface Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExec {
  /*
What to run to bring this resource into the desired
state. An exit code of 100 indicates "success", any other exit code
indicates a failure running enforce. Structure is
documented below.
*/
  Enforce?: Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforce;

  /*
What to run to validate this resource is in the
desired state. An exit code of 100 indicates "in desired state", and exit
code of 101 indicates "not in desired state". Any other exit code indicates
a failure running validate. Structure is
documented below.
*/
  Validate?: Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidate;
}

export function Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Enforce",
      'What to run to bring this resource into the desired\nstate. An exit code of 100 indicates "success", any other exit code\nindicates a failure running enforce. Structure is\ndocumented below.',
      Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforce_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Validate",
      'What to run to validate this resource is in the\ndesired state. An exit code of 100 indicates "in desired state", and exit\ncode of 101 indicates "not in desired state". Any other exit code indicates\na failure running validate. Structure is\ndocumented below.',
      Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidate_GetTypes(),
      true,
      false,
    ),
  ];
}
