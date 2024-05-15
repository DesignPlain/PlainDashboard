import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_ClusterNodeConfigConfidentialNodes {
  /*
Enable Confidential GKE Nodes for this cluster, to
enforce encryption of data in-use.
*/
  Enabled?: boolean;
}

export function Container_ClusterNodeConfigConfidentialNodes_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Enable Confidential GKE Nodes for this cluster, to\nenforce encryption of data in-use.",
      [],
      true,
      true,
    ),
  ];
}
