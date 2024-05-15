import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Migrationcenter_PreferenceSetVirtualMachinePreferencesVmwareEnginePreferences,
  Migrationcenter_PreferenceSetVirtualMachinePreferencesVmwareEnginePreferences_GetTypes,
} from "./Migrationcenter_PreferenceSetVirtualMachinePreferencesVmwareEnginePreferences";
import {
  Migrationcenter_PreferenceSetVirtualMachinePreferencesComputeEnginePreferences,
  Migrationcenter_PreferenceSetVirtualMachinePreferencesComputeEnginePreferences_GetTypes,
} from "./Migrationcenter_PreferenceSetVirtualMachinePreferencesComputeEnginePreferences";
import {
  Migrationcenter_PreferenceSetVirtualMachinePreferencesRegionPreferences,
  Migrationcenter_PreferenceSetVirtualMachinePreferencesRegionPreferences_GetTypes,
} from "./Migrationcenter_PreferenceSetVirtualMachinePreferencesRegionPreferences";
import {
  Migrationcenter_PreferenceSetVirtualMachinePreferencesSoleTenancyPreferences,
  Migrationcenter_PreferenceSetVirtualMachinePreferencesSoleTenancyPreferences_GetTypes,
} from "./Migrationcenter_PreferenceSetVirtualMachinePreferencesSoleTenancyPreferences";

export interface Migrationcenter_PreferenceSetVirtualMachinePreferences {
  /*
Preferences concerning Sole Tenancy nodes and VMs.
Structure is documented below.
*/
  SoleTenancyPreferences?: Migrationcenter_PreferenceSetVirtualMachinePreferencesSoleTenancyPreferences;

  /*
Target product for assets using this preference set. Specify either target product or business goal, but not both.
Possible values:
COMPUTE_MIGRATION_TARGET_PRODUCT_UNSPECIFIED
COMPUTE_MIGRATION_TARGET_PRODUCT_COMPUTE_ENGINE
COMPUTE_MIGRATION_TARGET_PRODUCT_VMWARE_ENGINE
COMPUTE_MIGRATION_TARGET_PRODUCT_SOLE_TENANCY
*/
  TargetProduct?: string;

  /*
The user preferences relating to Google Cloud VMware Engine target platform.
Structure is documented below.
*/
  VmwareEnginePreferences?: Migrationcenter_PreferenceSetVirtualMachinePreferencesVmwareEnginePreferences;

  /*
Commitment plan to consider when calculating costs for virtual machine insights and recommendations. If you are unsure which value to set, a 3 year commitment plan is often a good value to start with.
Possible values:
COMMITMENT_PLAN_UNSPECIFIED
COMMITMENT_PLAN_NONE
COMMITMENT_PLAN_ONE_YEAR
COMMITMENT_PLAN_THREE_YEARS
*/
  CommitmentPlan?: string;

  /*
The user preferences relating to Compute Engine target platform.
Structure is documented below.
*/
  ComputeEnginePreferences?: Migrationcenter_PreferenceSetVirtualMachinePreferencesComputeEnginePreferences;

  /*
The user preferences relating to target regions.
Structure is documented below.
*/
  RegionPreferences?: Migrationcenter_PreferenceSetVirtualMachinePreferencesRegionPreferences;

  /*
Sizing optimization strategy specifies the preferred strategy used when extrapolating usage data to calculate insights and recommendations for a virtual machine. If you are unsure which value to set, a moderate sizing optimization strategy is often a good value to start with.
Possible values:
SIZING_OPTIMIZATION_STRATEGY_UNSPECIFIED
SIZING_OPTIMIZATION_STRATEGY_SAME_AS_SOURCE
SIZING_OPTIMIZATION_STRATEGY_MODERATE
SIZING_OPTIMIZATION_STRATEGY_AGGRESSIVE
*/
  SizingOptimizationStrategy?: string;
}

export function Migrationcenter_PreferenceSetVirtualMachinePreferences_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "CommitmentPlan",
      "Commitment plan to consider when calculating costs for virtual machine insights and recommendations. If you are unsure which value to set, a 3 year commitment plan is often a good value to start with.\nPossible values:\nCOMMITMENT_PLAN_UNSPECIFIED\nCOMMITMENT_PLAN_NONE\nCOMMITMENT_PLAN_ONE_YEAR\nCOMMITMENT_PLAN_THREE_YEARS",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ComputeEnginePreferences",
      "The user preferences relating to Compute Engine target platform.\nStructure is documented below.",
      Migrationcenter_PreferenceSetVirtualMachinePreferencesComputeEnginePreferences_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "RegionPreferences",
      "The user preferences relating to target regions.\nStructure is documented below.",
      Migrationcenter_PreferenceSetVirtualMachinePreferencesRegionPreferences_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SizingOptimizationStrategy",
      "Sizing optimization strategy specifies the preferred strategy used when extrapolating usage data to calculate insights and recommendations for a virtual machine. If you are unsure which value to set, a moderate sizing optimization strategy is often a good value to start with.\nPossible values:\nSIZING_OPTIMIZATION_STRATEGY_UNSPECIFIED\nSIZING_OPTIMIZATION_STRATEGY_SAME_AS_SOURCE\nSIZING_OPTIMIZATION_STRATEGY_MODERATE\nSIZING_OPTIMIZATION_STRATEGY_AGGRESSIVE",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SoleTenancyPreferences",
      "Preferences concerning Sole Tenancy nodes and VMs.\nStructure is documented below.",
      Migrationcenter_PreferenceSetVirtualMachinePreferencesSoleTenancyPreferences_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "TargetProduct",
      "Target product for assets using this preference set. Specify either target product or business goal, but not both.\nPossible values:\nCOMPUTE_MIGRATION_TARGET_PRODUCT_UNSPECIFIED\nCOMPUTE_MIGRATION_TARGET_PRODUCT_COMPUTE_ENGINE\nCOMPUTE_MIGRATION_TARGET_PRODUCT_VMWARE_ENGINE\nCOMPUTE_MIGRATION_TARGET_PRODUCT_SOLE_TENANCY",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "VmwareEnginePreferences",
      "The user preferences relating to Google Cloud VMware Engine target platform.\nStructure is documented below.",
      Migrationcenter_PreferenceSetVirtualMachinePreferencesVmwareEnginePreferences_GetTypes(),
      false,
      false,
    ),
  ];
}
