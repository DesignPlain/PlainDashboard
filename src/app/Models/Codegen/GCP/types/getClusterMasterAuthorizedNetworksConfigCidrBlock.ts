export interface getClusterMasterAuthorizedNetworksConfigCidrBlock {
  // Field for users to identify CIDR blocks.
  DisplayName?: string;

  // External network that can access Kubernetes master through HTTPS. Must be specified in CIDR notation.
  CidrBlock?: string;
}
