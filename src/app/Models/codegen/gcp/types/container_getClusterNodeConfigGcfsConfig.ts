import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface container_getClusterNodeConfigGcfsConfig {
  // Whether or not GCFS is enabled
  enabled?: boolean;
}

export function container_getClusterNodeConfigGcfsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether or not GCFS is enabled",
      () => [],
      true,
      false,
    ),
  ];
}
