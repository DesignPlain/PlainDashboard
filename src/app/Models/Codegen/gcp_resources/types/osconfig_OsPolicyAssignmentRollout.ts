import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  osconfig_OsPolicyAssignmentRolloutDisruptionBudget,
  osconfig_OsPolicyAssignmentRolloutDisruptionBudget_GetTypes,
} from "./osconfig_OsPolicyAssignmentRolloutDisruptionBudget";

export interface osconfig_OsPolicyAssignmentRollout {
  /*
The maximum number (or percentage) of VMs
per zone to disrupt at any given moment. Structure is
documented below.
*/
  disruptionBudget?: osconfig_OsPolicyAssignmentRolloutDisruptionBudget;

  /*
This determines the minimum duration of
time to wait after the configuration changes are applied through the current
rollout. A VM continues to count towards the `disruption_budget` at least
until this duration of time has passed after configuration changes are
applied.
*/
  minWaitDuration?: string;
}

export function osconfig_OsPolicyAssignmentRollout_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "disruptionBudget",
      "The maximum number (or percentage) of VMs\nper zone to disrupt at any given moment. Structure is\ndocumented below.",
      osconfig_OsPolicyAssignmentRolloutDisruptionBudget_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "minWaitDuration",
      "This determines the minimum duration of\ntime to wait after the configuration changes are applied through the current\nrollout. A VM continues to count towards the `disruption_budget` at least\nuntil this duration of time has passed after configuration changes are\napplied.",
      [],
      true,
      false,
    ),
  ];
}
