import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_getClusterNodeConfigConfidentialNode {
  // Whether Confidential Nodes feature is enabled for all nodes in this pool.
  Enabled?: boolean;
}

export function Container_getClusterNodeConfigConfidentialNode_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Whether Confidential Nodes feature is enabled for all nodes in this pool.",
      [],
      true,
      false,
    ),
  ];
}
