import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  migrationcenter_PreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences,
  migrationcenter_PreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences_GetTypes,
} from './migrationcenter_PreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences';

export interface migrationcenter_PreferenceSetVirtualMachinePreferencesComputeEnginePreferences {
  /*
License type to consider when calculating costs for virtual machine insights and recommendations. If unspecified, costs are calculated based on the default licensing plan.
Possible values:
LICENSE_TYPE_UNSPECIFIED
LICENSE_TYPE_DEFAULT
LICENSE_TYPE_BRING_YOUR_OWN_LICENSE
*/
  licenseType?: string;

  /*
The type of machines to consider when calculating virtual machine migration insights and recommendations. Not all machine types are available in all zones and regions.
Structure is documented below.
*/
  machinePreferences?: migrationcenter_PreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences;
}

export function migrationcenter_PreferenceSetVirtualMachinePreferencesComputeEnginePreferences_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'licenseType',
      'License type to consider when calculating costs for virtual machine insights and recommendations. If unspecified, costs are calculated based on the default licensing plan.\nPossible values:\nLICENSE_TYPE_UNSPECIFIED\nLICENSE_TYPE_DEFAULT\nLICENSE_TYPE_BRING_YOUR_OWN_LICENSE',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'machinePreferences',
      'The type of machines to consider when calculating virtual machine migration insights and recommendations. Not all machine types are available in all zones and regions.\nStructure is documented below.',
      () =>
        migrationcenter_PreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences_GetTypes(),
      false,
      false,
    ),
  ];
}
