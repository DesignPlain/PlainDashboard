import { ClusterMasterAuthorizedNetworksConfigCidrBlock } from "./ClusterMasterAuthorizedNetworksConfigCidrBlock";

export interface ClusterMasterAuthorizedNetworksConfig {
  /*
Whether Kubernetes master is
accessible via Google Compute Engine Public IPs.
*/
  GcpPublicCidrsAccessEnabled?: boolean;

  /*
External networks that can access the
Kubernetes cluster master through HTTPS.
*/
  CidrBlocks?: Array<ClusterMasterAuthorizedNetworksConfigCidrBlock>;
}
