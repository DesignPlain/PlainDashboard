import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_ClusterWorkloadAltsConfig {
  // Whether the alts handshaker should be enabled or not for direct-path. Requires Workload Identity (workloadPool) must be non-empty).
  enableAlts?: boolean;
}

export function container_ClusterWorkloadAltsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enableAlts",
      "Whether the alts handshaker should be enabled or not for direct-path. Requires Workload Identity (workloadPool) must be non-empty).",
      [],
      true,
      false,
    ),
  ];
}
