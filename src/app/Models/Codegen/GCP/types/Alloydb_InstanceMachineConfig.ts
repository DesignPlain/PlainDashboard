import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Alloydb_InstanceMachineConfig {
  // The number of CPU's in the VM instance.
  CpuCount?: number;
}

export function Alloydb_InstanceMachineConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "CpuCount",
      "The number of CPU's in the VM instance.",
      [],
      false,
      false,
    ),
  ];
}
