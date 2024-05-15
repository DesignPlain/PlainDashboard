import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_ClusterMasterAuthorizedNetworksConfigCidrBlock,
  Container_ClusterMasterAuthorizedNetworksConfigCidrBlock_GetTypes,
} from "./Container_ClusterMasterAuthorizedNetworksConfigCidrBlock";

export interface Container_ClusterMasterAuthorizedNetworksConfig {
  /*
External networks that can access the
Kubernetes cluster master through HTTPS.
*/
  CidrBlocks?: Array<Container_ClusterMasterAuthorizedNetworksConfigCidrBlock>;

  /*
Whether Kubernetes master is
accessible via Google Compute Engine Public IPs.
*/
  GcpPublicCidrsAccessEnabled?: boolean;
}

export function Container_ClusterMasterAuthorizedNetworksConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "CidrBlocks",
      "External networks that can access the\nKubernetes cluster master through HTTPS.",
      Container_ClusterMasterAuthorizedNetworksConfigCidrBlock_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "GcpPublicCidrsAccessEnabled",
      "Whether Kubernetes master is\naccessible via Google Compute Engine Public IPs.",
      [],
      false,
      false,
    ),
  ];
}
