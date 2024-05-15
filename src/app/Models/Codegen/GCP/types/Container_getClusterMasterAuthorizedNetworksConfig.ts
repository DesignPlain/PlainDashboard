import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_getClusterMasterAuthorizedNetworksConfigCidrBlock,
  Container_getClusterMasterAuthorizedNetworksConfigCidrBlock_GetTypes,
} from "./Container_getClusterMasterAuthorizedNetworksConfigCidrBlock";

export interface Container_getClusterMasterAuthorizedNetworksConfig {
  // External networks that can access the Kubernetes cluster master through HTTPS.
  CidrBlocks?: Array<Container_getClusterMasterAuthorizedNetworksConfigCidrBlock>;

  // Whether master is accessbile via Google Compute Engine Public IP addresses.
  GcpPublicCidrsAccessEnabled?: boolean;
}

export function Container_getClusterMasterAuthorizedNetworksConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "CidrBlocks",
      "External networks that can access the Kubernetes cluster master through HTTPS.",
      Container_getClusterMasterAuthorizedNetworksConfigCidrBlock_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "GcpPublicCidrsAccessEnabled",
      "Whether master is accessbile via Google Compute Engine Public IP addresses.",
      [],
      true,
      false,
    ),
  ];
}
