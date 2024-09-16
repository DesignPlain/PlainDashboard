import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface memcache_InstanceNodeConfig {
  // Number of CPUs per node.
  cpuCount?: number;

  /*
Memory size in Mebibytes for each memcache node.

- - -
*/
  memorySizeMb?: number;
}

export function memcache_InstanceNodeConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'memorySizeMb',
      'Memory size in Mebibytes for each memcache node.\n\n- - -',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'cpuCount',
      'Number of CPUs per node.',
      () => [],
      true,
      false,
    ),
  ];
}
