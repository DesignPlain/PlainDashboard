import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Osconfig_OsPolicyAssignmentRolloutDisruptionBudget,
  Osconfig_OsPolicyAssignmentRolloutDisruptionBudget_GetTypes,
} from "./Osconfig_OsPolicyAssignmentRolloutDisruptionBudget";

export interface Osconfig_OsPolicyAssignmentRollout {
  /*
This determines the minimum duration of
time to wait after the configuration changes are applied through the current
rollout. A VM continues to count towards the `disruption_budget` at least
until this duration of time has passed after configuration changes are
applied.
*/
  MinWaitDuration?: string;

  /*
The maximum number (or percentage) of VMs
per zone to disrupt at any given moment. Structure is
documented below.
*/
  DisruptionBudget?: Osconfig_OsPolicyAssignmentRolloutDisruptionBudget;
}

export function Osconfig_OsPolicyAssignmentRollout_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "MinWaitDuration",
      "This determines the minimum duration of\ntime to wait after the configuration changes are applied through the current\nrollout. A VM continues to count towards the `disruption_budget` at least\nuntil this duration of time has passed after configuration changes are\napplied.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "DisruptionBudget",
      "The maximum number (or percentage) of VMs\nper zone to disrupt at any given moment. Structure is\ndocumented below.",
      Osconfig_OsPolicyAssignmentRolloutDisruptionBudget_GetTypes(),
      true,
      false,
    ),
  ];
}
