import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Migrationcenter_PreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences,
  Migrationcenter_PreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences_GetTypes,
} from "./Migrationcenter_PreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences";

export interface Migrationcenter_PreferenceSetVirtualMachinePreferencesComputeEnginePreferences {
  /*
The type of machines to consider when calculating virtual machine migration insights and recommendations. Not all machine types are available in all zones and regions.
Structure is documented below.
*/
  MachinePreferences?: Migrationcenter_PreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences;

  /*
License type to consider when calculating costs for virtual machine insights and recommendations. If unspecified, costs are calculated based on the default licensing plan.
Possible values:
LICENSE_TYPE_UNSPECIFIED
LICENSE_TYPE_DEFAULT
LICENSE_TYPE_BRING_YOUR_OWN_LICENSE
*/
  LicenseType?: string;
}

export function Migrationcenter_PreferenceSetVirtualMachinePreferencesComputeEnginePreferences_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "MachinePreferences",
      "The type of machines to consider when calculating virtual machine migration insights and recommendations. Not all machine types are available in all zones and regions.\nStructure is documented below.",
      Migrationcenter_PreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "LicenseType",
      "License type to consider when calculating costs for virtual machine insights and recommendations. If unspecified, costs are calculated based on the default licensing plan.\nPossible values:\nLICENSE_TYPE_UNSPECIFIED\nLICENSE_TYPE_DEFAULT\nLICENSE_TYPE_BRING_YOUR_OWN_LICENSE",
      [],
      false,
      false,
    ),
  ];
}
