import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_getClusterNodePoolNodeConfigGcfsConfig {
  // Whether or not GCFS is enabled
  enabled?: boolean;
}

export function container_getClusterNodePoolNodeConfigGcfsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether or not GCFS is enabled",
      [],
      true,
      false,
    ),
  ];
}
