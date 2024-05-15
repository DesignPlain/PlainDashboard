import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_ClusterNodeConfigFastSocket {
  // Whether or not the NCCL Fast Socket is enabled
  Enabled?: boolean;
}

export function Container_ClusterNodeConfigFastSocket_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Whether or not the NCCL Fast Socket is enabled",
      [],
      true,
      false,
    ),
  ];
}
