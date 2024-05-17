import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Memcache_InstanceNodeConfig {
  // Number of CPUs per node.
  CpuCount?: number;

  /*
Memory size in Mebibytes for each memcache node.

- - -
*/
  MemorySizeMb?: number;
}

export function Memcache_InstanceNodeConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "CpuCount",
      "Number of CPUs per node.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MemorySizeMb",
      "Memory size in Mebibytes for each memcache node.\n\n- - -",
      [],
      true,
      false,
    ),
  ];
}
