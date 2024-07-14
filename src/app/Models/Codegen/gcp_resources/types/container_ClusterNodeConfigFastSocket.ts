import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_ClusterNodeConfigFastSocket {
  // Whether or not the NCCL Fast Socket is enabled
  enabled?: boolean;
}

export function container_ClusterNodeConfigFastSocket_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether or not the NCCL Fast Socket is enabled",
      [],
      true,
      false,
    ),
  ];
}
