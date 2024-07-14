import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_ClusterNodePoolNodeConfigConfidentialNodes {
  /*
Enable Confidential GKE Nodes for this cluster, to
enforce encryption of data in-use.
*/
  enabled?: boolean;
}

export function container_ClusterNodePoolNodeConfigConfidentialNodes_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Enable Confidential GKE Nodes for this cluster, to\nenforce encryption of data in-use.",
      [],
      true,
      true,
    ),
  ];
}
