import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Databasemigrationservice_ConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig {
  // The number of CPU's in the VM instance.
  CpuCount?: number;
}

export function Databasemigrationservice_ConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "CpuCount",
      "The number of CPU's in the VM instance.",
      [],
      true,
      false,
    ),
  ];
}
