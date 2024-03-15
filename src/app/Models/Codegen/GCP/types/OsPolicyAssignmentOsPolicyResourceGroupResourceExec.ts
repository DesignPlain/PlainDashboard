import { OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforce } from "./OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforce";
import { OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidate } from "./OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidate";

export interface OsPolicyAssignmentOsPolicyResourceGroupResourceExec {
  /*
What to run to bring this resource into the desired
state. An exit code of 100 indicates "success", any other exit code
indicates a failure running enforce. Structure is
documented below.
*/
  Enforce?: OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforce;

  /*
What to run to validate this resource is in the
desired state. An exit code of 100 indicates "in desired state", and exit
code of 101 indicates "not in desired state". Any other exit code indicates
a failure running validate. Structure is
documented below.
*/
  Validate?: OsPolicyAssignmentOsPolicyResourceGroupResourceExecValidate;
}
