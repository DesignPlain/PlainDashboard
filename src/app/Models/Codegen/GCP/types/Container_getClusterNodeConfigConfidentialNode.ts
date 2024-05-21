import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_getClusterNodeConfigConfidentialNode {
  // Whether Confidential Nodes feature is enabled for all nodes in this pool.
  enabled?: boolean;
}

export function container_getClusterNodeConfigConfidentialNode_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether Confidential Nodes feature is enabled for all nodes in this pool.",
      [],
      true,
      false,
    ),
  ];
}
