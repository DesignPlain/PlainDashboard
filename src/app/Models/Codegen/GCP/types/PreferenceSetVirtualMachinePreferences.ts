import { PreferenceSetVirtualMachinePreferencesVmwareEnginePreferences } from "./PreferenceSetVirtualMachinePreferencesVmwareEnginePreferences";
import { PreferenceSetVirtualMachinePreferencesComputeEnginePreferences } from "./PreferenceSetVirtualMachinePreferencesComputeEnginePreferences";
import { PreferenceSetVirtualMachinePreferencesRegionPreferences } from "./PreferenceSetVirtualMachinePreferencesRegionPreferences";
import { PreferenceSetVirtualMachinePreferencesSoleTenancyPreferences } from "./PreferenceSetVirtualMachinePreferencesSoleTenancyPreferences";

export interface PreferenceSetVirtualMachinePreferences {
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
  VmwareEnginePreferences?: PreferenceSetVirtualMachinePreferencesVmwareEnginePreferences;

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
  ComputeEnginePreferences?: PreferenceSetVirtualMachinePreferencesComputeEnginePreferences;

  /*
The user preferences relating to target regions.
Structure is documented below.
*/
  RegionPreferences?: PreferenceSetVirtualMachinePreferencesRegionPreferences;

  /*
Sizing optimization strategy specifies the preferred strategy used when extrapolating usage data to calculate insights and recommendations for a virtual machine. If you are unsure which value to set, a moderate sizing optimization strategy is often a good value to start with.
Possible values:
SIZING_OPTIMIZATION_STRATEGY_UNSPECIFIED
SIZING_OPTIMIZATION_STRATEGY_SAME_AS_SOURCE
SIZING_OPTIMIZATION_STRATEGY_MODERATE
SIZING_OPTIMIZATION_STRATEGY_AGGRESSIVE
*/
  SizingOptimizationStrategy?: string;

  /*
Preferences concerning Sole Tenancy nodes and VMs.
Structure is documented below.
*/
  SoleTenancyPreferences?: PreferenceSetVirtualMachinePreferencesSoleTenancyPreferences;
}
