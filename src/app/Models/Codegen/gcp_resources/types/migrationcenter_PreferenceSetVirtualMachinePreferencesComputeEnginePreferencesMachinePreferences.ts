import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  migrationcenter_PreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries,
  migrationcenter_PreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries_GetTypes,
} from "./migrationcenter_PreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries";

export interface migrationcenter_PreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences {
  /*
Compute Engine machine series to consider for insights and recommendations. If empty, no restriction is applied on the machine series.
Structure is documented below.
*/
  allowedMachineSeries?: Array<migrationcenter_PreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries>;
}

export function migrationcenter_PreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "allowedMachineSeries",
      "Compute Engine machine series to consider for insights and recommendations. If empty, no restriction is applied on the machine series.\nStructure is documented below.",
      migrationcenter_PreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries_GetTypes(),
      false,
      false,
    ),
  ];
}
