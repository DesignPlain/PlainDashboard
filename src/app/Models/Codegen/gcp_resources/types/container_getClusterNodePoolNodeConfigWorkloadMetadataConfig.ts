import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_getClusterNodePoolNodeConfigWorkloadMetadataConfig {
  // Mode is the configuration for how to expose metadata to workloads running on the node.
  mode?: string;
}

export function container_getClusterNodePoolNodeConfigWorkloadMetadataConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "mode",
      "Mode is the configuration for how to expose metadata to workloads running on the node.",
      [],
      true,
      false,
    ),
  ];
}
