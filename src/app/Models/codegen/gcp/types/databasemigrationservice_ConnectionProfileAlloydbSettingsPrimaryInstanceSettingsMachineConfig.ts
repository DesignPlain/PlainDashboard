import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface databasemigrationservice_ConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig {
  // The number of CPU's in the VM instance.
  cpuCount?: number;
}

export function databasemigrationservice_ConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'cpuCount',
      "The number of CPU's in the VM instance.",
      () => [],
      true,
      false,
    ),
  ];
}
