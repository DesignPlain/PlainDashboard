import { getClusterMasterAuthorizedNetworksConfigCidrBlock } from "./getClusterMasterAuthorizedNetworksConfigCidrBlock";

export interface getClusterMasterAuthorizedNetworksConfig {
  // External networks that can access the Kubernetes cluster master through HTTPS.
  CidrBlocks?: Array<getClusterMasterAuthorizedNetworksConfigCidrBlock>;

  // Whether master is accessbile via Google Compute Engine Public IP addresses.
  GcpPublicCidrsAccessEnabled?: boolean;
}
