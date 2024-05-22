import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  container_getClusterMasterAuthorizedNetworksConfigCidrBlock,
  container_getClusterMasterAuthorizedNetworksConfigCidrBlock_GetTypes,
} from "./container_getClusterMasterAuthorizedNetworksConfigCidrBlock";

export interface container_getClusterMasterAuthorizedNetworksConfig {
  // Whether master is accessbile via Google Compute Engine Public IP addresses.
  gcpPublicCidrsAccessEnabled?: boolean;

  // External networks that can access the Kubernetes cluster master through HTTPS.
  cidrBlocks?: Array<container_getClusterMasterAuthorizedNetworksConfigCidrBlock>;
}

export function container_getClusterMasterAuthorizedNetworksConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "gcpPublicCidrsAccessEnabled",
      "Whether master is accessbile via Google Compute Engine Public IP addresses.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "cidrBlocks",
      "External networks that can access the Kubernetes cluster master through HTTPS.",
      container_getClusterMasterAuthorizedNetworksConfigCidrBlock_GetTypes(),
      true,
      false,
    ),
  ];
}
