import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface container_getClusterNodeConfigFastSocket {
  // Whether or not NCCL Fast Socket is enabled
  enabled?: boolean;
}

export function container_getClusterNodeConfigFastSocket_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether or not NCCL Fast Socket is enabled",
      () => [],
      true,
      false,
    ),
  ];
}
