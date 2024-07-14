import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface alloydb_InstanceMachineConfig {
  // The number of CPU's in the VM instance.
  cpuCount?: number;
}

export function alloydb_InstanceMachineConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "cpuCount",
      "The number of CPU's in the VM instance.",
      [],
      false,
      false,
    ),
  ];
}
