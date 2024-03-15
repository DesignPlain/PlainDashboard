import { PreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeType } from "./PreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeType";

export interface PreferenceSetVirtualMachinePreferencesSoleTenancyPreferences {
  /*
Sole Tenancy nodes maintenance policy.
Possible values:
HOST_MAINTENANCE_POLICY_UNSPECIFIED
HOST_MAINTENANCE_POLICY_DEFAULT
HOST_MAINTENANCE_POLICY_RESTART_IN_PLACE
HOST_MAINTENANCE_POLICY_MIGRATE_WITHIN_NODE_GROUP
*/
  HostMaintenancePolicy?: string;

  /*
A list of sole tenant node types. An empty list means that all possible node types will be considered.
Structure is documented below.
*/
  NodeTypes?: Array<PreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeType>;

  /*
Commitment plan to consider when calculating costs for virtual machine insights and recommendations. If you are unsure which value to set, a 3 year commitment plan is often a good value to start with.
Possible values:
COMMITMENT_PLAN_UNSPECIFIED
ON_DEMAND
COMMITMENT_1_YEAR
COMMITMENT_3_YEAR
*/
  CommitmentPlan?: string;

  // CPU overcommit ratio. Acceptable values are between 1.0 and 2.0 inclusive.
  CpuOvercommitRatio?: number;
}
