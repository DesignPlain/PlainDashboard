import { PreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries } from "./PreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries";

export interface PreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences {
  /*
Compute Engine machine series to consider for insights and recommendations. If empty, no restriction is applied on the machine series.
Structure is documented below.
*/
  AllowedMachineSeries?: Array<PreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries>;
}
