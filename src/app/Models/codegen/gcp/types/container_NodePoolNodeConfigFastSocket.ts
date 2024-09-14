import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface container_NodePoolNodeConfigFastSocket {
  /*
Enable Confidential GKE Nodes for this cluster, to
enforce encryption of data in-use.
*/
  enabled?: boolean;
}

export function container_NodePoolNodeConfigFastSocket_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Enable Confidential GKE Nodes for this cluster, to\nenforce encryption of data in-use.",
      () => [],
      true,
      false,
    ),
  ];
}
