import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Migrationcenter_PreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries,
  Migrationcenter_PreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries_GetTypes,
} from "./Migrationcenter_PreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries";

export interface Migrationcenter_PreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences {
  /*
Compute Engine machine series to consider for insights and recommendations. If empty, no restriction is applied on the machine series.
Structure is documented below.
*/
  AllowedMachineSeries?: Array<Migrationcenter_PreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries>;
}

export function Migrationcenter_PreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "AllowedMachineSeries",
      "Compute Engine machine series to consider for insights and recommendations. If empty, no restriction is applied on the machine series.\nStructure is documented below.",
      Migrationcenter_PreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries_GetTypes(),
      false,
      false,
    ),
  ];
}
