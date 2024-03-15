import { OsPolicyAssignmentRolloutDisruptionBudget } from "./OsPolicyAssignmentRolloutDisruptionBudget";

export interface OsPolicyAssignmentRollout {
  /*
The maximum number (or percentage) of VMs
per zone to disrupt at any given moment. Structure is
documented below.
*/
  DisruptionBudget?: OsPolicyAssignmentRolloutDisruptionBudget;

  /*
This determines the minimum duration of
time to wait after the configuration changes are applied through the current
rollout. A VM continues to count towards the `disruption_budget` at least
until this duration of time has passed after configuration changes are
applied.
*/
  MinWaitDuration?: string;
}
