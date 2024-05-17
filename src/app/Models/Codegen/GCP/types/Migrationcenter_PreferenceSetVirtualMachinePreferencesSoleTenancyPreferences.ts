import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Migrationcenter_PreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeType,
  Migrationcenter_PreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeType_GetTypes,
} from "./Migrationcenter_PreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeType";

export interface Migrationcenter_PreferenceSetVirtualMachinePreferencesSoleTenancyPreferences {
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
  NodeTypes?: Array<Migrationcenter_PreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeType>;
}

export function Migrationcenter_PreferenceSetVirtualMachinePreferencesSoleTenancyPreferences_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "HostMaintenancePolicy",
      "Sole Tenancy nodes maintenance policy.\nPossible values:\nHOST_MAINTENANCE_POLICY_UNSPECIFIED\nHOST_MAINTENANCE_POLICY_DEFAULT\nHOST_MAINTENANCE_POLICY_RESTART_IN_PLACE\nHOST_MAINTENANCE_POLICY_MIGRATE_WITHIN_NODE_GROUP",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "NodeTypes",
      "A list of sole tenant node types. An empty list means that all possible node types will be considered.\nStructure is documented below.",
      Migrationcenter_PreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeType_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CommitmentPlan",
      "Commitment plan to consider when calculating costs for virtual machine insights and recommendations. If you are unsure which value to set, a 3 year commitment plan is often a good value to start with.\nPossible values:\nCOMMITMENT_PLAN_UNSPECIFIED\nON_DEMAND\nCOMMITMENT_1_YEAR\nCOMMITMENT_3_YEAR",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "CpuOvercommitRatio",
      "CPU overcommit ratio. Acceptable values are between 1.0 and 2.0 inclusive.",
      [],
      false,
      false,
    ),
  ];
}
